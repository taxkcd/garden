import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/readingStatus.scss"
// @ts-ignore
import script from "./scripts/readingStatus.inline"

// "Mark" button with a Reading / Read dropdown, shown at the top right of a paper.
// State lives in localStorage; see scripts/readingStatus.inline.ts.
function ReadingStatus({ fileData, displayClass }: QuartzComponentProps) {
  return (
    <div
      class={`reading-status ${displayClass ?? ""}`}
      data-slug={fileData.slug}
      data-status="none"
    >
      <button
        type="button"
        class="reading-status-trigger"
        aria-haspopup="true"
        aria-expanded="false"
        title="Mark this paper"
      >
        <svg
          class="reading-status-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
        <span class="reading-status-label">Mark</span>
        <svg
          class="reading-status-chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="reading-status-menu" role="menu">
        <button
          type="button"
          class="reading-status-option"
          role="menuitemradio"
          aria-checked="false"
          data-status="reading"
        >
          Reading
        </button>
        <button
          type="button"
          class="reading-status-option"
          role="menuitemradio"
          aria-checked="false"
          data-status="read"
        >
          Read
        </button>
        <button
          type="button"
          class="reading-status-option reading-status-clear"
          role="menuitem"
          data-status=""
        >
          Clear mark
        </button>
      </div>
    </div>
  )
}

ReadingStatus.css = style
ReadingStatus.afterDOMLoaded = script

export default (() => ReadingStatus) satisfies QuartzComponentConstructor
