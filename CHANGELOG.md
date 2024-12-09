# Changelog

## [2.8.1](https://github.com/technway/technway-component-library/compare/root-v2.8.0...root-v2.8.1) (2024-12-09)


### Bug Fixes

* **tnw-heading:** resolve not rendering text without highlight ([bfbfed0](https://github.com/technway/technway-component-library/commit/bfbfed0921f39fdaaf5aa5c041c750890367d2df))

## [2.8.0](https://github.com/technway/technway-component-library/compare/root-v2.7.0...root-v2.8.0) (2024-12-08)


### Features

* **components:** add highlight text support to typography components ([b61d42b](https://github.com/technway/technway-component-library/commit/b61d42b709072c0d614509515ee29d780d8d8daa))
* **components:** improve tnw-footer and tnw-newsletter-form ([0894572](https://github.com/technway/technway-component-library/commit/08945725a614f5611cdd02bb6620419d45ab4ccd))
* **tnw-card:** add 'largerImage' prop ([4583619](https://github.com/technway/technway-component-library/commit/458361904814e3894dd8633c806e721dfa372395))
* **tnw-copyrights-footer:** centralize content within a single &lt;tnw-text&gt; element ([3680fbf](https://github.com/technway/technway-component-library/commit/3680fbfdef6f03961ee5e574952d23355b7ea2ad))
* **tnw-footer:** add 'copyrights' slot and improve styling with new props ([44982b0](https://github.com/technway/technway-component-library/commit/44982b0968b68bad68905cf7b5a9df145da878d9))


### Bug Fixes

* **tnw-copyrights-footer:** resolve centereing content issue ([ea92a70](https://github.com/technway/technway-component-library/commit/ea92a70b01ce563b7bbae60750d76d5aad0f2ffb))
* **tnw-multi-row-carousel:** resolve slot element assignment issues for React ([ef32210](https://github.com/technway/technway-component-library/commit/ef32210d0cf4b47ceb3e85408326662449b81a26))

## [2.7.0](https://github.com/technway/technway-component-library/compare/root-v2.6.1...root-v2.7.0) (2024-12-07)


### Features

* **components:** improve tnw-copyrights-footer, tnw-newsletter-form, and tnw-footer ([cbe31c9](https://github.com/technway/technway-component-library/commit/cbe31c943d5255e597ea96eb0bdd56066ac5fa1d))
* **components:** introduce tnw-footer component and update existing footer structure ([ea30a29](https://github.com/technway/technway-component-library/commit/ea30a29a6750fbead5d71036f3e3319f6f41443b))
* **tnw-newsletter-form:** introduce new component ([23baeb7](https://github.com/technway/technway-component-library/commit/23baeb701053070d42e5a3e327423b62a3739052))

## [2.6.1](https://github.com/technway/technway-component-library/compare/root-v2.6.0...root-v2.6.1) (2024-12-03)


### Bug Fixes

* **validations:** resolve components validations issues ([2096a3a](https://github.com/technway/technway-component-library/commit/2096a3a412be0cf8ffdd4955bc2f783502142761))

## [2.6.0](https://github.com/technway/technway-component-library/compare/root-v2.5.0...root-v2.6.0) (2024-12-03)


### Features

* **tnw-multi-row-carousel:** enhacne functionaliity and style ([4db88b6](https://github.com/technway/technway-component-library/commit/4db88b69016584bd250065ed6071eedd2015a08c))

## [2.5.0](https://github.com/technway/technway-component-library/compare/root-v2.4.0...root-v2.5.0) (2024-12-02)


### Features

* **components:** create new 'tnw-testimonial-card' and 'tnw-multi-row-carousel' components ([eb8d2a9](https://github.com/technway/technway-component-library/commit/eb8d2a9b8e2c251e8647a005809c71047c01a0f6))

## [2.4.0](https://github.com/technway/technway-component-library/compare/root-v2.3.0...root-v2.4.0) (2024-12-01)


### Features

* add a widthSize prop for tnw-heading & tnw-text components ([0909907](https://github.com/technway/technway-component-library/commit/0909907942273dc076b38cf9af425c2477d52d76))
* **tnw-contact-banner:** add a 'gradient' appearance and props. ([6550fbb](https://github.com/technway/technway-component-library/commit/6550fbb5f141f83f968b75aff48f5b4a6e9dfcb3))


### Bug Fixes

* **components:** fix components props validations ([fb5226c](https://github.com/technway/technway-component-library/commit/fb5226c226df3c530a8295a6e27aef36086e6f1b))

## [2.3.0](https://github.com/technway/technway-component-library/compare/root-v2.2.0...root-v2.3.0) (2024-11-30)


### Features

* **tnw-button:** implement tnw-portfolio component ([2a751ef](https://github.com/technway/technway-component-library/commit/2a751ef7e817d80c83a4d18581d86326d947e49c))

## [2.2.0](https://github.com/technway/technway-component-library/compare/root-v2.1.0...root-v2.2.0) (2024-11-30)


### Features

* **tnw-header-banner:** add options to add image ([fedd998](https://github.com/technway/technway-component-library/commit/fedd998525cc079270108f7bb9da6954253fc09f))

## [2.1.0](https://github.com/technway/technway-component-library/compare/root-v2.0.0...root-v2.1.0) (2024-11-30)


### Features

* **tnw-heading:** remove 'div' as an option for the level prop ([14b2636](https://github.com/technway/technway-component-library/commit/14b2636b575110331a0ac16ecca5a83f2382a5f0))

## [2.0.0](https://github.com/technway/technway-component-library/compare/root-v1.0.0...root-v2.0.0) (2024-11-30)


### ⚠ BREAKING CHANGES

* **tnw-heading:** Users should transition to using the `level` prop instead of `headingTag` as `headingTag` is deprecated and will be removed in upcoming releases.

### Features

* **tnw-heading:** add new `level` prop to replace deprecated `headingTag` ([77e145f](https://github.com/technway/technway-component-library/commit/77e145fb984d87ecb0545eb37cdea4e745e3a4b3))

## 1.0.0 (2024-11-28)


### Features

* setup stencil and react libraries packages ([c350ad5](https://github.com/technway/technway-component-library/commit/c350ad52b99f01a730e657a1f4f9e3d7ae91d56b))
