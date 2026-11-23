import { slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08 } from './slides-a.js'
import { slide09, slide10, slide11, slide12, slide13, slide14, slide15 } from './slides-b.js'

export const RENDERERS = {
  1: slide01,
  2: slide02,
  3: slide03,
  4: slide04,
  5: slide05,
  6: slide06,
  7: slide07,
  8: slide08,
  9: slide09,
  10: slide10,
  11: slide11,
  12: slide12,
  13: slide13,
  14: slide14,
  15: slide15,
}

/** Inner markup of one slide (no stage wrapper). */
export function renderSlide(id) {
  const render = RENDERERS[id]
  return render ? render() : ''
}

/** A full 16:9 stage for a slide, ready to be inserted anywhere. */
export function renderStage(id, { preview = false } = {}) {
  return `<div class="stage ${preview ? 'stage-preview' : ''}"><div class="slide">${renderSlide(id)}</div></div>`
}
