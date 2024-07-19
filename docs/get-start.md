
# Components in Vue 3
::: warning
Development tools and dependencies are not included in the production build. After cloning the repository, you need to run npm install to install all dependencies before you can use development commands.
:::

## Creating a Component
1. Create a new .vue file in the src/components directory:
``` bash
touch src/components/MyNewComponent.vue
```
2. Basic structure of a Vue 3 component:
``` bash
<template>
  <div>
    <!-- Your component's template -->
  </div>
</template>

<script setup>
// Your component's logic
</script>

<style scoped>
/* Your component's styles */
</style>
``` 

## Registering a Component
- In Vue 3, you can use the component directly in another component without global registration:
``` bash
<script setup>
import MyNewComponent from './MyNewComponent.vue'
</script>

<template>
  <MyNewComponent />
</template>
``` 

## Using Composition API
- Vue 3 encourages the use of the Composition API. Here's a basic example:
``` bash
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log('Component mounted')
})
</script>
``` 

## Removing a Component
- To remove a component, simply delete the .vue file and remove any imports of that component from other files.
::: info
Remember to remove any routes associated with the component if you're using vue-router.
:::

## Video Tutorials
For more detailed information on working with Vue 3, check out these video tutorials:

- Vue 3 Composition API
- Creating CRUD Operations in Vue 3
- Vue 3 + Vite Project Setup
- Working with Vue 3 and TypeScript

::: tip
These tutorials cover various aspects of Vue 3 development, including component creation, state management with Composition API, and project setup with Vite.
:::