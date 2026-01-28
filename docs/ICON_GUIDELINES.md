# JBC Icon Library Guidelines v1.2.0

## Theme Switching Logic
Icons in the JBC system are **Theme-Aware**. They automatically shift their color value based on the active design token.

### Web (React + Tailwind)
Use the `currentColor` strategy. The `JBCIcon` component inherits its color from the parent's text color.
```tsx
// This icon will be #03FDDA in Dark Mode and #00BFA5 in Light Mode
<div className="text-jbc-icon-primary">
  <JBCIcon name="stake" />
</div>
```

## External Utility Icons (NEW)
JBC Finance supports external libraries (**Lucide**, **Tabler**, **Phosphor**) for UI utilities to ensure a broad vocabulary for interactive elements.

### Usage Taxonomy
| Context | Library | Reason |
| :--- | :--- | :--- |
| **Brand Navigation** | JBC (Remix) | Institutional trust and identity |
| **Asset Categories** | JBC (Remix) | Domain-specific fidelity |
| **UI Utilities** | External Libraries | Familiar interaction patterns |

### Unified Component Wrapper
The `JBCIcon` component normalizes external icons automatically.
```tsx
<JBCIcon 
  source="lucide" 
  name="chevron-right" 
  size={24} 
/>
```

### Normalization Rules (Automated)
1. **Grid**: All icons are rendered within a strict 24×24px viewbox.
2. **Stroke Weights**: Bound to size tokens:
   - **16/20px**: 1.25px stroke
   - **24px**: 1.5px stroke (Baseline)
   - **32/48px**: 1.75px stroke
3. **Caps/Joins**: All paths use `round` linecaps and linejoins.

### 🚫 Safety Warning
External icons must **never** replace JBC brand or platform icons. Brand fidelity is paramount.

## Cross-Platform Semantic Mapping
To maintain brand consistency, all JBC platforms map tokens to native primitives.

| Semantic Token | Web (Remix) | iOS (SF Symbols) | Android (Vector) |
| :--- | :--- | :--- | :--- |
| **Stake** | `ri-database-2-line` | `cylinder.split.1x2` | `ic_stake_24.xml` |
| **Portfolio** | `ri-briefcase-4-line` | `briefcase` | `ic_portfolio_24.xml` |

## CDN Delivery
All icons are available via the JBC Brand CDN.
- **Base URL**: `https://cdn.jbcfinance.com/icons/v1.2.0/`
- **Structure**: `{category}/{variant}/{icon_name}.svg`