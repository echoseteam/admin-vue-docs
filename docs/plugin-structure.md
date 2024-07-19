
# Plugin Structure
All plugins are registered to Composer autoloader manually. It needs a plugin.json file to provide all needed information for auto-loading.
``` bash
{
  "name": "echose-admin-template-vue",
  "version": "1.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 4173",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore",
    "format": "prettier --write src/"
  },
  "dependencies": {
    "@mdi/js": "^7.0.96",
    "@vueup/vue-quill": "^1.2.0",
    "axios": "^1.5.0",
    "chart.js": "^4.4.0",
    "numeral": "^2.0.6",
    "pinia": "^2.1.6",
    "sweetalert2": "^11.12.2",
    "vue": "^3.3.4",
    "vue-quill-editor": "^3.0.6",
    "vue-router": "^4.2.4"
  },
  "devDependencies": {
    "@rushstack/eslint-patch": "^1.3.3",
    "@vitejs/plugin-vue": "^4.3.4",
    "@vue/eslint-config-prettier": "^8.0.0",
    "autoprefixer": "^10.4.15",
    "eslint": "^8.49.0",
    "eslint-plugin-vue": "^9.17.0",
    "postcss": "^8.4.30",
    "postcss-import": "^15.1.0",
    "prettier": "^3.0.3",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.9"
  }
}
```

A basic plugin structure.
![Plugin Screenshot](/images/plugin_structure.png)



