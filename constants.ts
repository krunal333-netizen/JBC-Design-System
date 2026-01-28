import { IconGroup, NavItem, Trait, TypoScale, ColorSwatch, EntityColor, BreakpointRule, SpacingToken } from './types';

export const ICON_LIBRARY_VERSION = "1.2.0";

// Standardized stroke tokens for scalable icon sets
export const ICON_STROKE_TOKENS = [1.25, 1.5, 1.75];
export const DEFAULT_ICON_STROKE = 1.5;

// Binding stroke to size for external utility icons
export const EXTERNAL_ICON_STROKE_MAP: Record<number, number> = {
  16: 1.25,
  20: 1.25,
  24: 1.5,
  32: 1.75,
  48: 1.75
};

// Layout Specification
export const LAYOUT_SPEC = {
  container: {
    boxed: "1200px (Desktop Max)",
    fluid: "100% (Edge-to-Edge)"
  },
  breakpoints: [
    { name: 'Mobile', range: '< 640px', columns: 4 },
    { name: 'Tablet', range: '640px - 1024px', columns: 8 },
    { name: 'Desktop', range: '> 1024px', columns: 12 }
  ] as BreakpointRule[],
  spacing: [
    { id: 'xs', value: '4px' },
    { id: 'sm', value: '8px' },
    { id: 'md', value: '16px' },
    { id: 'lg', value: '24px' },
    { id: 'xl', value: '32px' }
  ] as SpacingToken[],
  gutter: 'spacing.md (16px)',
  density: {
    comfortable: { padding: '16px', gap: '16px', label: 'Default (Platform Baseline)' },
    compact: { padding: '8px', gap: '8px', label: 'Data-Heavy (Dashboard/Terminal)' }
  }
};

// Navigation Rules
export const NAVIGATION_RULES = {
  horizontal: {
    placement: "Top Aligned",
    behavior: "Desktop Primary Navigation. Top aligned. Collapsible into drawer on tablet.",
    alignment: "Standard Left-to-Right"
  },
  vertical: {
    placement: "Sidebar Left / Right",
    behavior: "Sidebar pattern. Icon + label support. Supports collapsible collapsed state.",
    width: "280px"
  },
  mobile: {
    type: "Bottom Navigation Bar",
    maxActions: 5,
    behavior: "Thumb-friendly targets (min 44px). Auto-hide on scroll down. Persistent on scroll up."
  },
  rtl: {
    logic: "Horizontal Mirroring",
    rules: [
      "Layout must mirror horizontally",
      "Navigation order reverses",
      "Icons flip direction (except non-directional assets like logos)"
    ]
  }
};

// Theme Foundation Rules
export const THEME_FOUNDATION_RULES = {
  modes: [
    { id: 'light', label: 'Light Theme', desc: 'Default surfaces and text for high-ambient light.' },
    { id: 'dark', label: 'Dark Theme', desc: 'Default surfaces and text for low-light/standard usage.' },
    { id: 'high-contrast', label: 'High Contrast (Future)', desc: 'Reserved token set for accessibility compliance.' }
  ],
  sync: "System Sync: Respect OS theme (light/dark) with manual local-storage override.",
  transitions: "300ms ease-standard"
};

// Governed Icon System Specification
export const ICON_GOVERNANCE_SPEC = {
  grid: "24 × 24px",
  strokePlacement: "Centered",
  capsAndJoins: "Round",
  cornerRadius: "2px",
  strokes: [
    { id: 'thin', label: 'Thin', value: 1.25 },
    { id: 'base', label: 'Base', value: 1.5 },
    { id: 'bold', label: 'Bold', value: 1.75 }
  ],
  externalNormalization: {
    sources: ['Lucide', 'Tabler', 'Phosphor'],
    rules: [
      "Must fit 24×24px grid",
      "Round caps and joins strictly required",
      "No filled shapes allowed for utility icons",
      "Stroke weight must follow size-bound mapping",
      "Use only JBC semantic color tokens"
    ],
    usageWarning: "External icons must never replace JBC brand or platform icons."
  },
  variants: [
    'outline', 'filled', 'lineal', 'flat', 'gradient', 'lineal color', 'animated'
  ],
  timing: [
    { id: 'fast', label: 'Fast', value: '150ms' },
    { id: 'base', label: 'Base', value: '250ms' },
    { id: 'slow', label: 'Slow', value: '400ms' }
  ],
  cdnStructure: "cdn.jbc.finance/icons/{version}/{style}/{name}.svg",
  pipeline: [
    "Figma is source of truth",
    "Frame name = icon name",
    "Export SVG only (Standard 1.1)",
    "Strict 24×24 grid adherence",
    "No raster data allowed"
  ]
};

