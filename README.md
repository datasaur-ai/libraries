# libraries

Shared Datasaur libraries to speed up custom scripts and automations development.

## Local Setup

### Pre-requisites

NodeJS version 12 or newer
NPM version 7 or newer

### Installation

```bash
npm ci
```

## Publishing Packages

Any packages that is merged to `main` branch will be published automatically to NPM's public registry

## Development

### Adding dependency

To add a new library, you can decide whether it is a global library of just a local package.

- If it is a dev dependency used across package, install at root level.
  ```ts
  npm install [package_name]
  # or
  npm i [package_name]
  ```
- If it is a dependency used across package, install it to all packages.
  ```ts
  npm install [package_name] --workspaces
  #or
  npm i [package_name] --workspaces
  ```
- If the package is exclusive to certain package, you can install it to specific package only.
  ```bash
  npm install [package_name] --workspace [workspace_folder]
  # or
  npm i [package_name] -w [workspace_folder]
  ```

To add a dependency from internal package, we can treat it the same as installing external packages.

```ts
npm install @datasaur-ai/[PACKAGE_NAME] --workspace packages/[PACAKGE_NAME]
#or
npm i @datasaur-ai/[PACKAGE_NAME] -w packages/[PACAKGE_NAME]
```

### Adding a new package

- run command:
  ```
  npm init -w packages/[YOUR_NEW_PACKAGE]
  ```
- Give the package name with scope: `@datasaur-ai/`
- register the new folder in `libraries.code-workspace`
