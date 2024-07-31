# Confirm Component

The Confirm Component is a customizable modal dialog for Vue 3 applications, designed to prompt users for confirmation before proceeding with an action.

## Features

- Responsive design for mobile and desktop layouts
- Customizable title, message, and icon
- Configurable confirm and cancel button text and colors
- Smooth transitions for modal open/close
- Accessible design with ARIA attributes
- Backdrop overlay for focus
- Top-right close button
- Flexible content area
- Event emission for confirm and cancel actions
- Easy Vue 3 integration
- Tailwind CSS styling
- Material Design Icons support
- Keyboard navigation support
- Modal behavior (background interaction prevention)

## Example
![Confirm Screenshot](/images/confirm.png)

## Usage

``` vue
<template>
  <div v-if="isVisible" id="YOUR_ID" class="fixed z-50 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            @click="cancel"
          >
            <span class="sr-only">Close</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
        <div class="sm:flex sm:items-start">
          <div
            class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
          >
            <svg class="h-6 w-6 text-blue-600" viewBox="0 0 24 24">
              <path :d="mdiDeleteEmpty" fill="currentColor" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 id="modal-headline" class="text-lg leading-6 font-medium text-gray-900">
              {{ title }}
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                {{ message }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            :class="[
              confirmButtonColor,
              'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
            ]"
            @click="confirm"
          >
            {{ confirmButtonText || 'OK' }}
          </button>
          <button
            type="button"
            :class="[
              cancelButtonColor,
              'mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm'
            ]"
            @click="cancel"
          >
            {{ cancelButtonText || 'Cancel' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { mdiDeleteEmpty } from '@mdi/js'
import { defineEmits } from 'vue'

defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Notice'
  },
  message: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'mdiDeleteEmpty '
  },
  confirmButtonColor: {
    type: String,
    default: 'bg-red-600 hover:bg-red-700'
  },
  cancelButtonColor: {
    type: String,
    default: 'bg-gray-300 hover:bg-gray-400 text-gray-800'
  },
  confirmButtonText: {
    type: String,
    default: 'OK'
  },
  cancelButtonText: {
    type: String,
    default: 'Cancel'
  }
})

const emit = defineEmits(['confirm', 'cancel'])

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
}

</script>

```