// Enterprise Component Specs & Platform Mappings
export const ENTERPRISE_SPEC = {
  avatar: {
    sizes: [
      { id: 'sm', val: 24, tailwind: 'w-6 h-6' },
      { id: 'md', val: 32, tailwind: 'w-8 h-8' },
      { id: 'lg', val: 40, tailwind: 'w-10 h-10' },
      { id: 'xl', val: 56, tailwind: 'w-14 h-14' }
    ],
    border: '2px solid var(--jbc-color-surface)',
    radius: 'var(--jbc-radius-md)'
  },
  stepper: {
    states: ['Active', 'Completed', 'Disabled'],
    desktop: 'Horizontal with Connector',
    mobile: 'Vertical with Left Gutter'
  },
  skeleton: {
    shimmer: 'animate-[shimmer_2s_infinite]',
    colors: {
      dark: 'rgba(255,255,255,0.05)',
      light: 'rgba(0,0,0,0.05)'
    }
  },
  platformMapping: {
    ios: {
      avatar: 'UIImageView (Circular) / SwiftUI.Image.clipShape(Circle())',
      stepper: 'SwiftUI.ProgressView / Custom Segmented Control',
      skeleton: 'Shimmer-SwiftUI Modifier',
      grid: 'UICollectionView (Diffable Data Source)',
      error: 'UIContentUnavailableConfiguration (iOS 17+)'
    },
    android: {
      avatar: 'ShapeableImageView (circle) / Compose.Image.clip(CircleShape)',
      stepper: 'Material Stepper / Compose LinearProgressIndicator',
      skeleton: 'Compose Shimmer Library (Accompanist)',
      grid: 'LazyVerticalGrid / LazyColumn',
      error: 'Compose.EmptyState Component (Material3)'
    }
  }
};

// Elevation Specification
export const ELEVATION_SPEC = {
  levels: [
    { id: 'flat', shadow: 'none', border: '1px solid', usage: 'Input fields, subtle dividers' },
    { id: 'low', label: 'Surface', shadow: 'var(--jbc-elevation-low)', border: 'none', usage: 'Card items, list rows' },
    { id: 'mid', label: 'Overlay', shadow: 'var(--jbc-elevation-mid)', border: 'none', usage: 'Dropdowns, Context Menus' },
    { id: 'high', label: 'Float', shadow: 'var(--jbc-elevation-high)', border: 'none', usage: 'Modals, Popovers' }
  ],
  tokens: {
    zHeader: 40,
    zSidebar: 50,
    zModal: 100
  }
};

