# Image Component
The Image Component is a versatile and customizable Vue 3 component designed to display user avatars or images with various styling options.

## Features
- Displays user avatars or custom images
- Supports rounded shape for avatar-style display
- Responsive design with automatic width and height adjustment
- Dark mode support with background color adaptation
- Customizable image source through props
- Fallback to API-generated avatars when no image is provided
- Slot support for additional content or overlays
- Computed property for reactive image source handling
- Easy integration with various avatar APIs or custom image sources

## Example
![Image Screenshot](/images/images.png)

## Usage
``` vue
<script setup>
import { computed } from 'vue'

const props = defineProps({
  username: {
    type: String,
    default: null
  },
  avatar: {
    type: String,
    default: null
  },
  api: {
    type: String,
    default: 'avataaars'
  }
})

const avatar = computed(() => props.avatar)
</script>

<template>
  <div>
    <img
      :src="avatar"
      class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
    />
    <slot />
  </div>
</template>

```