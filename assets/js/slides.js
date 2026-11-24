import {
  slide01,
  slide02,
  slide03,
  slide04,
  slide05n8n,
  slide07Proof,
  slide05,
  slide06,
  slide07,
  slide08,
} from './slides-a.js'
import { slide09, slide10, slide11, slide12, slide13, slide14, slide15 } from './slides-b.js'

export const RENDERERS = {
  1: slide01,
  2: slide02,
  3: slide03,
  4: slide04,
  5: slide05n8n,
  6: slide05,
  7: slide07Proof,
  8: slide06,
  9: slide07,
  10: slide08,
  11: slide09,
  12: slide10,
  13: slide11,
  14: slide12,
  15: slide13,
  16: slide14,
  17: slide15,
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
