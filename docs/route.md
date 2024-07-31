# Routing in Vue 3 

This document explains how routing is configured and used in our Vue 3 application built.

## Router Configuration

The router configuration is split between two main files: `main.ts` and `router/index.ts`.

### main.ts

```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import EchoseAlertPlugin from './plugins/EchoseAlert'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import './assets/css/main.css'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(EchoseAlertPlugin)
  .component('QuillEditor', QuillEditor)
  .mount('#app')

const defaultDocumentTitle = 'Echose Admin Template Vue'

router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle
})
```

### router/index.ts
```typescript
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Dashboard
  },
  // ... other routes
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
```

## Route Structure

Each route in the `routes` array is an object with the following structure:

```typescript
{
    meta: {
        title: 'Tables sample'
    },
    path: '/components/tables',
    name: 'tables',
    component: () => import('@/views/Components/Tables/Index.vue')
},
```

## Adding a New Route
To add a new route:

- Create a new component in the views folder.
- Add a new route object to the routes array in router/index.ts

```typescript
{
    meta: {
        title: 'Create Permission'
    },
    path: '/permission/create',
    name: 'permission.create',
    component: () => import('@/views/Permissions/Create.vue')
},
```

## Using Router in Components
In Templates
- Use router-link for declarative navigation:
```vue
<router-link to="/new-page">Go to New Page</router-link>
```