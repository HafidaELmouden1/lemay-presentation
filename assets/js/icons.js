/**
 * Inline SVG icon set — no external dependency, so the deck renders offline and
 * the production build needs no package install. Geometry is a simplified take
 * on the usual 24×24 outline vocabulary.
 */

const PATHS = {
  'arrow-right': '<path d="M4 12h15"/><path d="M13 6l6 6-6 6"/>',
  'arrow-down': '<path d="M12 4v15"/><path d="M6 13l6 6 6-6"/>',
  'arrow-up-right': '<path d="M7 17L17 7"/><path d="M8 7h9v9"/>',
  'chevron-left': '<path d="M14 6l-6 6 6 6"/>',
  'chevron-right': '<path d="M10 6l6 6-6 6"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.6 2.6L16 9.6"/>',
  'alert-triangle': '<path d="M12 4l9 16H3z"/><path d="M12 10v4"/><path d="M12 17h.01"/>',
  'user-check': '<circle cx="9" cy="8" r="3.4"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 13l2 2 3.4-3.6"/>',
  maximize:
    '<path d="M4 9V4h5"/><path d="M20 15v5h-5"/><path d="M15 4h5v5"/><path d="M9 20H4v-5"/>',
  monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  'clipboard-list':
    '<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M8 11h8"/><path d="M8 15h5"/>',
  'clipboard-check':
    '<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14l2 2 4-4"/>',
  'file-search':
    '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><circle cx="11" cy="14" r="2.4"/><path d="M13 16l2 2"/>',
  'file-text':
    '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/>',
  'file-check':
    '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 14l2 2 4-4"/>',
  workflow:
    '<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/><path d="M10 6.5h4a3 3 0 0 1 3 3V14"/>',
  send: '<path d="M21 3L11 13"/><path d="M21 3l-7 18-3.6-7.4L3 10z"/>',
  sparkles:
    '<path d="M12 3l1.9 4.9L19 9.8l-4.6 1.9L12 17l-1.9-5.3L5 9.8l5.1-1.9z"/><path d="M18 16l.9 2.1 2.1.9-2.1.9L18 22l-.9-2.1-2.1-.9 2.1-.9z"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"/>',
  database:
    '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  'git-branch':
    '<circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M6 8.2v3.4A2.4 2.4 0 0 0 8.4 14h7.2A2.4 2.4 0 0 0 18 11.6V8.2"/><path d="M12 14v1.8"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z"/>',
  'list-checks':
    '<path d="M4 6.5l1.8 1.8L9 5"/><path d="M4 13l1.8 1.8L9 11"/><path d="M12 6.8h8"/><path d="M12 13.3h8"/><path d="M12 19.8h8"/>',
  network:
    '<rect x="9" y="3" width="6" height="5" rx="1.2"/><rect x="2.5" y="16" width="6" height="5" rx="1.2"/><rect x="15.5" y="16" width="6" height="5" rx="1.2"/><path d="M12 8v4"/><path d="M5.5 16v-2.6A1.4 1.4 0 0 1 6.9 12H17a1.4 1.4 0 0 1 1.4 1.4V16"/>',
  tags: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1-.6-1.4V4.6A1.6 1.6 0 0 1 4.4 3H12a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><path d="M7.5 7.5h.01"/>',
  building:
    '<rect x="4" y="3" width="16" height="18" rx="1.6"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
  boxes:
    '<path d="M12 2.8l8 4v4.4l-8 4-8-4V6.8z"/><path d="M4 12.6l8 4 8-4"/><path d="M4 17l8 4 8-4"/>',
  mail: '<rect x="2.6" y="5" width="18.8" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  'message-square': '<path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/>',
  phone: '<path d="M6 3h3l2 5-2.4 1.6a12 12 0 0 0 5.4 5.4L15.6 13l5 2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3z"/>',
  server:
    '<rect x="3" y="4" width="18" height="7" rx="1.6"/><rect x="3" y="13" width="18" height="7" rx="1.6"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  'pen-tool':
    '<path d="M3 21l3.6-.9L20 6.7a2 2 0 0 0 0-2.8l-.9-.9a2 2 0 0 0-2.8 0L2.9 17.4z"/><path d="M15.5 5.5l3 3"/>',
  banknote:
    '<rect x="2.6" y="6" width="18.8" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 12h.01M18 12h.01"/>',
  camera:
    '<path d="M4 8h3l1.6-2.4h6.8L17 8h3a1.8 1.8 0 0 1 1.8 1.8v8A1.8 1.8 0 0 1 20 19.6H4A1.8 1.8 0 0 1 2.2 17.8v-8A1.8 1.8 0 0 1 4 8z"/><circle cx="12" cy="13.4" r="3.2"/>',
  mic: '<rect x="9" y="3" width="6" height="10" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/>',
  'scan-text':
    '<path d="M4 8V5.6A1.6 1.6 0 0 1 5.6 4H8"/><path d="M16 4h2.4A1.6 1.6 0 0 1 20 5.6V8"/><path d="M20 16v2.4a1.6 1.6 0 0 1-1.6 1.6H16"/><path d="M8 20H5.6A1.6 1.6 0 0 1 4 18.4V16"/><path d="M8 9h8M8 13h8M8 17h4"/>',
  inbox:
    '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.4 5h13.2L22 12v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5z"/>',
  paperclip:
    '<path d="M20 11.5l-8.4 8.4a4.9 4.9 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.6 4.6l-8.4 8.5a1.7 1.7 0 0 1-2.4-2.4l7.8-7.8"/>',
  'refresh-ccw':
    '<path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 4v4.4h-4.4"/>',
  users:
    '<circle cx="9" cy="8" r="3.4"/><path d="M2.6 20a6.4 6.4 0 0 1 12.8 0"/><path d="M16.4 5.2a3.4 3.4 0 0 1 0 6.4"/><path d="M18 14.4a6 6 0 0 1 3.4 5.6"/>',
  'badge-check':
    '<path d="M12 2.8l2.2 1.6 2.7-.3 1 2.5 2.3 1.4-.6 2.6.9 2.6-2 1.8-.4 2.7-2.6.7-1.8 2-2.5-.9-2.6.6-1.7-2-2.7-.5-.7-2.6-2-1.7.9-2.5-.6-2.6 2.2-1.5 1.3-2.4 2.7.2z"/><path d="M8.6 12.4l2.2 2.2 4.4-4.6"/>',
  timer: '<circle cx="12" cy="13.4" r="7.6"/><path d="M12 9.6v3.8l2.4 1.6"/><path d="M9.4 2.6h5.2"/>',
  play: '<path d="M8 4.8l11 7.2-11 7.2z"/>',
  pause: '<path d="M9 5v14M15 5v14"/>',
  'rotate-ccw': '<path d="M4 12a8 8 0 1 0 2.6-5.9"/><path d="M4 4v4.4h4.4"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 4 2.1c-.9.7-1.6 1.2-1.6 2.4"/><path d="M12 17.4h.01"/>',
  printer:
    '<path d="M7 8V3h10v5"/><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 16h10v5H7z"/>',
  target: '<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4"/><path d="M12 3.6v2M12 18.4v2M3.6 12h2M18.4 12h2"/>',
  compass:
    '<circle cx="12" cy="12" r="9"/><path d="M15.6 8.4l-2 5.2-5.2 2 2-5.2z"/>',
}

export function icon(name, className = 'icon') {
  const path = PATHS[name] ?? PATHS.target
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`
}

export function iconSvg(name, size = 16) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[name] ?? PATHS.target}</svg>`
}
