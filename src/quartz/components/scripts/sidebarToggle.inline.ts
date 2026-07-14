const OPEN_CLASS = "left-sidebar-open"

let prevToggle: HTMLButtonElement | null = null
let prevBackdrop: HTMLElement | null = null
let prevSidebar: Element | null = null
let onToggle: ((e: Event) => void) | null = null
let onClose: (() => void) | null = null
let onSidebarClick: ((e: Event) => void) | null = null
let onKeydown: ((e: KeyboardEvent) => void) | null = null

document.addEventListener("nav", () => {
  const toggle = document.querySelector(".sidebar-toggle") as HTMLButtonElement | null
  const backdrop = document.querySelector(".sidebar-backdrop") as HTMLElement | null
  const leftSidebar = document.querySelector(".left.sidebar")
  const body = document.body

  const setState = (open: boolean) => {
    body.classList.toggle(OPEN_CLASS, open)
    toggle?.setAttribute("aria-expanded", open ? "true" : "false")
  }

  // remove listeners bound on a previous navigation to avoid duplicates
  if (prevToggle && onToggle) prevToggle.removeEventListener("click", onToggle)
  if (prevBackdrop && onClose) prevBackdrop.removeEventListener("click", onClose)
  if (prevSidebar && onSidebarClick) prevSidebar.removeEventListener("click", onSidebarClick)
  if (onKeydown) document.removeEventListener("keydown", onKeydown)

  // each navigation starts with the sidebar closed
  setState(false)

  onToggle = (e: Event) => {
    e.stopPropagation()
    setState(!body.classList.contains(OPEN_CLASS))
  }
  onClose = () => setState(false)
  onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setState(false)
  }
  // close when a link inside the left sidebar is followed
  onSidebarClick = (e: Event) => {
    if ((e.target as HTMLElement).closest("a")) setState(false)
  }

  toggle?.addEventListener("click", onToggle)
  backdrop?.addEventListener("click", onClose)
  leftSidebar?.addEventListener("click", onSidebarClick)
  document.addEventListener("keydown", onKeydown)

  prevToggle = toggle
  prevBackdrop = backdrop
  prevSidebar = leftSidebar
})
