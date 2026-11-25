import type { IThemeRGB } from './types';

/**
 * Default light theme
 * Light palette inspired by the attached navy-and-red reference.
 */
export const defaultTheme: IThemeRGB = {
  // Text colors
  'rgb-text-primary': '26 36 51', // #1a2433
  'rgb-text-secondary': '59 71 90', // #3b475a
  'rgb-text-secondary-alt': '92 110 137', // #5c6e89 (darkened for AA contrast)
  'rgb-text-tertiary': '92 110 137', // #5c6e89 (darkened for AA contrast)
  'rgb-text-muted': '92 110 137', // #5c6e89 (darkened for AA contrast)
  'rgb-badge-label': '26 36 51', // matching text-primary
  'rgb-text-warning': '157 84 22', // #9d5416
  'rgb-text-destructive': '200 20 27', // #c8141b
  'rgb-shimmer-base': '26 36 51', // matching text-primary
  'rgb-shimmer-dip': '129 130 134', // #818286

  // Link and accent colors
  'rgb-link': '0 56 116', // #003874
  'rgb-link-hover': '11 37 69', // #0b2545
  'rgb-link-visited': '147 51 234', // #9333ea (purple-600)
  'rgb-link-prose': '0 56 116', // #003874 (matching link)
  'rgb-accent-primary': '0 56 116', // #003874
  'rgb-accent-primary-hover': '11 37 69', // #0b2545

  // Ring colors
  'rgb-ring-primary': '0 56 116', // #003874
  'rgb-focus-outline': '0 56 116', // #003874
  'rgb-focus-control': '0 56 116', // #003874

  // Header colors
  'rgb-header-primary': '255 255 255', // #fff (white)
  'rgb-header-hover': '234 240 248', // #eaf0f8
  'rgb-header-button-hover': '234 240 248', // #eaf0f8

  // Surface colors
  'rgb-surface-active': '234 240 248', // #eaf0f8
  'rgb-surface-active-alt': '213 224 239', // #d5e0ef
  'rgb-surface-hover': '234 240 248', // #eaf0f8
  'rgb-surface-hover-alt': '213 224 239', // #d5e0ef
  'rgb-surface-pressed': '234 240 248', // #eaf0f8 (matching surface-hover)
  'rgb-surface-composer-hover': '234 240 248', // #eaf0f8
  'rgb-surface-primary': '255 255 255', // #fff (white)
  'rgb-chart-widget-surface': '255 255 255', // #fff (matching surface-primary)
  'rgb-chart-widget-stroke': '227 232 239', // #e3e8ef
  'rgb-surface-primary-alt': '243 245 249', // #f3f5f9
  'rgb-surface-primary-contrast': '234 240 248', // #eaf0f8
  'rgb-surface-secondary': '255 255 255', // #ffffff (card surface)
  'rgb-surface-secondary-alt': '238 241 246', // #eef1f6
  'rgb-surface-tertiary': '234 240 248', // #eaf0f8
  'rgb-surface-tertiary-alt': '255 255 255', // #fff (white)
  'rgb-surface-dialog': '255 255 255', // #fff (white)
  'rgb-dialog-title': '26 36 51', // matching text-primary
  'rgb-surface-overlay': '89 89 89', // #595959 (gray-500)
  'rgb-surface-media-overlay': '0 0 0', // #000 (black, over the user's media in both modes)
  'rgb-text-on-media': '255 255 255', // #fff (white)
  'rgb-surface-media-chip': '255 255 255', // #fff (white), carried at 0.75 alpha
  'rgb-surface-submit': '200 20 27', // #c8141b
  'rgb-surface-submit-hover': '169 17 24', // #a91118
  'rgb-surface-destructive': '200 20 27', // #c8141b
  'rgb-surface-destructive-hover': '169 17 24', // #a91118
  'rgb-surface-chat': '255 255 255', // #fff (white)
  'rgb-surface-code': '243 245 249', // #f3f5f9 (matching surface-primary-alt)
  'rgb-surface-code-body': '255 255 255', // #fff (white)
  'rgb-surface-code-inline': '213 224 239', // #d5e0ef (matching surface-active-alt)
  'rgb-prose-bullet': '213 224 239', // #d5e0ef (matching border-medium)
  'rgb-prose-quote-bar': '213 224 239', // #d5e0ef (matching border-medium)
  'rgb-surface-qr': '255 255 255', // #fff (white)
  'rgb-surface-inverted': '0 56 116', // #003874
  'rgb-surface-inverted-hover': '11 37 69', // #0b2545
  'rgb-surface-inverted-pressed': '11 37 69', // #0b2545, the hover fill
  'rgb-button-primary': '0 56 116', // #003874 (matching surface-inverted)
  'rgb-button-primary-hover': '11 37 69', // #0b2545 (matching surface-inverted-hover)
  'rgb-text-inverted': '255 255 255', // #fff (white)
  'rgb-surface-fixed': '255 255 255', // #fff (white) — same in light + dark
  'rgb-surface-fixed-hover': '236 236 236', // #ececec (gray-100) — same in light + dark
  'rgb-text-fixed': '33 33 33', // #212121 (gray-800) — same in light + dark

  // Border colors
  'rgb-border-light': '227 232 239', // #e3e8ef
  'rgb-border-medium': '213 224 239', // #d5e0ef
  'rgb-border-medium-alt': '213 224 239', // #d5e0ef
  'rgb-border-heavy': '153 150 150', // #999696 (gray-400)
  'rgb-border-xheavy': '89 89 89', // #595959 (gray-500)
  'rgb-drawer-edge': '243 245 249', // #f3f5f9 (the drawer's own fill)
  'rgb-border-destructive': '237 28 36', // #ed1c24
  'rgb-border-control': '213 224 239', // #d5e0ef
  'rgb-border-field-focus': '0 56 116', // #003874 (matching focus-control)
  'rgb-focus-subtle': '153 150 150', // #999696 (gray-400, matching border-heavy)
  'rgb-field-fill': '255 255 255', // #fff (white, matching surface-primary)
  'rgb-field-text': '26 36 51', // matching text-primary
  'rgb-surface-tooltip': '255 255 255', // matching surface-primary
  'rgb-text-tooltip': '26 36 51', // matching text-primary
  'rgb-alert-error-fill': '253 236 236', // matching status-error-subtle
  'rgb-alert-error-border': '243 183 185', // matching status-error-border
  'rgb-surface-canvas': '243 245 249', // matching surface-primary-alt
  'rgb-surface-user-message': '234 240 248', // matching surface-tertiary
  'rgb-surface-card': '255 255 255', // matching surface-secondary
  'rgb-surface-card-hover': '234 240 248', // matching surface-tertiary
  'rgb-surface-nav-hover': '234 240 248', // matching surface-active
  'rgb-surface-nav-selected': '213 224 239', // matching surface-active-alt
  'rgb-surface-tab-selected': '234 240 248', // matching surface-tertiary
  'rgb-surface-menu': '255 255 255', // matching presentation
  'rgb-surface-popover': '255 255 255', // matching surface-primary
  'rgb-border-menu': '227 232 239', // matching border-light
  'rgb-surface-composer': '255 255 255', // matching surface-chat
  'rgb-surface-search': '255 255 255', // matching surface-primary
  'rgb-surface-sidebar': '243 245 249', // matching surface-primary-alt
  'rgb-surface-disabled': '236 236 236', // #ececec (gray-100)
  'rgb-text-disabled': '153 150 150', // #999696 (gray-400)
  'rgb-border-disabled': '227 227 227', // #e3e3e3 (gray-200)

  // Status colors
  'rgb-status-success': '4 120 87', // #047857 (green-700)
  'rgb-status-success-subtle': '230 244 238', // #e6f4ee
  'rgb-status-success-border': '110 231 183', // #6ee7b7 (green-300)
  'rgb-status-success-strong': '2 133 94', // #02855e
  'rgb-status-info': '0 56 116', // #003874
  'rgb-status-info-subtle': '234 240 248', // #eaf0f8
  'rgb-status-info-border': '213 224 239', // #d5e0ef
  'rgb-status-info-strong': '11 37 69', // #0b2545
  'rgb-status-warning': '157 84 22', // #9d5416
  'rgb-status-warning-subtle': '254 243 234', // #fef3ea
  'rgb-status-warning-border': '244 162 97', // #f4a261
  'rgb-status-warning-strong': '199 82 9', // #c75209
  'rgb-status-error': '200 20 27', // #c8141b
  'rgb-status-error-subtle': '253 236 236', // #fdecec
  'rgb-status-error-border': '243 183 185', // #f3b7b9
  'rgb-status-error-strong': '200 20 27', // #c8141b
  'rgb-status-neutral': '66 66 66', // #424242 (gray-600)
  'rgb-status-neutral-subtle': '236 236 236', // #ececec (gray-100)
  'rgb-status-neutral-border': '205 205 205', // #cdcdcd (gray-300)
  /** Verified mark. `blue-600` doubles as `status-info` here, and that is the
   *  point: one blue for "this is informational/first-party", 5.17:1 under the
   *  white label and 4.83:1 against the panel. */
  'rgb-status-verified': '0 56 116', // #003874
  'rgb-text-on-status': '255 255 255', // #fff (white)

  // Brand colors
  'rgb-brand-purple': '126 34 206', // #7e22ce (purple-700)
  'rgb-avatar-fill': '121 137 255', // #7989ff (the default avatar fill in every bundled theme)
  'rgb-avatar-text': '26 36 51', // matching text-primary
  'rgb-avatar-placeholder': '243 245 249', // #f3f5f9 (matching surface-primary-alt)
  'rgb-avatar-edge': '240 246 252', // #f0f6fc at 10%, a hairline that only shows against a dark page
  'rgb-illustration-subtle': '175 193 255', // #afc1ff
  'rgb-illustration': '121 137 255', // #7989ff
  'rgb-illustration-strong': '60 70 255', // #3c46ff
  'rgb-scrollbar-thumb': '0 0 0', // #000000
  'rgb-page-canvas': '243 245 249', // #f3f5f9 (matching surface-primary-alt)
  'rgb-select-fill': '255 255 255', // #ffffff
  'rgb-select-edge': '142 142 160', // #8e8ea0
  'rgb-button-neutral-border': '0 0 0', // #000000 at 10%
  'rgb-button-neutral-text': '59 71 90', // #3b475a
  'rgb-button-neutral-hover': '234 240 248', // #eaf0f8
  'rgb-link-inline': '0 56 116', // #003874
  'rgb-toast-edge': '67 90 111', // #435a6f
  'rgb-stroke-ink': '0 0 0', // #000000 at 10%
  'rgb-file-document': '255 85 136', // #ff5588
  'rgb-file-sheet': '16 163 127', // #10a37f
  'rgb-file-code': '255 110 60', // #ff6e3c
  'rgb-file-artifact': '45 48 92', // #2d305c
  'rgb-file-audio': '255 107 53', // #ff6b35
  'rgb-file-video': '139 92 246', // #8b5cf6
  'rgb-file-generic': '0 0 255', // #0000ff
  'rgb-file-ink': '255 255 255', // #ffffff

  /** Code syntax highlighting, measured against the `surface-code` and `surface-code-body` fills. */
  'rgb-syntax-text': '33 33 33', // #212121 (gray-800)
  'rgb-syntax-comment': '89 89 89', // #595959 (gray-500)
  'rgb-syntax-meta': '66 66 66', // #424242 (gray-600)
  'rgb-syntax-builtin': '154 103 0', // #9a6700
  'rgb-syntax-keyword': '5 80 174', // #0550ae
  'rgb-syntax-string': '10 123 98', // #0a7b62
  'rgb-syntax-attr': '154 47 106', // #9a2f6a
  'rgb-syntax-title': '180 35 24', // #b42318

  /** Categorical series scale. Steps clear 3:1 against BOTH the popover surface
   *  and the #ececec meter track, with worst adjacent CVD ΔE 12.4 and worst
   *  adjacent normal-vision ΔE 19.0. Slot order is the CVD-safety mechanism:
   *  indigo(8) sits beside green(7) because blue separates from green under
   *  protanopia/deuteranopia where red would not. */
  'rgb-series-1': '5 110 189', // #056ebd (cerulean)
  'rgb-series-2': '233 86 13', // #e9560d (orange)
  'rgb-series-3': '0 148 142', // #00948e (aqua)
  'rgb-series-4': '182 123 5', // #b67b05 (amber)
  'rgb-series-5': '216 90 142', // #d85a8e (magenta)
  'rgb-series-6': '126 35 205', // #7e23cd (violet)
  'rgb-series-7': '1 131 1', // #018301 (green)
  'rgb-series-8': '63 81 181', // #3f51b5 (indigo)
  'rgb-category-icon-1': '5 110 189', // #056ebd (matching series-1)
  'rgb-category-icon-2': '233 86 13', // #e9560d (matching series-2)
  'rgb-category-icon-4': '182 123 5', // #b67b05 (matching series-4)
  'rgb-category-icon-5': '216 90 142', // #d85a8e (matching series-5)
  'rgb-category-icon-6': '126 35 205', // #7e23cd (matching series-6)
  'rgb-category-icon-7': '1 131 1', // #018301 (matching series-7)

  /** Unchecked switch track. 3.03:1 against the white page and the
   *  `surface-primary` thumb, 5.91:1 against the checked `surface-inverted`
   *  track, so the control reads in either state. */
  'rgb-switch-unchecked': '148 148 148', // #949494
  'rgb-switch-thumb': '255 255 255', // #fff (white, matching surface-primary)
  'rgb-checkbox-fill': '255 255 255', // #fff (white, matching surface-primary)
  'rgb-table-header-text': '92 110 137', // #5c6e89 (matching text-muted)
  'rgb-table-header-fill': '247 249 252', // #f7f9fc

  // Presentation
  'rgb-presentation': '255 255 255', // #fff (white)
};