export const PLATFORM_COLOR_TOKENS: EntityColor[] = [
  { id: 'youtube', label: 'YouTube', bg: { dark: '#FF0000', light: '#E53935' }, text: '#FFFFFF', icon: 'ri-youtube-fill' },
  { id: 'x', label: 'X (Twitter)', bg: { dark: '#000000', light: '#000000' }, text: '#FFFFFF', icon: 'ri-twitter-x-fill', darkVariant: '#FFFFFF', lightVariant: '#000000' },
  { id: 'spotify', label: 'Spotify', bg: { dark: '#1DB954', light: '#1AA34A' }, text: '#FFFFFF', icon: 'ri-spotify-fill' },
  { id: 'instagram', label: 'Instagram', bg: { dark: '#E4405F', light: '#D81B60' }, text: '#FFFFFF', icon: 'ri-instagram-fill' },
  { id: 'facebook', label: 'Facebook', bg: { dark: '#1877F2', light: '#0D47A1' }, text: '#FFFFFF', icon: 'ri-facebook-fill' },
  { id: 'google', label: 'Google', bg: { dark: '#4285F4', light: '#1976D2' }, text: '#FFFFFF', icon: 'ri-google-fill' },
  { id: 'amazon', label: 'Amazon', bg: { dark: '#FF9900', light: '#E68A00' }, text: '#000000', icon: 'ri-amazon-fill' },
  { id: 'ebay', label: 'Ebay', bg: { dark: '#E53238', light: '#B71C1C' }, text: '#FFFFFF', icon: 'ri-shopping-bag-fill' },
  { id: 'linkedin', label: 'Linkedin', bg: { dark: '#0A66C2', light: '#004182' }, text: '#FFFFFF', icon: 'ri-linkedin-fill' },
  { id: 'yandex', label: 'Yandex', bg: { dark: '#FF0000', light: '#D32F2F' }, text: '#FFFFFF', icon: 'ri-search-line' },
  { id: 'cmc', label: 'CoinMarketCap', bg: { dark: '#1D3FD1', light: '#1565C0' }, text: '#FFFFFF', icon: 'ri-line-chart-fill' },
  { id: 'coingecko', label: 'CoinGecko', bg: { dark: '#8CC63F', light: '#689F38' }, text: '#FFFFFF', icon: 'ri-money-dollar-circle-fill' },
  { id: 'crypto', label: 'Crypto', bg: { dark: '#03FDDA', light: '#00BFA5' }, text: '#000000', icon: 'ri-coin-fill' },
  { id: 'dapps', label: 'DApps', bg: { dark: '#FFD700', light: '#E6C200' }, text: '#000000', icon: 'ri-apps-2-fill' }
];

