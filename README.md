# JBC Design System SDK

## Overview
This SDK provides the foundational primitives for the JBC Finance ecosystem, ensuring visual consistency and engineering velocity across all platforms.
- **Design Tokens**: JSON-based source of truth for colors, typography, and spacing.
- **React Components**: High-fidelity, accessible UI components for Web.
- **Icon System**: Automated normalization engine for brand and utility icons.
- **Layout System**: Adaptive grid and container rules.
- **Platform Tokens**: Native resource mappings for iOS (Swift) and Android (XML).

## Installation
The SDK can be integrated manually by copying the folders into your project or via our internal registry.
```bash
# Future implementation
npm install @jbc/design-system
```

## Usage
### Importing Tokens
```javascript
import tokens from './tokens/colors.json';
```
### Importing Components
```javascript
import { JBCButton } from './components/Button';
```
### Using JBCIcon
```javascript
<JBCIcon name="ri-database-2-line" size={24} />
```

## Structure
- `tokens/`: Core design variables.
- `components/`: React TSX source code.
- `icons/`: SVG registry and normalization rules.
- `layout/`: Responsive and adaptive grid rules.
- `platform/`: Native platform primitives.
- `governance/`: Manifests and maturity tracking.

## Versioning
This project follows Semantic Versioning (SemVer):
- **MAJOR**: Breaking API changes or token removals.
- **MINOR**: New components, features, or backward-compatible tokens.
- **PATCH**: Bug fixes or value updates to existing tokens.

## Support
This is an internal JBC Finance system. For support, contact the Design Systems team in the #design-ops channel.