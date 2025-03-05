# Blank Page Layout

## Base Usage
![Blank Page Screenshot](/images/blank_page.png)
``` vue
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

<script setup>
  import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
  import SectionMain from '@/components/SectionMain.vue'
  import Breadcrumb from '@/components/Breadcrumb.vue'
  import { ref } from 'vue'
  import CardBox from '@/components/CardBox.vue'
  import { mdiPageLayoutBody } from '@mdi/js'

  const breadcrumbs = ref([{ name: 'Dashboard', link_to: '/' }, { name: 'Blank page' }])
</script>

```