export const TASK_COLOR_TOKENS: EntityColor[] = [
  { id: 'view', label: 'View', bg: { dark: '#8B949E', light: '#57606A' }, text: '#FFFFFF', icon: 'ri-eye-line' },
  { id: 'like', label: 'Like', bg: { dark: '#DA3633', light: '#B91C1C' }, text: '#FFFFFF', icon: 'ri-heart-fill' },
  { id: 'follow', label: 'Follow', bg: { dark: '#03FDDA', light: '#00BFA5' }, text: '#000000', icon: 'ri-user-add-line' },
  { id: 'subscribe', label: 'Subscribe', bg: { dark: '#FFD700', light: '#E6C200' }, text: '#000000', icon: 'ri-notification-3-fill' },
  { id: 'comment', label: 'Comment', bg: { dark: '#1877F2', light: '#1976D2' }, text: '#FFFFFF', icon: 'ri-chat-3-line' },
  { id: 'share', label: 'Share', bg: { dark: '#2EA043', light: '#166534' }, text: '#FFFFFF', icon: 'ri-share-line' },
  { id: 'repost', label: 'Repost', bg: { dark: '#2EA043', light: '#166534' }, text: '#FFFFFF', icon: 'ri-repeat-line' },
  { id: 'post', label: 'Post', bg: { dark: '#7057FF', light: '#5E35B1' }, text: '#FFFFFF', icon: 'ri-send-plane-fill' }
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: 'ri-home-4-line' },
  { id: 'design-intelligence', label: 'AI / Design Intelligence', icon: 'ri-magic-line' },
  { id: 'typography', label: 'Typography', icon: 'ri-font-size' },
  { id: 'colors', label: 'Colors', icon: 'ri-palette-line' },
  { id: 'semantic-colors', label: 'Semantic Entities', icon: 'ri-shapes-line' },
  { id: 'icons', label: 'Icons', icon: 'ri-remixicon-line' },
  { id: 'icon-governance', label: 'Icon Governance', icon: 'ri-shield-keyhole-line' },
  { id: 'automation-systems', label: 'Automation & Registry', icon: 'ri-robot-line' },
  { id: 'design-sync', label: 'Governance / Design Sync', icon: 'ri-sync-line' },
  { id: 'ci-validation', label: 'Governance / CI Validation', icon: 'ri-shield-check-line' },
  { id: 'versioning', label: 'Governance / Versioning', icon: 'ri-history-line' },
  { id: 'layout-nav', label: 'Layout & Nav', icon: 'ri-layout-6-line' },
  { id: 'light-mode-elevation', label: 'Theme / Elevation (Light)', icon: 'ri-sun-line' },
  { id: 'select-picker', label: 'Select & Picker', icon: 'ri-list-settings-line' },
  { id: 'forms', label: 'Forms / Inputs', icon: 'ri-survey-line' },
  { id: 'validation-summary', label: 'Forms / Validation Summary', icon: 'ri-error-warning-line' },
  { id: 'components', label: 'Components', icon: 'ri-stack-line' },
  { id: 'avatars', label: 'Avatars', icon: 'ri-user-smile-line' },
  { id: 'steppers', label: 'Process Steppers', icon: 'ri-list-check-2' },
  { id: 'data-grids', label: 'Advanced Grids', icon: 'ri-grid-fill' },
  { id: 'feedback-states', label: 'Feedback & Empty', icon: 'ri-feedback-line' },
  { id: 'toasts', label: 'Feedback / Toasts', icon: 'ri-notification-4-line' },
  { id: 'tooltips', label: 'Feedback / Tooltips', icon: 'ri-chat-poll-line' },
  { id: 'haptics', label: 'Platform / Haptics', icon: 'ri-hand-coin-line' },
  { id: 'native-parity', label: 'Platform / Native Parity', icon: 'ri-device-line' },
  { id: 'breadcrumbs', label: 'Navigation / Breadcrumbs', icon: 'ri-guide-line' },
  { id: 'dividers', label: 'Layout / Dividers', icon: 'ri-separator' },
  { id: 'rtl-support', label: 'Internationalization / RTL', icon: 'ri-translate-2' },
  { id: 'error-pages', label: 'Resilience Pages', icon: 'ri-error-warning-line' },
  { id: 'button-usage', label: 'Button Rules', icon: 'ri-focus-3-line' },
  { id: 'platform-sdk', label: 'Platform SDK', icon: 'ri-command-line' },
  { id: 'adaptive-layout', label: 'Adaptive Rules', icon: 'ri-layout-masonry-line' },
  { id: 'accessibility', label: 'Accessibility', icon: 'ri-user-smile-line' },
  { id: 'implementation', label: 'Implementation', icon: 'ri-code-s-slash-line' },
  { id: 'best-practices', label: 'Best Practices', icon: 'ri-lightbulb-line' },
  { id: 'responsive', label: 'Responsive', icon: 'ri-layout-grid-line' },
];

export const BRAND_TRAITS: Trait[] = [
  { title: 'Institutional Trust', description: 'Every transaction is secured by peer-reviewed smart contracts.', icon: 'ri-shield-check-line' },
  { title: 'Flash Execution', description: 'Sub-second finality for trading and liquidity management.', icon: 'ri-flashlight-line' },
  { title: 'Adaptive Logic', description: 'AI-driven portfolio rebalancing tailored to your goals.', icon: 'ri-magic-line' },
];

export const TYPO_SCALE: TypoScale[] = [
  { label: 'Display H1', previewText: 'Unified Finance', details: '700 Weight / 72px Desktop', className: 'text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter' },
  { label: 'Heading H2', previewText: 'Global Liquidity', details: '700 Weight / 48px Desktop', className: 'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight' },
  { label: 'Body Large', previewText: 'The future of finance is decentralized.', details: '400 Weight / 20px', className: 'text-lg sm:text-xl lg:text-2xl opacity-80' },
  { label: 'Caption Mono', previewText: '0x32A...F82B SIGNED', details: '500 Weight / 12px / Monospace', className: 'font-mono text-xs uppercase tracking-widest opacity-60' },
];

