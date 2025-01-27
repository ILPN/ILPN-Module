# Changelog

All notable changes to this project will be documented in this file.

Changes to the components library are tracked in a separate changelog found [here](https://github.com/ILPN/ILPN-Components/blob/master/CHANGELOG.md).

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

[//]: # (## Unreleased)

## 1.4.0 - 2024-02-20
### Added
- a dependency on `fast-xml-parser` has been added to the project - [commit](https://github.com/ILPN/ILPN-Module/commit/a0c7b99172d6cd23cebe8ff2883bba478a4b9b0a)
- `PnDisplayModule` and `IlpnAlgorithmsModule` have been imported from ILPN Components - [commit](https://github.com/ILPN/ILPN-Module/commit/a0c7b99172d6cd23cebe8ff2883bba478a4b9b0a)
- a default `PetriNetLayoutManagerFactoryService` is provided - [commit](https://github.com/ILPN/ILPN-Module/commit/a0c7b99172d6cd23cebe8ff2883bba478a4b9b0a)

### Components
- The components library version has been increased to v1.4.0


## 1.3.0 - 2023-12-19
### Components
- The components library version has been increased to v1.3.0

### Security
- Bump webpack and @angular-devkit/build-angular - [commit](https://github.com/ILPN/ILPN-Module/commit/7c8ad0809d5630628fb8c0cb7175eec23ee2abde)

## 1.2.0 - 2023-04-11
### Added
- a dependency on Angular `RoutingModule` has been added to the project - [commit](https://github.com/ILPN/ILPN-Module/commit/4925c58b70e7a6054df5ba74e87dd779cd8bb2bd)

### Components
- The components library version has been increased to v1.2.0

## 1.1.0 - 2022-12-16
### Components
- The components library version has been increased to v1.1.0
  - a changelog has been added for the component library - [here](https://github.com/ILPN/ILPN-Components/blob/master/CHANGELOG.md)

## 1.0.0 - 2022-10-11
### Added
- Changelog was added to the project
- Unit tests have been added to the components library and a lauch script has been added to the module template - [commit](https://github.com/ILPN/ILPN-Module/commit/d75719995493c8fe580580f8b7d9b49cdd85499a)

### Changed
- The project build target has been changed from `es2017` to `es2018` to support the client-zip library - [commit](https://github.com/ILPN/ILPN-Module/commit/5186d081a12990f94e74c1b148ec664648b9d185)
- Style of the anchor tag (`<a>`) has been changed - [commit](https://github.com/ILPN/ILPN-Module/commit/8d02b5492066c5acd6696b31f10727528225b61d)

### Fixed
- The need for a duplicate specification of the `base-href` build attribute has been removed - [commit](https://github.com/ILPN/ILPN-Module/commit/80b72842c69e388b409587e2030b5eb202424e64)

### Security
- Bump terser and @angular-devkit/build-angular - [commit](https://github.com/ILPN/ILPN-Module/commit/cbd23b79c6557ebff7f686b7135dba4400804cc0)
