# File Structures
Our Vue project is organized with the following directory structure:

![Struct Screenshot](/images/struct.png)
## Directory Structure Explanation

- dist/: Contains the built files ready for deployment.
- node_modules/: Houses the project's dependencies.
- public/: Stores static assets that don't require processing.
- src/: Contains the main source code of the application.

- assets/: Stores resources such as images, fonts, and styles.
- components/: Contains reusable Vue components.
- configs/: Holds configuration files for the application.
- data-sources/: Contains data sources or services.
- img/: Stores images used in the application.
- layouts/: Houses layout components.
- plugins/: Contains Vue plugins or extensions.
- router/: Holds routing configuration and definitions.
- stores/: Contains stores (Vuex or Pinia) for state management.
- utils/: Houses utility functions and helpers.
- views/: Contains page components.
-App.vue: The root component of the application.
- main.ts: The entry point of the application.

## Configuration Files

- .editorconfig: Editor configuration.
- .eslintrc.js: ESLint configuration for code linting.
- .gitignore: Specifies files and directories for Git to ignore.
- .prettierrc.json: Prettier configuration for code formatting.
- index.html: The root HTML file of the application.
- jsconfig.json: JavaScript configuration for VSCode.
- LICENSE: License information for the project.
- package.json & package-lock.json: Manage dependencies and scripts.
- postcss.config.js: PostCSS configuration.
- README.md: Project information and instructions.
- tailwind.config.ts: Tailwind CSS configuration.
- vite.config.ts: Configuration for the Vite bundler.