export const COLORS: ColorSwatch[] = [
  { name: 'Cyan Primary', darkHex: '#03FDDA', lightHex: '#00BFA5', description: 'Links, CTAs, Active States', category: 'Primary' },
  { name: 'Gold Accent', darkHex: '#FFD700', lightHex: '#E6C200', description: 'Highlights, Premium, Warnings', category: 'Secondary' },
  { name: 'Background Dark', darkHex: '#0B0E14', lightHex: '#F8F9FA', description: 'Main App Background', category: 'Neutral' },
  { name: 'Surface Card', darkHex: '#161B22', lightHex: '#FFFFFF', description: 'Cards, Modals, Sidebar', category: 'Neutral' },
  { name: 'Text Primary', darkHex: '#FFFFFF', lightHex: '#1C2128', description: 'Headings, Body Text', category: 'Neutral' },
  { name: 'Text Secondary', darkHex: '#8B949E', lightHex: '#57606A', description: 'Metadata, Placeholders', category: 'Neutral' },
  { name: 'Success Green', darkHex: '#2EA043', lightHex: '#166534', description: 'Positive Trends, Complete', category: 'Semantic' },
  { name: 'Error Red', darkHex: '#DA3633', lightHex: '#B91C1C', description: 'Negative Trends, Errors', category: 'Semantic' },
];

export const ICON_CATEGORIES: IconGroup[] = [
  {
    category: 'Core UI / Platform',
    icons: [
      { name: 'Task', class: 'ri-task-line' },
      { name: 'Portfolio', class: 'ri-briefcase-4-line' },
      { name: 'Stake', class: 'ri-database-2-line' },
      { name: 'Migration', class: 'ri-arrow-left-right-line' },
      { name: 'Lock', class: 'ri-lock-line' },
      { name: 'Rewards', class: 'ri-gift-line' },
      { name: 'Governance', class: 'ri-government-line' },
      { name: 'Vesting', class: 'ri-hourglass-2-line' },
      { name: 'Projects', class: 'ri-rocket-2-line' },
      { name: 'Referral', class: 'ri-share-forward-line' },
      { name: 'Invite', class: 'ri-user-add-line' },
      { name: 'Percentage', class: 'ri-percent-line' },
      { name: 'Post', class: 'ri-send-plane-fill' },
    ]
  },
  {
    category: 'Auth / System',
    icons: [
      { name: 'Login', class: 'ri-login-box-line' },
      { name: 'Logout', class: 'ri-logout-box-line' },
      { name: 'Dropdown', class: 'ri-arrow-down-s-line' },
      { name: 'Arrow', class: 'ri-arrow-right-line' },
      { name: 'Chevron', class: 'ri-arrow-right-s-line' },
      { name: 'Close', class: 'ri-close-line' },
      { name: 'Check', class: 'ri-check-line' },
      { name: 'Warning', class: 'ri-error-warning-line' },
      { name: 'Error', class: 'ri-close-circle-line' },
      { name: 'Info', class: 'ri-information-line' },
    ]
  },
  {
    category: 'App / Platform Icons',
    icons: [
      { name: 'YouTube', class: 'ri-youtube-line' },
      { name: 'Instagram', class: 'ri-instagram-line' },
      { name: 'Facebook', class: 'ri-facebook-circle-line' },
      { name: 'LinkedIn', class: 'ri-linkedin-box-line' },
      { name: 'Spotify', class: 'ri-spotify-line' },
      { name: 'Yandex', class: 'ri-search-line' },
      { name: 'Amazon', class: 'ri-amazon-line' },
      { name: 'Ebay', class: 'ri-shopping-cart-line' },
      { name: 'Google', class: 'ri-google-line' },
      { name: 'Shazam', class: 'ri-music-2-line' },
      { name: 'X (Twitter)', class: 'ri-twitter-x-line' },
      { name: 'CMC', class: 'ri-line-chart-line' },
      { name: 'CoinGecko', class: 'ri-money-dollar-circle-line' },
      { name: 'Crypto', class: 'ri-coin-line' },
      { name: 'DApps', class: 'ri-apps-2-line' },
    ]
  }
];

