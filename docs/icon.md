# Icon Component
The Icon Component is a versatile wrapper for displaying icons in Vue 3 applications, primarily designed for use with Material Design Icons.

## Features
- Material Design Icons integration
- Customizable size and color
- Optional background styling
- Dark mode compatibility
- Flexible prop-based configuration

## Example
![Icon Screenshot](/images/icon.png)

## Usage
``` vue
<script setup>
import { colorsText, colorsBgLight } from '@/configs/colors'
import BaseIcon from '@/components/Icons/BaseIcon.vue'

defineProps({
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: null
  },
  w: {
    type: String,
    default: 'w-12'
  },
  h: {
    type: String,
    default: 'h-12'
  },
  bg: Boolean
})
</script>

<template>
  <BaseIcon
    :path="icon"
    :w="w"
    :h="h"
    size="24"
    class="rounded-full"
    :class="bg ? colorsBgLight[color] : [colorsText[color], 'bg-gray-50 dark:bg-slate-800']"
  />
</template>

```