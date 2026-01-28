/**
 * JBC Design System: Centralized Z-Index Registry
 * Prevents layering conflicts and visual drift in complex UI overlays.
 * Values are mapped to CSS variables in index.html.
 */
export const Z_INDEX = {
  base: 1,
  dropdown: 60,
  modal: 100,
  tooltip: 150,
  toast: 200,
} as const;

export type ZIndexKey = keyof typeof Z_INDEX;
