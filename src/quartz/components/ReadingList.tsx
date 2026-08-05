import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/readingStatus.scss"
// @ts-ignore
import script from "./scripts/readingStatus.inline"

interface Options {
  // content folder whose pages can be marked, e.g. "prof-papers"
  folder: string
}

const defaultOptions: Options = { folder: "prof-papers" }

// Reading / Read sections plus filter chips, for the index page of a folder.
// The sections are filled in client-side from localStorage; this component only
// ships the list of candidate pages (slug, title, resolved href) as JSON.
export default ((userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }

  function ReadingList({ fileData, allFiles, displayClass }: QuartzComponentProps) {
    const items = allFiles
      .filter((file) => {
        const slug = file.slug ?? ""
        return slug.startsWith(`${opts.folder}/`) && slug !== `${opts.folder}/index`
      })
      .sort((a, b) => {
        const seqA = Number(a.frontmatter?.sequence ?? 0)
        const seqB = Number(b.frontmatter?.sequence ?? 0)
        if (seqA !== seqB) return seqB - seqA
        return (b.slug ?? "").localeCompare(a.slug ?? "")
      })
      .map((file) => ({
        slug: file.slug!,
        title: file.frontmatter?.title ?? file.slug!,
        href: resolveRelative(fileData.slug!, file.slug! as FullSlug),
      }))

    const data = JSON.stringify(items).replace(/</g, "\\u003c")

    return (
      <div class={`reading-panel ${displayClass ?? ""}`}>
        <script
          class="reading-panel-data"
          type="application/json"
          dangerouslySetInnerHTML={{ __html: data }}
        />
        <section class="reading-panel-section is-empty" data-section="reading">
          <h3 class="reading-panel-heading">
            Reading <span class="reading-panel-count">0</span>
          </h3>
          <p class="reading-panel-empty">
            Nothing in progress. Open a paper and mark it <em>Reading</em> to park it here.
          </p>
          <ul class="reading-panel-list" />
        </section>
        <section class="reading-panel-section is-empty" data-section="read">
          <h3 class="reading-panel-heading">
            Read <span class="reading-panel-count">0</span>
          </h3>
          <p class="reading-panel-empty">Nothing finished yet.</p>
          <ul class="reading-panel-list" />
        </section>
        <div class="reading-chips">
          <span class="reading-chips-label">Show:</span>
          <button type="button" class="reading-chip active" data-filter="all" aria-pressed="true">
            All <span class="reading-chip-count">{items.length}</span>
          </button>
          <button type="button" class="reading-chip" data-filter="unread" aria-pressed="false">
            Unmarked <span class="reading-chip-count">0</span>
          </button>
          <button type="button" class="reading-chip" data-filter="reading" aria-pressed="false">
            Reading <span class="reading-chip-count">0</span>
          </button>
          <button type="button" class="reading-chip" data-filter="read" aria-pressed="false">
            Read <span class="reading-chip-count">0</span>
          </button>
        </div>
      </div>
    )
  }

  ReadingList.css = style
  ReadingList.afterDOMLoaded = script

  return ReadingList
}) satisfies QuartzComponentConstructor
