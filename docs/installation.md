
# Installation

## Requirements

Before installing our Vue 3 project, ensure that your system meets the following requirements:

* Node.js >= 14.18.0 (Latest LTS version recommended)
* npm >= 6.14.0 or yarn >= 1.22.0
* Modern web browser with ES6 support (Chrome, Firefox, Safari, Edge)

Main dependencies:

* Vue.js 3.x
* Vite (as build tool)
* Tailwind CSS
* @mdi/js (Material Design Icons)

Recommended development tools:

* Visual Studio Code with extensions:
  * Volar (Vue Language Features)
  * Tailwind CSS IntelliSense
  * ESLint
  * Prettier

Optional requirements (depending on specific project needs):

* Git (for version control)
* Vue DevTools (browser extension for Vue debugging)

Notes:

* Ensure you have internet access to install npm packages
* If using Windows, you might need to install Windows Subsystem for Linux (WSL) for a better development environment

The following steps will guide you through installing and configuring the Vue 3 project with Tailwind CSS and @mdi/js.

## Vue 3 Configuration

To set up your Vue 3 project, you'll need to configure your development environment. Here are some key steps:

1. Install Vue 3 CLI globally (if not already installed):
``` bash
npm install -g @vue/cli
```

2. Create a new Vue 3 project:
``` bash
vue create my-vue3-project
cd my-vue3-project
```

3. Install additional dependencies
- Install Tailwind CSS and Material Design Icons:
``` bash
npm install tailwindcss @mdi/js
```

4. Set up Tailwind CSS
- Create a Tailwind configuration file:
``` bash
npx tailwindcss init
```

5. Update main.ts
- Open src/main.ts and update it to include Tailwind CSS:
``` bash
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import EchoseAlertPlugin from './plugins/EchoseAlert '
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import './assets/css/main.css'
const pinia = createPinia()
```
6. Create index.css
- Create a new file src/index.css and add the following: 
``` bash
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```


Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