export const ICON_STYLES = [
  { id: 'outline', label: 'Outline' },
  { id: 'filled', label: 'Filled' },
  { id: 'lineal', label: 'Lineal' },
  { id: 'flat', label: 'Flat' },
  { id: 'gradient', label: 'Gradient' },
  { id: 'lineal-color', label: 'Lineal Color' }
];

export const ICON_SIZES = [16, 20, 24, 32, 48];

export const ICON_PLATFORM_MAP: Record<string, { ios: string, android: string }> = {
  'ri-task-line': { ios: 'checkmark.seal', android: 'ic_task' },
  'ri-briefcase-4-line': { ios: 'briefcase', android: 'ic_portfolio' },
  'ri-database-2-line': { ios: 'cylinder.split.1x2', android: 'ic_stake' },
};

export const BUTTON_SPEC = {
  geometry: { minHitArea: '44px', borderRadius: '12px' },
  platformMapping: {
    ios: {
      swiftUI: 'Button(action: {}) { Text("Label") }.buttonStyle(JBCPrimaryStyle())',
      uikit: 'let button = JBCButton(type: .primary)'
    },
    android: {
      material3: 'Button(onClick = {}, shape = RoundedCornerShape(12.dp))',
      xml: '<com.google.android.material.button.MaterialButton style="@style/Widget.JBC.Button"/>'
    }
  }
};

export const DROPDOWN_SPEC = {
  platformMapping: {
    ios: { swiftUI: 'Menu { Button("Option 1") {} } label: { Label("Select", systemImage: "chevron.down") }' },
    android: { material3: 'ExposedDropdownMenuBox { ... }' }
  }
};

export const ADAPTIVE_RULES_SPEC = {
  breakpoints: [
    { name: 'Mobile', range: '0px - 767px', logic: 'Single column, optimized touch targets.' },
    { name: 'Tablet', range: '768px - 1023px', logic: 'Multi-column grid, compact sidebars.' },
    { name: 'Desktop', range: '> 1024px', logic: 'Full layout, hover interactions enabled.' }
  ],
  rules: [
    { component: 'Data Table', desktop: 'Full Row', mobile: 'Card Stack', mapping: 'Responsive Template' },
    { component: 'Navigation', desktop: 'Sidebar', mobile: 'Bottom Bar', mapping: 'Layout Switch' },
    { component: 'Stepper', desktop: 'Horizontal', mobile: 'Vertical', mapping: 'Orientation Switch' }
  ]
};

export const BUTTON_ROLES_SPEC = {
  roles: [
    { role: 'Primary', usage: 'Main call to action', rules: ['One per view', 'High contrast'], examples: ['Submit', 'Swap', 'Connect'], validation: [{ rule: 'Must have label', status: 'error' }] },
    { role: 'Secondary', usage: 'Supporting actions', rules: ['Multiple allowed', 'Outlined style'], examples: ['Cancel', 'Export', 'Filter'], validation: [{ rule: 'Label should be short', status: 'warning' }] },
    { role: 'Tertiary / Ghost', usage: 'Subtle or navigation actions', rules: ['Text only', 'No background'], examples: ['View More', 'Settings', 'Learn'], validation: [] },
    { role: 'Destructive', usage: 'Permanent actions', rules: ['Red status', 'Confirm required'], examples: ['Delete', 'Withdraw', 'Disconnect'], validation: [] }
  ],
  validation: [
    { rule: 'Minimum touch area is 44x44px', status: 'error' },
    { rule: 'Interactive states (hover, focus, active) required', status: 'warning' }
  ]
};