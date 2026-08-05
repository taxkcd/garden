// Reading status ("Reading" / "Read") for prof-papers, persisted in localStorage.
// Drives three things: the mark button on a paper page, the status dots in the
// explorer + paper list, and the Reading/Read sections on the prof-papers index.

const STORE_KEY = "garden-reading-status"
const PAPERS_FOLDER = "prof-papers"

type Mark = "reading" | "read"
type Entry = { status: Mark; at: string }
type Store = Record<string, Entry>
type PanelItem = { slug: string; title: string; href: string }

const LABELS: Record<Mark, string> = { reading: "Reading", read: "Read" }

function loadStore(): Store {
  const out: Store = {}
  try {
    const raw = window.localStorage.getItem(STORE_KEY)
    if (!raw) return out
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== "object") return out
    for (const [slug, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (value === "reading" || value === "read") {
        out[slug] = { status: value, at: "" }
      } else if (value && typeof value === "object") {
        const status = (value as Partial<Entry>).status
        const at = (value as Partial<Entry>).at
        if (status === "reading" || status === "read") {
          out[slug] = { status, at: typeof at === "string" ? at : "" }
        }
      }
    }
  } catch {
    // corrupt or unavailable storage — behave as if nothing is marked
  }
  return out
}

function saveStore(store: Store) {
  try {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(store))
  } catch {
    // private mode / quota — marks just won't persist
  }
}

function setStatus(slug: string, status: Mark | null) {
  const store = loadStore()
  if (status === null) {
    delete store[slug]
  } else {
    store[slug] = { status, at: new Date().toISOString() }
  }
  saveStore(store)
  applyAll()
}

function slugFromHref(href: string | null): string | null {
  if (!href) return null
  let path: string
  try {
    path = new URL(href, window.location.href).pathname
  } catch {
    return null
  }
  path = path.replace(/\.html$/, "").replace(/\/$/, "")
  const marker = `/${PAPERS_FOLDER}/`
  const idx = path.lastIndexOf(marker)
  if (idx === -1) return null
  const rest = path.slice(idx + marker.length)
  if (!rest || rest === "index") return null
  return `${PAPERS_FOLDER}/${decodeURIComponent(rest)}`
}

function paperSlugOf(link: HTMLAnchorElement): string | null {
  const fromData = link.dataset.slug
  if (fromData && fromData.startsWith(`${PAPERS_FOLDER}/`) && fromData !== `${PAPERS_FOLDER}/index`) {
    return fromData
  }
  return slugFromHref(link.getAttribute("href"))
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

// ── the mark button on a single paper page ────────────────────────────────────

function updateTrigger(store: Store) {
  const root = document.querySelector<HTMLElement>(".reading-status")
  if (!root) return

  const slug = root.dataset.slug || document.body.dataset.slug || ""
  const entry = store[slug]
  root.dataset.status = entry ? entry.status : "none"

  const label = root.querySelector<HTMLElement>(".reading-status-label")
  if (label) label.textContent = entry ? LABELS[entry.status] : "Mark"

  const trigger = root.querySelector<HTMLElement>(".reading-status-trigger")
  if (trigger) {
    trigger.setAttribute(
      "title",
      entry ? `Marked as ${LABELS[entry.status].toLowerCase()} — click to change` : "Mark this paper",
    )
  }

  root.querySelectorAll<HTMLElement>(".reading-status-option").forEach((option) => {
    const optionStatus = option.dataset.status ?? ""
    const isCurrent = optionStatus !== "" && optionStatus === entry?.status
    option.classList.toggle("current", isCurrent)
    option.setAttribute("aria-checked", String(isCurrent))
  })
}

function closeMenu() {
  document.querySelectorAll<HTMLElement>(".reading-status.open").forEach((root) => {
    root.classList.remove("open")
    root.querySelector(".reading-status-trigger")?.setAttribute("aria-expanded", "false")
  })
}

// ── status dots in the sidebar explorer ──────────────────────────────────────

function updateExplorer(store: Store) {
  document.querySelectorAll<HTMLAnchorElement>(".explorer a[data-for]").forEach((link) => {
    const slug = link.dataset.for ?? ""
    const status = store[slug]?.status
    link.classList.toggle("reading-mark-reading", status === "reading")
    link.classList.toggle("reading-mark-read", status === "read")
  })
}

// ── status dots on any rendered list of papers (the index page's list) ───────

function updateArticleList(store: Store) {
  document.querySelectorAll<HTMLLIElement>("article li").forEach((item) => {
    const link = item.querySelector<HTMLAnchorElement>("a[data-slug], a.internal")
    if (!link) return
    const slug = paperSlugOf(link)
    if (!slug) return

    const status = store[slug]?.status
    item.dataset.readingStatus = status ?? "unread"

    let dot = item.querySelector<HTMLElement>(":scope > .reading-dot")
    if (!dot) {
      dot = document.createElement("span")
      dot.className = "reading-dot"
      dot.setAttribute("aria-hidden", "true")
      item.insertBefore(dot, item.firstChild)
    }
    dot.dataset.status = status ?? "unread"
    dot.title = status ? LABELS[status] : "Not marked"
  })
}

// ── the Reading / Read sections on the prof-papers index ─────────────────────

const panelData = new WeakMap<HTMLElement, PanelItem[]>()

function readPanelData(panel: HTMLElement): PanelItem[] {
  const cached = panelData.get(panel)
  if (cached) return cached

  let items: PanelItem[] = []
  const raw = panel.querySelector("script.reading-panel-data")?.textContent
  if (raw) {
    try {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) items = parsed as PanelItem[]
    } catch {
      items = []
    }
  }
  panelData.set(panel, items)
  return items
}

