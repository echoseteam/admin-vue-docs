# Icon Component

## Installation

### Using package manager

```shell

# NPM
$ npm install @mdi/js

```
## Simple Usage
![User Screenshot](/images/user1.png)
```vue
<script setup>
import {mdiAccountSupervisor} from '@mdi/js'
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<template>
  <Breadcrumb :items="breadcrumbs" :icon="mdiAccountSupervisor" title="Users" />
</template>

```

## Set width icon
```vue
<script setup>
  const iconSize = 24 // Kích thước icon có thể điều chỉnh
</script>

<template>
<svg viewBox="0 0 24 24" :width="iconSize" :height="iconSize" class="inline-block">
  <path fill="currentColor" :d="path" />
</svg>
</template>

```

## API

### Attributes

| Attribute | Description | Type | Accepted Values | Default |
|-----------|-------------|------|-----------------|---------|
| path | The SVG path data for the icon | string | — | — |
| iconSize | The width and height of the icon | number | — | — |

### Slots

| Name | Description |
|------|-------------|
| default | Content to be placed inside the SVG element |