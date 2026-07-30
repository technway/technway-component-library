# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.3.0](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.3.0) (2024-12-20)


### Bug Fixes

* **tnw-button:** resolve disabled attribute issue ([6a726ff](https://github.com/technway/technway-component-library/commit/6a726ff1421d950f5d4ec2971eef55ebcece2284))


### Features

* **tnw-footer:** validate and update props ([0c4a175](https://github.com/technway/technway-component-library/commit/0c4a1757a9ce94aa528f5f5ede7d97be32f3ca51))
* **tnw-input:** implement pattern validation and security enhancements ([89052b3](https://github.com/technway/technway-component-library/commit/89052b30c21f16816e8722410677194c958742cc))
* **tnw-items-carousel:** deprecate component ([0ad83dd](https://github.com/technway/technway-component-library/commit/0ad83dd592ac7c19296d8642773a196620ac7d86))
* **tnw-list:** enhance component with new features and improvements ([1b1e25c](https://github.com/technway/technway-component-library/commit/1b1e25c7f15c18b4c554cecac9c96d5485ebf7d5))





# [1.2.0](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.2.0) (2024-12-20)


### Bug Fixes

* **tnw-button:** resolve disabled attribute issue ([6a726ff](https://github.com/technway/technway-component-library/commit/6a726ff1421d950f5d4ec2971eef55ebcece2284))


### Features

* **tnw-footer:** validate and update props ([0c4a175](https://github.com/technway/technway-component-library/commit/0c4a1757a9ce94aa528f5f5ede7d97be32f3ca51))
* **tnw-input:** implement pattern validation and security enhancements ([89052b3](https://github.com/technway/technway-component-library/commit/89052b30c21f16816e8722410677194c958742cc))
* **tnw-items-carousel:** deprecate component ([0ad83dd](https://github.com/technway/technway-component-library/commit/0ad83dd592ac7c19296d8642773a196620ac7d86))
* **tnw-list:** enhance component with new features and improvements ([1b1e25c](https://github.com/technway/technway-component-library/commit/1b1e25c7f15c18b4c554cecac9c96d5485ebf7d5))





## 1.0.0 (2026-07-30)


### ⚠ BREAKING CHANGES

* The namespace for the Stencil library has been changed from 'components-lib' to 'stencil-components'. This affects how the library is imported and may require updates in consuming projects.
* 
* **tnw-heading:** Users should transition to using the `level` prop instead of `headingTag` as `headingTag` is deprecated and will be removed in upcoming releases.

### Features

* add a widthSize prop for tnw-heading & tnw-text components ([ca42891](https://github.com/technway/technway-component-library/commit/ca42891aa25d1e3558d3d33f2c1f7442218d9331))
* add Next.js SSR support and enhance package exports ([fc99387](https://github.com/technway/technway-component-library/commit/fc993871d2748ce68c876548e1a6637c888f1a27))
* add props to `tnw-contact-banner` ([26d6158](https://github.com/technway/technway-component-library/commit/26d6158e90b45613834f60e376c71943f7fcf911))
* **button:** introduce focus events and improve a11y ([4b84732](https://github.com/technway/technway-component-library/commit/4b847324fbe7f490236a712be44de39d38017395))
* change license and do cleaning up ([f4022e1](https://github.com/technway/technway-component-library/commit/f4022e1888ae34b9bc8f8d268892a9ea8a3ec803))
* **components:** add highlight text support to typography components ([b3ca6b5](https://github.com/technway/technway-component-library/commit/b3ca6b528f20b8fc9906659599b917121a5fa10e))
* **components:** create new 'tnw-testimonial-card' and 'tnw-multi-row-carousel' components ([5e0bfdf](https://github.com/technway/technway-component-library/commit/5e0bfdf64601db6be2ed089a1366d649bc5b600b))
* **components:** improve tnw-copyrights-footer, tnw-newsletter-form, and tnw-footer ([dbefcdc](https://github.com/technway/technway-component-library/commit/dbefcdc7223eedef4c424f331a12c4a53e50d1f1))
* **components:** improve tnw-footer and tnw-newsletter-form ([bb05a52](https://github.com/technway/technway-component-library/commit/bb05a523cd8b75b982dc77999ca9baead77af3ec))
* **components:** introduce tnw-footer component and update existing footer structure ([9808c1f](https://github.com/technway/technway-component-library/commit/9808c1fffd412e5b0627e9af03dbf19c304b4173))
* events ([083cd5a](https://github.com/technway/technway-component-library/commit/083cd5a23becb31ad2f145da348bbc0aaaf82ff3))
* **layout-kit:** revamp responsive grid system and configuration ([717ffe1](https://github.com/technway/technway-component-library/commit/717ffe10b7ce9811a03884dd6e0f84f619b1cdbb))
* **navbar:** complete navbar implementation with fixes and improvements ([fbc3733](https://github.com/technway/technway-component-library/commit/fbc373370839aa47815baf48c48d93da02ec84ef))
* **packages:** add layout-kit package ([3030a2e](https://github.com/technway/technway-component-library/commit/3030a2eeb7e7a07a5f56c30a6f6f3eaa604d9001))
* **react-library:** generate react components ([d2498d5](https://github.com/technway/technway-component-library/commit/d2498d5aa35dcca492244d5e69e427254c953837))
* **react-ui:** style NavbarMenu component ([2808d02](https://github.com/technway/technway-component-library/commit/2808d0247fc1139c5d3f976c7233a40e229a4ee2))
* setup stencil and react libraries packages ([a28285c](https://github.com/technway/technway-component-library/commit/a28285c875bc074d1002574a1f48f4235af99696))
* **stencil-library:** introduce 'tnw-search-input' component ([27fd95d](https://github.com/technway/technway-component-library/commit/27fd95de27f4cb38df57389e2404065fdf110ffb))
* **stencil-library:** introduce tnw-anchor-styler component ([a8362eb](https://github.com/technway/technway-component-library/commit/a8362eba7a1afb6347a5547ca40061849b5ffec8))
* **tnw-button:** add custom events ([#81](https://github.com/technway/technway-component-library/issues/81)) ([2e08d65](https://github.com/technway/technway-component-library/commit/2e08d6514ffec41589e0fe53e9bba02864e29dc2))
* **tnw-button:** implement hover effects and styling ([b88d616](https://github.com/technway/technway-component-library/commit/b88d616a8d39fc07a758ccc9110b2107c176100e))
* **tnw-button:** implement tnw-portfolio component ([b969eb5](https://github.com/technway/technway-component-library/commit/b969eb5a3c30d7f343c9975613b562db8b8f5a32))
* **tnw-card:** add 'largerImage' prop ([67cf817](https://github.com/technway/technway-component-library/commit/67cf817e6f6abf1dedc0e56af0241389da57c711))
* **tnw-card:** implement new props and fix styling issues ([f5828c8](https://github.com/technway/technway-component-library/commit/f5828c88fec0f38a93ade8075ab5ef84887bf392))
* **tnw-contact-banner:** add a 'gradient' appearance and props. ([0385b29](https://github.com/technway/technway-component-library/commit/0385b296206150d43e0559d78493b206cff66727))
* **tnw-copyrights-footer:** centralize content within a single &lt;tnw-text&gt; element ([c807bc0](https://github.com/technway/technway-component-library/commit/c807bc00f87aaf4c3d6b60b0f0efc3b8f610e5eb))
* **tnw-copyrights-footer:** introduce new props for links and enhance styles ([4607243](https://github.com/technway/technway-component-library/commit/460724352a9b34a3e6065aa3c61e29bdbbc6e517))
* **tnw-footer:** add 'copyrights' slot and improve styling with new props ([f449177](https://github.com/technway/technway-component-library/commit/f449177308a4350a185efdf652ee69bec91f4e95))
* **tnw-footer:** enhance gap between list items ([4d32775](https://github.com/technway/technway-component-library/commit/4d32775b409539067b96bfc965da49c630a4b053))
* **tnw-footer:** validate and update props ([9a945a3](https://github.com/technway/technway-component-library/commit/9a945a3ce0f95c2c9411831517e9dc28205d0eaa))
* **tnw-header-banner:** add options to add image ([840ca01](https://github.com/technway/technway-component-library/commit/840ca01ea9a617595b57418f10d5c4b19f4ce5cb))
* **tnw-header:** improve props controlling height and responsive design ([09325d5](https://github.com/technway/technway-component-library/commit/09325d585232b3d1103a1bf4695d6a59f14d62c0))
* **tnw-header:** improve styling ([5625f05](https://github.com/technway/technway-component-library/commit/5625f05b87773c3739e8061f62f37259c8c6b226))
* **tnw-heading:** add new `level` prop to replace deprecated `headingTag` ([462bc10](https://github.com/technway/technway-component-library/commit/462bc108c2c1d56a561256a6a38a739f06a6dc80))
* **tnw-heading:** remove 'div' as an option for the level prop ([a9a35c9](https://github.com/technway/technway-component-library/commit/a9a35c99a44cdb585c37003d6201718b2bd0b745))
* **tnw-image:** add new props to customize size of image ([296a744](https://github.com/technway/technway-component-library/commit/296a7445151cbd092f5daf09dbceaed9c2d7f33a))
* **tnw-image:** introduce link prop for linkable images ([c9cd2dc](https://github.com/technway/technway-component-library/commit/c9cd2dc8673deb066e96bc286110ec5564139aed))
* tnw-input-form not stable ([d4cea7b](https://github.com/technway/technway-component-library/commit/d4cea7b30980da4b8049d624a5fd7464ccb774ba))
* **tnw-input:** add appearanceColor prop ([408bc91](https://github.com/technway/technway-component-library/commit/408bc91ee649595d669520169b09b793955aa752))
* **tnw-input:** add custom events ([a6889da](https://github.com/technway/technway-component-library/commit/a6889da447bc433432ef5f55bd0b05bb5b47ee2c))
* **tnw-input:** add focus, blur events and hoverEffect props ([8405267](https://github.com/technway/technway-component-library/commit/840526749360d2d706b246b76d80c38961590760))
* **tnw-input:** add size prop ([4ff7798](https://github.com/technway/technway-component-library/commit/4ff7798094ec67fc038f1f927e40193b3132bc8a))
* **tnw-input:** implement pattern validation and security enhancements ([dd738a7](https://github.com/technway/technway-component-library/commit/dd738a7ede457234242fe5d074ab26eb888500a9))
* **tnw-items-carousel:** deprecate component ([5b1b4ce](https://github.com/technway/technway-component-library/commit/5b1b4ce866c79832f8389144cc1625f022d1cd26))
* **tnw-list:** enhance component with new features and improvements ([274ee62](https://github.com/technway/technway-component-library/commit/274ee624d6a8ef7cdb674f20e48a9299de5cb97f))
* **tnw-multi-row-carousel:** enhacne functionaliity and style ([b8300a5](https://github.com/technway/technway-component-library/commit/b8300a57113f043604d0042b38e26e36aa516692))
* **tnw-navbar:** add new props for more flexibility ([f85cdb8](https://github.com/technway/technway-component-library/commit/f85cdb8eadce3dc3e188b51cff0ee3de5f001eaf))
* **tnw-navbar:** add optional menu slot ([fd0b891](https://github.com/technway/technway-component-library/commit/fd0b8912dbe7bd2138fe59dbef2dd97dddaee11d))
* **tnw-navbar:** improve styling ([ac4c129](https://github.com/technway/technway-component-library/commit/ac4c129351f3f5bfdc06b051b47bf305197391df))
* **tnw-newsletter-form:** introduce new component ([359d542](https://github.com/technway/technway-component-library/commit/359d542c9d78f8a92fd4f9dd441608d8ab743b81))
* **tnw-portfolio-grid:** enhance styling and extend props options ([dcbc292](https://github.com/technway/technway-component-library/commit/dcbc292d8a041d7a6725115c1c525720a76187cd))
* **tnw-search-input:** add new custom event for handling input on change ([602ae0d](https://github.com/technway/technway-component-library/commit/602ae0d0626987114b86693774b945a7958b16fe))
* **tnw-search-input:** add new custom event for handling input on change ([#79](https://github.com/technway/technway-component-library/issues/79)) ([3b1e67e](https://github.com/technway/technway-component-library/commit/3b1e67e401aef9be3ed840df420e2c4084eb4b02))
* **tnw-search-input:** add tnwInputSubmit event ([a43defa](https://github.com/technway/technway-component-library/commit/a43defa3ee2f68863bcb7530ea23de6990b3e1ea))
* **tnw-search-input:** introduce events handling focus and blur and iconColor prop ([33cfd9c](https://github.com/technway/technway-component-library/commit/33cfd9ce89ac39ee9329858bc2627dbb31a77a9d))
* **tnw-select, tnw-badge, tnw-icon:** enhance components and improve tests ([94f03a4](https://github.com/technway/technway-component-library/commit/94f03a452532d3d61bf43db6018106c1cd1a0b3b))
* **tnw-subscription-form:** align input appearance with theme prop ([b14141f](https://github.com/technway/technway-component-library/commit/b14141f0e461235813850d593f4b16c7eb46fc8f))
* **tnw-textarea, tnw-input:** improve security, flexibility, and functionality ([80a341a](https://github.com/technway/technway-component-library/commit/80a341a3479d2a0b1581ed502bf8ed387fc75a3b))
* **tnw-text:** update props and their validations ([831d7bb](https://github.com/technway/technway-component-library/commit/831d7bb018a57753caefe65c030010df9b0dba2d))
* **tokens:** update placeholder-related css variables ([a360412](https://github.com/technway/technway-component-library/commit/a3604122b5a5186c3820c141b7db2d833a7f2c4f))


### Bug Fixes

* **card:** responsive deisgn in horizontal layout ([e77079f](https://github.com/technway/technway-component-library/commit/e77079f4e218af4466127bfc032d0aaa011b6515))
* **card:** responsive design ([a55e51d](https://github.com/technway/technway-component-library/commit/a55e51d515b0004c32e5e071493164f3bd8c3efd))
* **components:** fix components props validations ([b94f8f1](https://github.com/technway/technway-component-library/commit/b94f8f1a4c1562fd09c6eebef112922f0dbb7cb9))
* error in root package-lock file ([4a3f64e](https://github.com/technway/technway-component-library/commit/4a3f64efdc30588e3d25cd53c6a4bc3ce23fa051))
* header and its banner styling isuues ([9b6e9f2](https://github.com/technway/technway-component-library/commit/9b6e9f2dcceb47017ab86ee53bbc0d397be17c02))
* include components folder in published package ([5a51caa](https://github.com/technway/technway-component-library/commit/5a51caa98721852521ffbe81c3f88a1df39d6b5a))
* **layout-kit:** add missing packaged files ([d28fa89](https://github.com/technway/technway-component-library/commit/d28fa89f4c331fa70199c3ddd58ea4862676b0c0))
* **layout-kit:** correct Grid component default column behavior ([7ee565f](https://github.com/technway/technway-component-library/commit/7ee565f9b8bbcbd3789b8a3ad5f024655057ae54))
* **layout-kit:** resolve build errors and remove unused dependencies ([3876847](https://github.com/technway/technway-component-library/commit/38768470140b336b409a867e8c4e99ecef7bcfed))
* **layout-kit:** resolve TypeScript import and type resolution issues ([ad05219](https://github.com/technway/technway-component-library/commit/ad052193c9730a70b86cf2120b75099ed98cfb4b))
* **layout-kit:** responsive prop in Grid ([213a2cf](https://github.com/technway/technway-component-library/commit/213a2cf801fc4a786edfa73784dc262c55609eb4))
* **next-library, layout-kit:** update and add @types/react to solve typings errors ([67a9519](https://github.com/technway/technway-component-library/commit/67a9519a075e66feacc407ba0de087df57f281be))
* **react-library, next-library:** update react from 18 to 19 ([63002da](https://github.com/technway/technway-component-library/commit/63002da477c55ea0a8b5ceb2a09c03c8fabc45cf))
* **react-package, next-package:** downgrade react from v19 to v18 ([dfb0ee5](https://github.com/technway/technway-component-library/commit/dfb0ee5e52b7140a1a6f9e865a85d67365a23c14))
* **react-ui:** resolve import issues for components and improve type declarations ([2f4f662](https://github.com/technway/technway-component-library/commit/2f4f662a7ca63253c1fdb0ab6708a50d68e0cf55))
* resolve bugs and enhance tnw-navbar component ([7209418](https://github.com/technway/technway-component-library/commit/7209418fe4f178219b8b73ce93a636043defcf73))
* resolve generated react and next components paths ([f1be539](https://github.com/technway/technway-component-library/commit/f1be5391990a9c4892d4c656bdbf76b24f331ec3))
* resolve styling issues in tnw-badge & tnw-image ([#72](https://github.com/technway/technway-component-library/issues/72)) ([221e87f](https://github.com/technway/technway-component-library/commit/221e87fb2dc3e581e157e52f09ade70d86d39764))
* resolve validation bugs and standardize prop naming conventions ([5eb7db8](https://github.com/technway/technway-component-library/commit/5eb7db8c3973ad292dcd24b0c32479cde98d6fa9))
* **stencil-library, layout-kit:** resolve storybook docs and layout-kit errors ([d051f4c](https://github.com/technway/technway-component-library/commit/d051f4c320245e71a5257d54f6799c5bee2e70eb))
* **stencil-library:** downgrade react-output-target from v0.8.1 to v0.7.4 ([cae4a79](https://github.com/technway/technway-component-library/commit/cae4a79629baf4fa898f725b493a1283ebfdcec1))
* **stencil-library:** header-banner & card validations ([c37cd3a](https://github.com/technway/technway-component-library/commit/c37cd3a9d6cf63ee6faa99c095519a0658157818))
* **stencil-library:** introduce 'tnw-banner' component ([22c4bb2](https://github.com/technway/technway-component-library/commit/22c4bb2d64b7233cc1f70c6a6a033df67bef6daa))
* **stencil-library:** reflect required props ([36a65f2](https://github.com/technway/technway-component-library/commit/36a65f24f59d68ab67a1c905503a7470c191820c))
* **stencil-library:** resolve TypeScript build errors in components ([8ba3927](https://github.com/technway/technway-component-library/commit/8ba3927a159246390eb44aa4304d7749d990d6ed))
* **styles:** add fallback for Constructed Stylesheets (closes [#17](https://github.com/technway/technway-component-library/issues/17)) ([f546b31](https://github.com/technway/technway-component-library/commit/f546b31d00861223a7fc15de27bb86128b40c404))
* **styles:** Add fallback for Constructed Stylesheets (partial [#17](https://github.com/technway/technway-component-library/issues/17)) ([1e43d74](https://github.com/technway/technway-component-library/commit/1e43d74606f10fa88b6c86f2d3c6d4334e527a14))
* **tne-footer:** resolve footerData and slots handling issues ([90b9fcc](https://github.com/technway/technway-component-library/commit/90b9fccbc961df0556ab1c3f5e03245d294d2707))
* **tnw-accordion:** fix text alignment issues ([31dcb36](https://github.com/technway/technway-component-library/commit/31dcb363b34e5e273f393118d8696821224d73bd))
* **tnw-accordion:** resolve issue with accordion toggling in React ([e90e9ce](https://github.com/technway/technway-component-library/commit/e90e9ce7079863b8fd277db5c797cd24220e20bc))
* **tnw-badge:** resolve rendering issues in Nextjs ([5f7611c](https://github.com/technway/technway-component-library/commit/5f7611cbe47c948c3439719a5cc09102f23a3843))
* **tnw-banner:** correct vertical layout behavior ([#97](https://github.com/technway/technway-component-library/issues/97)) ([7556415](https://github.com/technway/technway-component-library/commit/7556415ec65bfdef9644f4ead3834a0ec083e3cc))
* **tnw-banner:** update CSS variable names to fix gradient appearance ([941ef5a](https://github.com/technway/technway-component-library/commit/941ef5acd2e5525b186c973c6953c48f975c9470))
* **tnw-button:** fix border style issue ([83cef4e](https://github.com/technway/technway-component-library/commit/83cef4ed4415df2b09218ce9384ed2b41d9fbde0))
* **tnw-button:** resolve disabled attribute issue ([1a343cf](https://github.com/technway/technway-component-library/commit/1a343cf8dfec2e24059e8f1ab259d7ca9bf20387))
* **tnw-button:** shadow dom styles ([0fe560a](https://github.com/technway/technway-component-library/commit/0fe560ad65e34bffe8271659a9e8451e74591185))
* **tnw-card:** ensure slots render correctly when used ([#101](https://github.com/technway/technway-component-library/issues/101)) ([65e3568](https://github.com/technway/technway-component-library/commit/65e3568c0a95cbdbc09f0737767f5ea4b93ab72e))
* **tnw-card:** prevent rendering of unused slots ([#85](https://github.com/technway/technway-component-library/issues/85)) ([78a4947](https://github.com/technway/technway-component-library/commit/78a49474f51d7158dcf1432d5e9449410abf47a5))
* **tnw-card:** resolve image width ([5927cfc](https://github.com/technway/technway-component-library/commit/5927cfc882f3c9f67f5f607dd935755a0952732d))
* **tnw-copyrights-footer:** resolve centereing content issue ([5d5ba84](https://github.com/technway/technway-component-library/commit/5d5ba84a238a12ecbecd838b7b7ecf2a169f14d4))
* **tnw-divider:** fix light variant styling ([7779006](https://github.com/technway/technway-component-library/commit/777900665be20d75e77a69543d87636da4524013))
* **tnw-footer:** handle missing data gracefully in display slots ([72eda1c](https://github.com/technway/technway-component-library/commit/72eda1cb9187a2267e268b03772b932f2943a65e))
* **tnw-footer:** resolve data parsing errors encountered in next.js 15 ([e6fed5c](https://github.com/technway/technway-component-library/commit/e6fed5c413a5224e533ae1f1cf5122990aa60225))
* **tnw-footer:** resolve validadtion issues ([c57dc34](https://github.com/technway/technway-component-library/commit/c57dc340582f34b6c37f3173990f2ae93ee46463))
* **tnw-footer:** update tnw-subscription-form variant ([6676f8e](https://github.com/technway/technway-component-library/commit/6676f8ed51560fc62196a497dee3b5fa2aaebc63))
* **tnw-header-banner:** resolve styling issues and update props ([3429f97](https://github.com/technway/technway-component-library/commit/3429f97fb3fd7f85b127d483166e3f8545238549))
* **tnw-header-banner:** responsive design ([06652a9](https://github.com/technway/technway-component-library/commit/06652a9d42a2c689d3c6ff201043656bb71fdc9e))
* **tnw-header:** responsive design issues ([2da858c](https://github.com/technway/technway-component-library/commit/2da858c8801a3981166a7bb407164bb9df4dc09d))
* **tnw-header:** styling issues ([7818762](https://github.com/technway/technway-component-library/commit/7818762af7fed98fea42234e85897d39ceb06a2f))
* **tnw-header:** styling of 'centerBanner' prop ([897cfaf](https://github.com/technway/technway-component-library/commit/897cfafd97114d7956e3fcd7f766aeaa89da1818))
* **tnw-heading:** resolve not rendering text without highlight ([272d276](https://github.com/technway/technway-component-library/commit/272d276555970cd6530ebc76c11b201eb2fd28a3))
* **tnw-icon:** resolve validations errors ([d5ca051](https://github.com/technway/technway-component-library/commit/d5ca051b5ef08afd182a7cd36106509a827a8d73))
* **tnw-image:** fix styling issues ([ff7b024](https://github.com/technway/technway-component-library/commit/ff7b024c1d8cf87cd2889e925dc69bb7e3a3949a))
* **tnw-image:** resolve borderRadius prop issues ([0e425e8](https://github.com/technway/technway-component-library/commit/0e425e8f9d3e0c85964dc3de671eea5da441af41))
* **tnw-image:** validation errors of required props ([4a3c327](https://github.com/technway/technway-component-library/commit/4a3c327943932220ba776db3a28df6aad9cfe89b))
* **tnw-multi-row-carousel:** resolve slot element assignment issues for React ([8c414cb](https://github.com/technway/technway-component-library/commit/8c414cb2d9050328073e1ebfe783a16d06344200))
* **tnw-navbar:** implement slot-based approach for custom links and fix issues ([a810967](https://github.com/technway/technway-component-library/commit/a81096733fad87a1beecf2de8aff7b3292ecde89))
* **tnw-navbar:** resolve data parsing errors encountered in next.js 15 ([77f9d9f](https://github.com/technway/technway-component-library/commit/77f9d9fb001da48243c7f7c10da812b95acdbdc6))
* **tnw-navbar:** toggler visibility depending on 'hideMenuBelow' prop ([8f6db27](https://github.com/technway/technway-component-library/commit/8f6db2780141efb999185df84b3e5969eb30546b))
* **tnw-navbar:** validation errors and responsive design ([25407f7](https://github.com/technway/technway-component-library/commit/25407f70e9c71c467f050ad07eeb0491a9ba5bf6))
* **tnw-portfolio-grid:** resolve data validation errors ([#87](https://github.com/technway/technway-component-library/issues/87)) ([#91](https://github.com/technway/technway-component-library/issues/91)) ([dc5517c](https://github.com/technway/technway-component-library/commit/dc5517cb56b1cd74d0b7d3be21af4f5b4a7fa8cd))
* **tnw-search-input:** update props validations ([0706c81](https://github.com/technway/technway-component-library/commit/0706c81d49cf382a9acb69f1a24ffb2ba009237e))
* **tnw-subscription-form:** fix light appearance color styling ([7fb5d3a](https://github.com/technway/technway-component-library/commit/7fb5d3ae79155b86b772b7174d165d968293c350))
* **tnw-subscription-form:** fix variants styling issues ([86c0cf5](https://github.com/technway/technway-component-library/commit/86c0cf5e6ed7c9a6593598564f4207d8175af886))
* **tnw-subscription-form:** styling bugs ([9060d85](https://github.com/technway/technway-component-library/commit/9060d858c68cf8141958015eed6cd02fdd6b7b2b))
* update react packages to v19.0.0 ([42f4fc5](https://github.com/technway/technway-component-library/commit/42f4fc57b265da28d8aefb32bb265bb45720bfd6))
* **validations:** resolve components validations issues ([232537b](https://github.com/technway/technway-component-library/commit/232537b7fef2183e072afaad8fb1a9bf2498eb51))

## [3.11.2](https://github.com/technway/technway-component-library/compare/root-v3.11.1...root-v3.11.2) (2025-02-15)


### Bug Fixes

* **styles:** add fallback for Constructed Stylesheets (closes [#17](https://github.com/technway/technway-component-library/issues/17)) ([3584d31](https://github.com/technway/technway-component-library/commit/3584d31f107ab6e98a88a988bde59f55f6dfb472))
* **tnw-card:** ensure slots render correctly when used ([#101](https://github.com/technway/technway-component-library/issues/101)) ([f07eb70](https://github.com/technway/technway-component-library/commit/f07eb70d63f92053cb2802149e9fe5d75914078d))

## [3.11.1](https://github.com/technway/technway-component-library/compare/root-v3.11.0...root-v3.11.1) (2025-02-13)


### Bug Fixes

* **styles:** Add fallback for Constructed Stylesheets (partial [#17](https://github.com/technway/technway-component-library/issues/17)) ([e126a32](https://github.com/technway/technway-component-library/commit/e126a3285814ddf7961810a6d704d134a0248a2d))
* **tnw-banner:** correct vertical layout behavior ([#97](https://github.com/technway/technway-component-library/issues/97)) ([068d2c0](https://github.com/technway/technway-component-library/commit/068d2c08e19d79b789f4810b3de360bc68c32467))
* **tnw-banner:** update CSS variable names to fix gradient appearance ([272b3a3](https://github.com/technway/technway-component-library/commit/272b3a37bf7c34072aaff726df597bd62581c3ea))
* **tnw-card:** prevent rendering of unused slots ([#85](https://github.com/technway/technway-component-library/issues/85)) ([0992849](https://github.com/technway/technway-component-library/commit/0992849a7b72f33f2bb0c0d71c8eecc9745a200c))
* **tnw-portfolio-grid:** resolve data validation errors ([#87](https://github.com/technway/technway-component-library/issues/87)) ([#91](https://github.com/technway/technway-component-library/issues/91)) ([cdc983c](https://github.com/technway/technway-component-library/commit/cdc983c09f18445bef40cdc04c5483ef3596de4b))

## [3.11.0](https://github.com/technway/technway-component-library/compare/root-v3.10.0...root-v3.11.0) (2025-02-06)


### Features

* **tnw-button:** add custom events ([#81](https://github.com/technway/technway-component-library/issues/81)) ([1eb7217](https://github.com/technway/technway-component-library/commit/1eb721717f49c758454a9304b044a02059982772))
* **tnw-search-input:** add new custom event for handling input on change ([ed5c52e](https://github.com/technway/technway-component-library/commit/ed5c52ebb91f9d46d9a5abe483ebdeed88a8b8b0))
* **tnw-search-input:** add new custom event for handling input on change ([#79](https://github.com/technway/technway-component-library/issues/79)) ([d5a91ff](https://github.com/technway/technway-component-library/commit/d5a91ff41fce3ac5af839ee5b071251a834cbd89))


### Bug Fixes

* resolve styling issues in tnw-badge & tnw-image ([#72](https://github.com/technway/technway-component-library/issues/72)) ([6394d62](https://github.com/technway/technway-component-library/commit/6394d62e3102dbdd7f63ccb087b93d0202376473))

## [3.10.0](https://github.com/technway/technway-component-library/compare/root-v3.9.0...root-v3.10.0) (2025-01-25)


### Features

* **button:** introduce focus events and improve a11y ([4ea6dde](https://github.com/technway/technway-component-library/commit/4ea6ddea4f4b439b3b992338e425c734780ef20e))
* **tnw-input:** add focus, blur events and hoverEffect props ([b82163e](https://github.com/technway/technway-component-library/commit/b82163e171bdccec7356b888a669f7488b785534))
* **tnw-input:** add size prop ([1fb7d06](https://github.com/technway/technway-component-library/commit/1fb7d06e3f01730e432ac2da221ef0eb4ca79829))
* **tnw-search-input:** introduce events handling focus and blur and iconColor prop ([c78360e](https://github.com/technway/technway-component-library/commit/c78360e2a14b342fa5c531da457de204827af5d2))
* **tokens:** update placeholder-related css variables ([ae64d4d](https://github.com/technway/technway-component-library/commit/ae64d4d49433d6075a52119dac3bd44b3021a33d))


### Bug Fixes

* **tnw-accordion:** fix text alignment issues ([7438ca5](https://github.com/technway/technway-component-library/commit/7438ca5cbc2c6911acbca941cadc1811528760d6))
* **tnw-button:** fix border style issue ([90aa2b7](https://github.com/technway/technway-component-library/commit/90aa2b760f8848471a05ab45d10d34397d84a358))
* **tnw-divider:** fix light variant styling ([76ae362](https://github.com/technway/technway-component-library/commit/76ae362b808eb7a0299d7d0c119e0eb167c3a4de))
* **tnw-footer:** update tnw-subscription-form variant ([69486e7](https://github.com/technway/technway-component-library/commit/69486e764295eb172f46ead51f07165bc4f38f40))
* **tnw-search-input:** update props validations ([ecc3f65](https://github.com/technway/technway-component-library/commit/ecc3f652d11f71971f20fce9b8b0ac97f4e51ab9))
* **tnw-subscription-form:** fix light appearance color styling ([c6a9f8b](https://github.com/technway/technway-component-library/commit/c6a9f8b7dd9f5d02e35cb2e0456c8175e56022b2))
* **tnw-subscription-form:** fix variants styling issues ([cd7d15e](https://github.com/technway/technway-component-library/commit/cd7d15e26646e8cc8f306cc9e3ff02a2bed024b5))

## [3.9.0](https://github.com/technway/technway-component-library/compare/root-v3.8.0...root-v3.9.0) (2025-01-24)


### Features

* **tnw-navbar:** improve styling ([8c3b1e6](https://github.com/technway/technway-component-library/commit/8c3b1e600af545c182d7d88ff5acad1537fa8276))


### Bug Fixes

* **tnw-image:** fix styling issues ([e9807b6](https://github.com/technway/technway-component-library/commit/e9807b67e2ca5b65b3afb6add45cfd614035c74f))

## [3.8.0](https://github.com/technway/technway-component-library/compare/root-v3.7.0...root-v3.8.0) (2025-01-23)


### Features

* tnw-input-form not stable ([72705fe](https://github.com/technway/technway-component-library/commit/72705fee1ced583ba067e321efabfacfd0c1ca13))


### Bug Fixes

* **stencil-library:** reflect required props ([02ce15f](https://github.com/technway/technway-component-library/commit/02ce15f6e483008164e12b24aa9cc8f58652cc3c))
* **tnw-badge:** resolve rendering issues in Nextjs ([b97eef9](https://github.com/technway/technway-component-library/commit/b97eef999a29b78ee57c224386ccc014c78fc715))
* **tnw-button:** shadow dom styles ([01b8112](https://github.com/technway/technway-component-library/commit/01b8112c07f2e3936ccce0f857b15863f7556cb0))
* **tnw-image:** validation errors of required props ([2085646](https://github.com/technway/technway-component-library/commit/208564637f19e9bb15adf6af15d06b7ad0e51f88))

## [3.7.0](https://github.com/technway/technway-component-library/compare/root-v3.6.0...root-v3.7.0) (2025-01-21)


### Features

* **tnw-header:** improve props controlling height and responsive design ([dfbcda1](https://github.com/technway/technway-component-library/commit/dfbcda14f93c116f76ddfe856464589fe19a9253))
* **tnw-header:** improve styling ([2cdb9f3](https://github.com/technway/technway-component-library/commit/2cdb9f3da44d53c34aa0f63271237e0bd6e63560))


### Bug Fixes

* **layout-kit:** responsive prop in Grid ([4e73633](https://github.com/technway/technway-component-library/commit/4e7363360f8c6e6b34e2fe0b0ed7ccd2e03aac43))
* **stencil-library:** introduce 'tnw-banner' component ([c57b72d](https://github.com/technway/technway-component-library/commit/c57b72dab46b496d077353e3fc90480057f591cf))
* **tnw-footer:** resolve validadtion issues ([87b4252](https://github.com/technway/technway-component-library/commit/87b42523f45ceeb076441bec4877e777dbf68a11))
* **tnw-header:** responsive design issues ([0fc26ef](https://github.com/technway/technway-component-library/commit/0fc26ef7369c3df073e3ba1a292919fb3167054c))
* **tnw-header:** styling issues ([19e1eb1](https://github.com/technway/technway-component-library/commit/19e1eb1242cd2863df1f8ea673b67ee77000259f))
* **tnw-navbar:** validation errors and responsive design ([329b8d5](https://github.com/technway/technway-component-library/commit/329b8d593057439d48bd1a709db7e36574e9fe4a))

## [3.6.0](https://github.com/technway/technway-component-library/compare/root-v3.5.5...root-v3.6.0) (2025-01-20)


### Features

* **stencil-library:** introduce 'tnw-search-input' component ([1912cc2](https://github.com/technway/technway-component-library/commit/1912cc2c96561bd38e2054d35a302ee829032653))
* **stencil-library:** introduce tnw-anchor-styler component ([809bce5](https://github.com/technway/technway-component-library/commit/809bce597e73381db71cf370e1ee694e4e55a770))
* **tnw-footer:** enhance gap between list items ([f3a4dfe](https://github.com/technway/technway-component-library/commit/f3a4dfe576d832fb49756bccb1bd6ef47334d268))


### Bug Fixes

* **tnw-footer:** resolve data parsing errors encountered in next.js 15 ([8c8d4db](https://github.com/technway/technway-component-library/commit/8c8d4db4810d3a7853fe4dcc9c0124759926d432))
* **tnw-header-banner:** responsive design ([e8a1e00](https://github.com/technway/technway-component-library/commit/e8a1e0014b4307aad05efb2535b42711cee516a1))
* **tnw-header:** styling of 'centerBanner' prop ([6a6a8bc](https://github.com/technway/technway-component-library/commit/6a6a8bc151e36a6622143b0a0f2762f1b488b482))
* **tnw-icon:** resolve validations errors ([e855955](https://github.com/technway/technway-component-library/commit/e855955f07414d0a50c3ce272d1953076ef72837))
* **tnw-navbar:** resolve data parsing errors encountered in next.js 15 ([721ba6d](https://github.com/technway/technway-component-library/commit/721ba6d42549d7764cb8369bf88d92b551990482))
* **tnw-navbar:** toggler visibility depending on 'hideMenuBelow' prop ([a98a3da](https://github.com/technway/technway-component-library/commit/a98a3dafe26b5047f0943c606493db644a64ba38))

## [3.5.5](https://github.com/technway/technway-component-library/compare/root-v3.5.4...root-v3.5.5) (2025-01-18)


### Bug Fixes

* **stencil-library:** header-banner & card validations ([d0e075e](https://github.com/technway/technway-component-library/commit/d0e075ec2efc2bbbe1a0e9b0c0d540d0301841aa))

## [3.5.4](https://github.com/technway/technway-component-library/compare/root-v3.5.3...root-v3.5.4) (2025-01-18)


### Bug Fixes

* header and its banner styling isuues ([5812062](https://github.com/technway/technway-component-library/commit/581206217d58a669a475ac66dc25f8ea7a5dae46))

## [3.5.3](https://github.com/technway/technway-component-library/compare/root-v3.5.2...root-v3.5.3) (2025-01-13)


### Bug Fixes

* **next-library, layout-kit:** update and add @types/react to solve typings errors ([d956a4d](https://github.com/technway/technway-component-library/commit/d956a4d631cc4599e5cd31c784e1ad22757d77fe))

## [3.5.2](https://github.com/technway/technway-component-library/compare/root-v3.5.1...root-v3.5.2) (2025-01-13)


### Bug Fixes

* **layout-kit:** resolve build errors and remove unused dependencies ([db8f867](https://github.com/technway/technway-component-library/commit/db8f867ab0d72a71c1ba4e3af653d971fc4e0e8f))

## [3.5.1](https://github.com/technway/technway-component-library/compare/root-v3.5.0...root-v3.5.1) (2025-01-13)


### Bug Fixes

* **stencil-library:** resolve TypeScript build errors in components ([1d8c785](https://github.com/technway/technway-component-library/commit/1d8c785db9456b7850ba53f3066fba4b7a351df6))

## [3.5.0](https://github.com/technway/technway-component-library/compare/root-v3.4.0...root-v3.5.0) (2025-01-12)


### Features

* **tnw-copyrights-footer:** introduce new props for links and enhance styles ([0e11d7e](https://github.com/technway/technway-component-library/commit/0e11d7e8c0b876e60dd06c84f4362f542198f5a8))


### Bug Fixes

* **tne-footer:** resolve footerData and slots handling issues ([d1ee48d](https://github.com/technway/technway-component-library/commit/d1ee48d69d02092471e636080e9f13c4b84471cd))
* **tnw-header-banner:** resolve styling issues and update props ([20190b3](https://github.com/technway/technway-component-library/commit/20190b303d5478d1cbaf059eb2959848192149ab))

## [3.4.0](https://github.com/technway/technway-component-library/compare/root-v3.3.1...root-v3.4.0) (2025-01-12)


### Features

* **react-ui:** style NavbarMenu component ([604e3be](https://github.com/technway/technway-component-library/commit/604e3be8bd716ede15ba284ea0971a62f979df6f))


### Bug Fixes

* **tnw-navbar:** implement slot-based approach for custom links and fix issues ([4cdb955](https://github.com/technway/technway-component-library/commit/4cdb95517753f6773adf8c32905b2b329b41e077))

## [3.3.1](https://github.com/technway/technway-component-library/compare/root-v3.3.0...root-v3.3.1) (2025-01-09)


### Bug Fixes

* **react-ui:** resolve import issues for components and improve type declarations ([7725c87](https://github.com/technway/technway-component-library/commit/7725c87fa81676eb264eec940882f921f70234b4))
* **tnw-accordion:** resolve issue with accordion toggling in React ([df4531a](https://github.com/technway/technway-component-library/commit/df4531adf33e306ce43e3459bed330504bc932c3))
* **tnw-card:** resolve image width ([a17fed3](https://github.com/technway/technway-component-library/commit/a17fed38808e90f722cca5fe5f3169474aa83b2c))
* **tnw-footer:** handle missing data gracefully in display slots ([313c55f](https://github.com/technway/technway-component-library/commit/313c55f5403796d8640c2bcddcb01b523551c34b))

## [3.3.0](https://github.com/technway/technway-component-library/compare/root-v3.2.0...root-v3.3.0) (2025-01-08)


### Features

* add props to `tnw-contact-banner` ([4cbe247](https://github.com/technway/technway-component-library/commit/4cbe24750b96a63ffb15463e3495f8a9e32dac44))
* **tnw-button:** implement hover effects and styling ([5e3be35](https://github.com/technway/technway-component-library/commit/5e3be358a8f5dba15f3177c04ed7aa68c2663acb))
* **tnw-card:** implement new props and fix styling issues ([467a769](https://github.com/technway/technway-component-library/commit/467a76936f1115bd9467b089df1fe294c622ea90))
* **tnw-image:** introduce link prop for linkable images ([8a519cc](https://github.com/technway/technway-component-library/commit/8a519cce6768349dba2d900c9f1846ab01e35359))
* **tnw-input:** add appearanceColor prop ([794a8a1](https://github.com/technway/technway-component-library/commit/794a8a1a894b7566f529725b042d4912cf675122))
* **tnw-navbar:** add new props for more flexibility ([0f4ad16](https://github.com/technway/technway-component-library/commit/0f4ad160f53fa0de5d4d6666d2fda83c17f8cdba))
* **tnw-navbar:** add optional menu slot ([76a1637](https://github.com/technway/technway-component-library/commit/76a16373db5a37c4cb0bd41e09dda4c6578bc119))
* **tnw-subscription-form:** align input appearance with theme prop ([6c36885](https://github.com/technway/technway-component-library/commit/6c36885bfbc63ae3b86493228efb1cf4403cc46f))


### Bug Fixes

* **tnw-image:** resolve borderRadius prop issues ([4a0aea2](https://github.com/technway/technway-component-library/commit/4a0aea23c5776a3c16efb6967491240be87a80b5))

## [3.2.0](https://github.com/technway/technway-component-library/compare/root-v3.1.0...root-v3.2.0) (2025-01-08)


### Features

* **layout-kit:** revamp responsive grid system and configuration ([e138f7a](https://github.com/technway/technway-component-library/commit/e138f7aeb04f2c7c07bb08235e922a3384d907ce))


### Bug Fixes

* **layout-kit:** correct Grid component default column behavior ([bd24733](https://github.com/technway/technway-component-library/commit/bd24733dd10a600e1f9c4b734715ffc878c50919))

## [3.1.0](https://github.com/technway/technway-component-library/compare/root-v3.0.5...root-v3.1.0) (2025-01-07)


### Features

* **packages:** add layout-kit package ([2e6250f](https://github.com/technway/technway-component-library/commit/2e6250fecae94f26e0ad745c428912d1d894d86e))


### Bug Fixes

* **layout-kit:** add missing packaged files ([ba99064](https://github.com/technway/technway-component-library/commit/ba990643500220bb25e228e9b51d99faee89fca6))
* **stencil-library, layout-kit:** resolve storybook docs and layout-kit errors ([e515159](https://github.com/technway/technway-component-library/commit/e515159c152b2e681ebb4cfe902a924124858d2e))

## [3.0.5](https://github.com/technway/technway-component-library/compare/root-v3.0.4...root-v3.0.5) (2025-01-07)


### Bug Fixes

* error in root package-lock file ([1fea8ec](https://github.com/technway/technway-component-library/commit/1fea8ecaae6f81c00d631ba2dd76181e6d3f7547))
* **stencil-library:** downgrade react-output-target from v0.8.1 to v0.7.4 ([8ead93a](https://github.com/technway/technway-component-library/commit/8ead93a8dcc26322761fd4fe0c84fa68db51af2c))

## [3.0.4](https://github.com/technway/technway-component-library/compare/root-v3.0.3...root-v3.0.4) (2025-01-06)


### Bug Fixes

* **react-package, next-package:** downgrade react from v19 to v18 ([6dfc4d1](https://github.com/technway/technway-component-library/commit/6dfc4d10184bc510f0ad073b8ae3c01f83cb7f1c))

## [3.0.3](https://github.com/technway/technway-component-library/compare/root-v3.0.2...root-v3.0.3) (2025-01-06)


### Bug Fixes

* update react packages to v19.0.0 ([64a500a](https://github.com/technway/technway-component-library/commit/64a500a4d847a5f7c4f393cf092f96eaffce2a46))

## [3.0.2](https://github.com/technway/technway-component-library/compare/root-v3.0.1...root-v3.0.2) (2025-01-06)


### Bug Fixes

* **react-library, next-library:** update react from 18 to 19 ([bca7f15](https://github.com/technway/technway-component-library/commit/bca7f1520082118055395220fadd302d9bfd2162))

## [3.0.1](https://github.com/technway/technway-component-library/compare/root-v3.0.0...root-v3.0.1) (2025-01-06)


### Bug Fixes

* include components folder in published package ([5020851](https://github.com/technway/technway-component-library/commit/5020851ddb1119d64699b6b3bff7e70543d93bbc))
* resolve generated react and next components paths ([bdc7f0c](https://github.com/technway/technway-component-library/commit/bdc7f0cd46cc080279e10309c004e0846583686d))

## [3.0.0](https://github.com/technway/technway-component-library/compare/root-v2.9.0...root-v3.0.0) (2025-01-05)


### ⚠ BREAKING CHANGES

* The namespace for the Stencil library has been changed from 'components-lib' to 'stencil-components'. This affects how the library is imported and may require updates in consuming projects.
* 

### Features

* add Next.js SSR support and enhance package exports ([6e36a1f](https://github.com/technway/technway-component-library/commit/6e36a1fecdaf47b4f1891dd0b31db0865bb533f1))
* **navbar:** complete navbar implementation with fixes and improvements ([92e5f0e](https://github.com/technway/technway-component-library/commit/92e5f0e5ebe92b488afa73668657e954de0fdd28))
* **react-library:** generate react components ([e9c6a5c](https://github.com/technway/technway-component-library/commit/e9c6a5c9c223ba6062249245c836c62d73db0978))
* **tnw-select, tnw-badge, tnw-icon:** enhance components and improve tests ([e729e33](https://github.com/technway/technway-component-library/commit/e729e330e0ca45bdbb4599debeb4285eb80281d8))
* **tnw-textarea, tnw-input:** improve security, flexibility, and functionality ([59517f0](https://github.com/technway/technway-component-library/commit/59517f0367221fdf4c253e753c348cae72fd0f11))
* **tnw-text:** update props and their validations ([d1c8292](https://github.com/technway/technway-component-library/commit/d1c8292d169056f4dea8d6eaf7d09eb512d65098))


### Bug Fixes

* resolve bugs and enhance tnw-navbar component ([3493712](https://github.com/technway/technway-component-library/commit/3493712fc596e8a0a162312e936ccb51d7385bd7))
* resolve validation bugs and standardize prop naming conventions ([f9b02d0](https://github.com/technway/technway-component-library/commit/f9b02d087bba9cde8813d7e940de24f79bfc663d))

## [2.9.0](https://github.com/technway/technway-component-library/compare/root-v2.8.1...root-v2.9.0) (2024-12-20)
=======
# [1.1.0](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.1.0) (2024-12-20)


### Bug Fixes

* **tnw-button:** resolve disabled attribute issue ([6a726ff](https://github.com/technway/technway-component-library/commit/6a726ff1421d950f5d4ec2971eef55ebcece2284))


### Features

* **tnw-footer:** validate and update props ([0c4a175](https://github.com/technway/technway-component-library/commit/0c4a1757a9ce94aa528f5f5ede7d97be32f3ca51))
* **tnw-input:** implement pattern validation and security enhancements ([89052b3](https://github.com/technway/technway-component-library/commit/89052b30c21f16816e8722410677194c958742cc))
* **tnw-items-carousel:** deprecate component ([0ad83dd](https://github.com/technway/technway-component-library/commit/0ad83dd592ac7c19296d8642773a196620ac7d86))
* **tnw-list:** enhance component with new features and improvements ([1b1e25c](https://github.com/technway/technway-component-library/commit/1b1e25c7f15c18b4c554cecac9c96d5485ebf7d5))



## [1.0.11](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.0.11) (2024-12-09)

**Note:** Version bump only for package root





## [1.0.10](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.0.10) (2024-12-09)

**Note:** Version bump only for package root





## [1.0.9](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.0.9) (2024-12-09)

**Note:** Version bump only for package root





## [1.0.8](https://github.com/technway/technway-component-library/compare/v1.0.7...v1.0.8) (2024-12-09)

**Note:** Version bump only for package root





## [1.0.7](https://github.com/technway/technway-component-library/compare/v1.0.6...v1.0.7) (2024-12-09)


### Bug Fixes

* **tnw-heading:** resolve not rendering text without highlight ([bfbfed0](https://github.com/technway/technway-component-library/commit/bfbfed0921f39fdaaf5aa5c041c750890367d2df))





# Changelog

## [2.8.1](https://github.com/technway/technway-component-library/compare/root-v2.8.0...root-v2.8.1) (2024-12-09)


### Bug Fixes

* **tnw-heading:** resolve not rendering text without highlight ([bfbfed0](https://github.com/technway/technway-component-library/commit/bfbfed0921f39fdaaf5aa5c041c750890367d2df))

## [2.8.0](https://github.com/technway/technway-component-library/compare/root-v2.7.0...root-v2.8.0) (2024-12-08)


### Features

* **components:** add highlight text support to typography components ([b61d42b](https://github.com/technway/technway-component-library/commit/b61d42b709072c0d614509515ee29d780d8d8daa))
* **components:** improve tnw-footer and tnw-subscription-form ([0894572](https://github.com/technway/technway-component-library/commit/08945725a614f5611cdd02bb6620419d45ab4ccd))
* **tnw-card:** add 'largerImage' prop ([4583619](https://github.com/technway/technway-component-library/commit/458361904814e3894dd8633c806e721dfa372395))
* **tnw-copyrights-footer:** centralize content within a single &lt;tnw-text&gt; element ([3680fbf](https://github.com/technway/technway-component-library/commit/3680fbfdef6f03961ee5e574952d23355b7ea2ad))
* **tnw-footer:** add 'copyrights' slot and improve styling with new props ([44982b0](https://github.com/technway/technway-component-library/commit/44982b0968b68bad68905cf7b5a9df145da878d9))


### Bug Fixes

* **tnw-copyrights-footer:** resolve centereing content issue ([ea92a70](https://github.com/technway/technway-component-library/commit/ea92a70b01ce563b7bbae60750d76d5aad0f2ffb))
* **tnw-rows-carousel:** resolve slot element assignment issues for React ([ef32210](https://github.com/technway/technway-component-library/commit/ef32210d0cf4b47ceb3e85408326662449b81a26))

## [2.7.0](https://github.com/technway/technway-component-library/compare/root-v2.6.1...root-v2.7.0) (2024-12-07)


### Features

* **components:** improve tnw-copyrights-footer, tnw-subscription-form, and tnw-footer ([cbe31c9](https://github.com/technway/technway-component-library/commit/cbe31c943d5255e597ea96eb0bdd56066ac5fa1d))
* **components:** introduce tnw-footer component and update existing footer structure ([ea30a29](https://github.com/technway/technway-component-library/commit/ea30a29a6750fbead5d71036f3e3319f6f41443b))
* **tnw-subscription-form:** introduce new component ([23baeb7](https://github.com/technway/technway-component-library/commit/23baeb701053070d42e5a3e327423b62a3739052))

## [2.6.1](https://github.com/technway/technway-component-library/compare/root-v2.6.0...root-v2.6.1) (2024-12-03)


### Bug Fixes

* **validations:** resolve components validations issues ([2096a3a](https://github.com/technway/technway-component-library/commit/2096a3a412be0cf8ffdd4955bc2f783502142761))

## [2.6.0](https://github.com/technway/technway-component-library/compare/root-v2.5.0...root-v2.6.0) (2024-12-03)


### Features

* **tnw-rows-carousel:** enhacne functionaliity and style ([4db88b6](https://github.com/technway/technway-component-library/commit/4db88b69016584bd250065ed6071eedd2015a08c))

## [2.5.0](https://github.com/technway/technway-component-library/compare/root-v2.4.0...root-v2.5.0) (2024-12-02)


### Features

* **components:** create new 'tnw-testimonial-card' and 'tnw-rows-carousel' components ([eb8d2a9](https://github.com/technway/technway-component-library/commit/eb8d2a9b8e2c251e8647a005809c71047c01a0f6))

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
