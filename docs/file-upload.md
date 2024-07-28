# Upload Component

The Upload component is a versatile file upload solution for Vue 3 applications, designed to handle image uploads with preview functionality.

## Features
- Image preview with customizable icon for empty state
- File size validation
- Customizable label and icon
- Supports various file types through 'accept' prop
- Circular or square image preview option
- Remove uploaded image functionality
- Responsive design with flexbox layout
- Custom styling options including border radius and colors
- File selection through click or drag-and-drop (implied by the implementation)
- Emits selected file for parent component handling

## Example
![Upload Screenshot](/images/upload.png)

## Usage
``` vue
<script setup>
import { mdiUpload } from '@mdi/js'
import { computed, ref, defineEmits } from 'vue'
import bgImageUpload from '@/assets/img/icon-upload.jpg'

const props = defineProps({
  modelValue: {
    type: [Object, File, Array],
    default: null
  },
  iconUpload: {
    type: String,
    default: bgImageUpload
  },
  label: {
    type: String,
    default: 'Choose file'
  },
  icon: {
    type: String,
    default: mdiUpload
  },
  accept: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: 'info'
  },
  maxSize: {
    type: Number,
    default: 500
  },
  borderRadius: {
    type: Boolean,
    default: false
  }
})

const removeImage = () => {
  imagePreview.value = props.iconUpload
  file.value = null
  emit('update:modelValue', null)
  if (root.value) {
    root.value.value = ''
  }
}

const imagePreview = ref(props.iconUpload)
const file = ref(null)
const emit = defineEmits(['update:modelValue'])
const root = ref(null)

const upload = (event) => {
  const selectedFile = event.target.files[0]
  if (selectedFile && selectedFile.size <= props.maxSize * 1024) {
    file.value = selectedFile
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target.result
    }
    reader.readAsDataURL(selectedFile)
    emit('update:modelValue', selectedFile)
  }
}

const triggerFileInput = () => {
  root.value.click()
}

const imageClass = computed(() => {
  return {
    'w-32 h-32 object-cover cursor-pointer border border-gray-300': true,
    'rounded-full': props.borderRadius
  }
})

const iconUploadClass = computed(() => {
  return {
    'w-32 h-32 flex items-center justify-center cursor-pointer border border-gray-300': true,
    'rounded-full': props.borderRadius
  }
})
</script>

<template>
  <div class="flex flex-col">
    <div class="mb-4 relative">
      <div class="relative inline-block">
        <img
          v-if="imagePreview"
          :src="imagePreview"
          :class="imageClass"
          @click="triggerFileInput"
        />
        <div v-else :class="iconUploadClass" @click="triggerFileInput">
          <img :src="bgImageUpload" alt="Choose image" class="w-16 h-16 object-cover" />
        </div>
        <button
          v-if="imagePreview && imagePreview !== props.iconUpload"
          class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
          title="Remove image"
          @click="removeImage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <input ref="root" type="file" class="hidden" :accept="accept" @input="upload" />
  </div>
</template>

```