# CI Validation Guide

This document defines the requirements for automated validation of the JBC Design System SDK export.

## Validation Checklist
- [ ] All token files exist in `/tokens`
- [ ] All component files exist in `/components`
- [ ] No placeholder strings (e.g., "Implementation goes here") are present in source files.
- [ ] `version.json` exists and matches the current build tag.
- [ ] `changelog.md` contains an entry for the current version.
- [ ] `export-manifest.json` exists and is populated.
- [ ] `component-maturity.json` exists.
- [ ] `semantic-entities.json` exists in `/tokens`.

## Build Failure Rules
The build pipeline MUST fail if:
1. Any component file in `/components` is empty or less than 100 bytes.
2. Any token JSON file is missing or invalid JSON.
3. `export-manifest.json` is missing.
4. Version in `version.json` does not match the Git tag or package version.