function renderSection(panel: HTMLElement, store: Store, section: Mark, items: PanelItem[]) {
  const container = panel.querySelector<HTMLElement>(`.reading-panel-section[data-section="${section}"]`)
  if (!container) return 0

  const marked = items
    .filter((item) => store[item.slug]?.status === section)
    .sort((a, b) => (store[b.slug]?.at ?? "").localeCompare(store[a.slug]?.at ?? ""))

  const other: Mark = section === "reading" ? "read" : "reading"
  const list = container.querySelector<HTMLElement>(".reading-panel-list")
  if (list) {
    list.innerHTML = marked
      .map((item) => {
        const slug = escapeHtml(item.slug)
        return `<li class="reading-panel-item">
  <a class="internal" href="${escapeHtml(item.href)}" data-slug="${slug}">${escapeHtml(item.title)}</a>
  <span class="reading-panel-actions">
    <button type="button" data-reading-action data-slug="${slug}" data-status="${other}">${LABELS[other]}</button>
    <button type="button" data-reading-action data-slug="${slug}" data-status="">Unmark</button>
  </span>
</li>`
      })
      .join("")
  }

  const count = container.querySelector<HTMLElement>(".reading-panel-count")
  if (count) count.textContent = String(marked.length)
  container.classList.toggle("is-empty", marked.length === 0)
  return marked.length
}

function updatePanel(store: Store) {
  const panel = document.querySelector<HTMLElement>(".reading-panel")
  if (!panel) return

  const items = readPanelData(panel)
  const reading = renderSection(panel, store, "reading", items)
  const read = renderSection(panel, store, "read", items)
  const counts: Record<string, number> = {
    all: items.length,
    reading,
    read,
    unread: items.length - reading - read,
  }

  const activeFilter = document.body.dataset.readingFilter ?? "all"
  panel.querySelectorAll<HTMLElement>(".reading-chip").forEach((chip) => {
    const filter = chip.dataset.filter ?? "all"
    const count = chip.querySelector<HTMLElement>(".reading-chip-count")
    if (count) count.textContent = String(counts[filter] ?? 0)
    chip.classList.toggle("active", filter === activeFilter)
    chip.setAttribute("aria-pressed", String(filter === activeFilter))
  })
}

function setFilter(filter: string) {
  document.body.dataset.readingFilter = filter
  applyAll()
}

// ── wiring ───────────────────────────────────────────────────────────────────

function applyAll() {
  const store = loadStore()
  updateTrigger(store)
  updateExplorer(store)
  updateArticleList(store)
  updatePanel(store)
}

document.addEventListener("click", (event) => {
  const target = event.target
  if (!(target instanceof Element)) return

  const trigger = target.closest(".reading-status-trigger")
  if (trigger) {
    event.preventDefault()
    const root = trigger.closest(".reading-status")
    const wasOpen = root?.classList.contains("open") ?? false
    closeMenu()
    if (root && !wasOpen) {
      root.classList.add("open")
      trigger.setAttribute("aria-expanded", "true")
    }
    return
  }

  const option = target.closest<HTMLElement>(".reading-status-option")
  if (option) {
    event.preventDefault()
    const slug =
      option.closest<HTMLElement>(".reading-status")?.dataset.slug ?? document.body.dataset.slug ?? ""
    const status = option.dataset.status
    if (slug) setStatus(slug, status === "reading" || status === "read" ? status : null)
    closeMenu()
    return
  }

  const action = target.closest<HTMLElement>("[data-reading-action]")
  if (action) {
    event.preventDefault()
    const slug = action.dataset.slug ?? ""
    const status = action.dataset.status
    if (slug) setStatus(slug, status === "reading" || status === "read" ? status : null)
    return
  }

  const chip = target.closest<HTMLElement>(".reading-chip")
  if (chip) {
    event.preventDefault()
    setFilter(chip.dataset.filter ?? "all")
    return
  }

  closeMenu()
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu()
})

window.addEventListener("storage", (event) => {
  if (event.key === null || event.key === STORE_KEY) applyAll()
})

document.addEventListener("nav", () => {
  closeMenu()
  if (!document.body.dataset.readingFilter) document.body.dataset.readingFilter = "all"
  applyAll()
})
