# Template project for I love Petri nets website modules

A skeleton repository for creating modules for the I love Petri nets website.

## Developing ILPN modules

The repository operates in tandem with the [ILPN Components repository](https://github.com/ILPN/ILPN-Components) that is a git submodule in this project. The build configuration is part of this project.

If you want to develop an ILPN module that makes use of the component library you should follow these steps:

### Creating a module project

There are multiple ways to create a project for an ILPN module. You can choose your preferred way from the following list, but we would recommend choosing one of the first two options

#### 1. Forking the ILPN Module project

This is the recommended way, since by forking this template repository, you have the option to merge future changes made to the template.

#### 2. Using the ILPN Module github template

This project is marked as a template repository and it can therefore be easily cloned for your needs.
The downside of this, is that the clone contains only a snapshot of the original at the time of its creation and future changes must be applied by hand.
The template repository itself does not undergo major changes, so it is more an inconvenience, that a major pain point.
Changes made to this repository since version 1.0.0 are tracked in the [Changelog](./CHANGELOG.md) with links to the individual commits.

All the modules maintained by the ILPN Github organisation are created like this, since owning multiple forks of the same repository is not supported by Github.

#### 3. Using a custom project with the ILPN Components library

If you want to forgo the use of this ILPN module template in favour of your own project, you are welcome to do so.
Keep in mind however, that the ILPN Components library is NOT published to the NPM registry, and must be therefore built locally.
You can use this project as a reference for setting this up.

### Adding the components library dependency

This project contains the [ILPN Components library](https://github.com/ILPN/ILPN-Components) as a git submodule.

#### 1. Consuming the library

If you do not intent to modify the code of the library at all, you can simply use the configuration provided in this template and clone the project with the following command:

```
git clone --recurse-submodules <git repo link>
```

This will clone the submodule project in addition to the template project.

The library project is "read only" assuming you do not have access rights to the library repository. This means you can check-out any released changes, but you cannot push any changes of your own.

#### 2. Extending the library

If you want to modify the code of the components library, we would recommend forking the library repository and replacing the git submodule declared in this template with the forked repository.

First clone the repository normally and then execute the following commands inside of it:

```
git rm projects/components
git submodule add <forked components git repo link> projects/components
git commit
```

This will replace the submodule reference with a reference to your fork and will initialise the submodule folder.

When cloning the repository after performing these set-up steps. Use the following command to clone your repository and the submodules at the same time:

```
git clone --recurse-submodules <git repo link>
```

## Running the project

### Development

The `package.json` file contains the following notable scripts:

- `test:components` - will run the unit test suites of the components library. The module template project itself contains no unit tests.
- `bild-local:components` - will rebuild the components library and link it as a dependency to the module project
- `start` - will execute the build script, followed by `ng serve`. Keep in mind, that hot-reload will only register changes made to the served module project files, and will ignore any changes made to the library files. If you change the library files, you have to rebuild the library (by rerunning this script) to see the changes.

### Deployment

Should the `base-href` of the project be modified (as is usually the case for ILPN modules, when deployed to the ILPN website) the property is passed as an argument to the `build` script in the `package.json` file.

## Maintaining ILPN modules

The ILPN Module repository (this repository) is updated in tandem with its [ILPN Components](https://github.com/ILPN/ILPN-Components) counterpart.
If you want to update to a newer version of the Components library, make sure that you apply all the changes to the template library mentioned in the [Changelog](./CHANGELOG.md).
If you are updating from a 0.x version, the changes are NOT documented in the changelog and you will have to reconstruct them from the commit made to this project.

## Reporting issues

If you have encountered an issue with a specific module, report the error to the repository/author of the module.

If you have encountered an issue with the algorithms and/or components used in the modules, report the issue to the [ILPN Components repository](https://github.com/ILPN/ILPN-Components).

If you have encountered an issue with the template project itself, feel free to create an issue and/or a pull request to this repository.
