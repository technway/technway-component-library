# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.9](https://github.com/technway/technway-component-library/compare/@technway/react-library@2.0.2...@technway/react-library@2.0.9) (2025-01-06)


### Bug Fixes

* **react-library, next-library:** update react from 18 to 19 ([bca7f15](https://github.com/technway/technway-component-library/commit/bca7f1520082118055395220fadd302d9bfd2162))
* **react-package, next-package:** downgrade react from v19 to v18 ([6dfc4d1](https://github.com/technway/technway-component-library/commit/6dfc4d10184bc510f0ad073b8ae3c01f83cb7f1c))
* resolve generated react and next components paths ([bdc7f0c](https://github.com/technway/technway-component-library/commit/bdc7f0cd46cc080279e10309c004e0846583686d))
* update react packages to v19.0.0 ([64a500a](https://github.com/technway/technway-component-library/commit/64a500a4d847a5f7c4f393cf092f96eaffce2a46))





## [2.0.8](https://github.com/technway/technway-component-library/compare/@technway/react-library@2.0.2...@technway/react-library@2.0.8) (2025-01-06)


### Bug Fixes

* **react-library, next-library:** update react from 18 to 19 ([bca7f15](https://github.com/technway/technway-component-library/commit/bca7f1520082118055395220fadd302d9bfd2162))
* **react-package, next-package:** downgrade react from v19 to v18 ([6dfc4d1](https://github.com/technway/technway-component-library/commit/6dfc4d10184bc510f0ad073b8ae3c01f83cb7f1c))
* resolve generated react and next components paths ([bdc7f0c](https://github.com/technway/technway-component-library/commit/bdc7f0cd46cc080279e10309c004e0846583686d))
* update react packages to v19.0.0 ([64a500a](https://github.com/technway/technway-component-library/commit/64a500a4d847a5f7c4f393cf092f96eaffce2a46))





## [2.0.7](https://github.com/technway/technway-component-library/compare/@technway/react-library@2.0.2...@technway/react-library@2.0.7) (2025-01-06)


### Bug Fixes

* **react-library, next-library:** update react from 18 to 19 ([bca7f15](https://github.com/technway/technway-component-library/commit/bca7f1520082118055395220fadd302d9bfd2162))
* resolve generated react and next components paths ([bdc7f0c](https://github.com/technway/technway-component-library/commit/bdc7f0cd46cc080279e10309c004e0846583686d))
* update react packages to v19.0.0 ([64a500a](https://github.com/technway/technway-component-library/commit/64a500a4d847a5f7c4f393cf092f96eaffce2a46))





## [2.0.6](https://github.com/technway/technway-component-library/compare/@technway/react-library@2.0.2...@technway/react-library@2.0.6) (2025-01-06)


### Bug Fixes

* **react-library, next-library:** update react from 18 to 19 ([bca7f15](https://github.com/technway/technway-component-library/commit/bca7f1520082118055395220fadd302d9bfd2162))
* resolve generated react and next components paths ([bdc7f0c](https://github.com/technway/technway-component-library/commit/bdc7f0cd46cc080279e10309c004e0846583686d))
* update react packages to v19.0.0 ([64a500a](https://github.com/technway/technway-component-library/commit/64a500a4d847a5f7c4f393cf092f96eaffce2a46))





## [2.0.5](https://github.com/technway/technway-component-library/compare/@technway/react-library@2.0.2...@technway/react-library@2.0.5) (2025-01-06)


### Bug Fixes

* **react-library, next-library:** update react from 18 to 19 ([bca7f15](https://github.com/technway/technway-component-library/commit/bca7f1520082118055395220fadd302d9bfd2162))
* resolve generated react and next components paths ([bdc7f0c](https://github.com/technway/technway-component-library/commit/bdc7f0cd46cc080279e10309c004e0846583686d))





## [2.0.4](https://github.com/technway/technway-component-library/compare/@technway/react-library@2.0.2...@technway/react-library@2.0.4) (2025-01-06)


### Bug Fixes

* resolve generated react and next components paths ([bdc7f0c](https://github.com/technway/technway-component-library/commit/bdc7f0cd46cc080279e10309c004e0846583686d))





## [2.0.3](https://github.com/technway/technway-component-library/compare/@technway/react-library@2.0.2...@technway/react-library@2.0.3) (2025-01-06)


### Bug Fixes

* resolve generated react and next components paths ([bdc7f0c](https://github.com/technway/technway-component-library/commit/bdc7f0cd46cc080279e10309c004e0846583686d))





# 2.0.0 (2025-01-06)


* feat!: add Next.js SSR support and enhance package exports ([6e36a1f](https://github.com/technway/technway-component-library/commit/6e36a1fecdaf47b4f1891dd0b31db0865bb533f1))
* fix!: resolve validation bugs and standardize prop naming conventions ([f9b02d0](https://github.com/technway/technway-component-library/commit/f9b02d087bba9cde8813d7e940de24f79bfc663d))


### Features

* **react-library:** generate react components ([e9c6a5c](https://github.com/technway/technway-component-library/commit/e9c6a5c9c223ba6062249245c836c62d73db0978))
* **tnw-textarea, tnw-input:** improve security, flexibility, and functionality ([59517f0](https://github.com/technway/technway-component-library/commit/59517f0367221fdf4c253e753c348cae72fd0f11))


### BREAKING CHANGES

* The namespace for the Stencil library has been changed
from 'components-lib' to 'stencil-components'.
This affects how the library is imported and may require updates in consuming projects.
* - All `variant` props used to define appearance colors have been replaced with
the `appearanceColor` prop for improved clarity and consistency.
- The component `tnw-multi-row-carousel` has been renamed to `tnw-rows-carousel`.

enhance: updated documentation to reflect the new changes and provide better structure.



## 1.0.7 (2024-12-09)


### Bug Fixes

* **tnw-heading:** resolve not rendering text without highlight ([bfbfed0](https://github.com/technway/technway-component-library/commit/bfbfed0921f39fdaaf5aa5c041c750890367d2df))



## 1.0.6 (2024-12-08)



## 1.0.5 (2024-12-08)



## 1.0.4 (2024-12-08)



## 1.0.3 (2024-12-08)



## 1.0.2 (2024-12-08)



## 1.0.1 (2024-12-08)


### Features

* **components:** create new 'tnw-testimonial-card' and 'tnw-multi-row-carousel' components ([eb8d2a9](https://github.com/technway/technway-component-library/commit/eb8d2a9b8e2c251e8647a005809c71047c01a0f6))
* setup stencil and react libraries packages ([c350ad5](https://github.com/technway/technway-component-library/commit/c350ad52b99f01a730e657a1f4f9e3d7ae91d56b))
* **tnw-button:** implement tnw-portfolio component ([2a751ef](https://github.com/technway/technway-component-library/commit/2a751ef7e817d80c83a4d18581d86326d947e49c))
* **tnw-contact-banner:** add a 'gradient' appearance and props. ([6550fbb](https://github.com/technway/technway-component-library/commit/6550fbb5f141f83f968b75aff48f5b4a6e9dfcb3))
* **tnw-footer:** add 'copyrights' slot and improve styling with new props ([44982b0](https://github.com/technway/technway-component-library/commit/44982b0968b68bad68905cf7b5a9df145da878d9))
* **tnw-heading:** add new `level` prop to replace deprecated `headingTag` ([77e145f](https://github.com/technway/technway-component-library/commit/77e145fb984d87ecb0545eb37cdea4e745e3a4b3))


### BREAKING CHANGES

* **tnw-heading:** Users should transition to using the `level` prop instead of `headingTag` as `headingTag` is deprecated and will be removed in upcoming releases.





# [1.3.0](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.3.0) (2024-12-20)

**Note:** Version bump only for package @technway/react-library





# [1.2.0](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.2.0) (2024-12-20)

**Note:** Version bump only for package @technway/react-library





# [1.1.0](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.1.0) (2024-12-20)

**Note:** Version bump only for package @technway/react-library





## [1.0.11](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.0.11) (2024-12-09)

**Note:** Version bump only for package @technway/react-library





## [1.0.10](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.0.10) (2024-12-09)

**Note:** Version bump only for package @technway/react-library





## [1.0.9](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.0.9) (2024-12-09)

**Note:** Version bump only for package @technway/react-library





## [1.0.8](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.0.8) (2024-12-09)

**Note:** Version bump only for package @technway/react-library





## [1.0.7](https://github.com/technway/technway-component-library/compare/v1.0.6...v1.0.7) (2024-12-09)


### Bug Fixes

* **tnw-heading:** resolve not rendering text without highlight ([bfbfed0](https://github.com/technway/technway-component-library/commit/bfbfed0921f39fdaaf5aa5c041c750890367d2df))
