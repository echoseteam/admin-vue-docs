# Blank Page Layout
The Blank Page Layout component is a simple, versatile template for creating new pages in Vue 3 applications. It provides a basic structure that can be easily customized and expanded upon for various content needs.

## Features
- Uses the authenticated layout, ensuring consistent navigation and styling
- Includes a breadcrumb component for easy navigation
- Implements a main section wrapper for content organization
- Provides a basic card box for content placement
- Utilizes an icon from the Material Design Icons set
- Responsive design (implied through the use of reusable components)
- Easy to customize and add content
- Consistent with the overall application design
## Example
![Blank Page Screenshot](/images/blank_page.png)

## Usage
``` vue
<script setup>
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref } from 'vue'
import CardBox from '@/components/CardBox.vue'
import { mdiPageLayoutBody } from '@mdi/js'

const breadcrumbs = ref([{ name: 'Dashboard', link_to: '/' }, { name: 'Blank page' }])
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <Breadcrumb :items="breadcrumbs" title="Blank page" :icon="mdiPageLayoutBody" />

      <CardBox>
        <p>Content here...</p>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

```