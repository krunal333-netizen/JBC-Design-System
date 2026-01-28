export interface ColorSwatch {
  name: string;
  darkHex: string;
  lightHex: string;
  description: string;
  category: 'Primary' | 'Secondary' | 'Neutral' | 'Semantic';
}

export interface EntityColor {
  id: string;
  label: string;
  bg: {
    dark: string;
    light: string;
  };
  text: string;
  icon: string;
  darkVariant?: string;
  lightVariant?: string;
}

export interface TypoScale {
  label: string;
  previewText: string;
  details: string;
  className: string;
}

export interface TokenGroup {
  name: string;
  details: string;
  value: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface Trait {
  title: string;
  description: string;
  icon: string;
}

export interface IconItem {
  name: string;
  class: string;
}

export interface IconGroup {
  category: string;
  icons: IconItem[];
}

export interface BreakpointRule {
  name: string;
  range: string;
  columns: number;
}

export interface SpacingToken {
  id: string;
  value: string;
}