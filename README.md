# PurgeCSS and Dynamically Added Tailwind Classes

This repository demonstrates an uncommon bug that can occur when using PurgeCSS with Tailwind CSS.  The issue arises when Tailwind classes are added to the DOM dynamically using JavaScript, and PurgeCSS incorrectly removes those classes during the build process because they weren't present in the initial HTML.

**Problem:** Dynamically added Tailwind classes are removed by PurgeCSS, resulting in missing styles.

**Solution:** Configure PurgeCSS to correctly identify and preserve these dynamically generated classes.  This typically involves adding appropriate selectors to the PurgeCSS configuration to ensure that the dynamically added classes are not purged.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run build`. Observe the missing styles in the output HTML.
4. Run `npm run build:solution`. Observe that the styles are now present in the output HTML.

