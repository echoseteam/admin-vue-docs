# Input Component

The Input component is a versatile and customizable form control for Vue 3 applications. It supports various input types including text, textarea, and select, with additional features such as icons, clearable inputs, and keyboard shortcuts.

## Features
- Supports text, textarea, and select input types
- Customizable appearance with icons and styling options
- Clearable input with a click
- Keyboard shortcuts for focus (Ctrl+K) and blur (Escape)
- Fully compatible with v-model for two-way data binding
- Responsive design with dark mode support

## Example
![Input Screenshot](/images/input.png)

## Usage

``` vue
<script setup>
import { computed, ref, defineEmits, onMounted, onBeforeUnmount } from 'vue'
import { useMainStore } from '@/stores/index'
import BaseIcon from '@/components/Icons/BaseIcon.vue'
import FormControlIcon from '@/components/Forms/FormControlIcon.vue'

import {
  mdiClose
} from '@mdi/js'

const props = defineProps({
  name: {
    type: String,
    default: null
  },
  id: {
    type: String,
    default: null
  },
  autocomplete: {
    type: String,
    default: null
  },
  maxlength: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  inputmode: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  options: {
    type: Array,
    default: null
  },
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: ''
  },
  clearable: {
  type: Boolean,
  default: false
},
  required: Boolean,
  borderless: Boolean,
  transparent: Boolean,
  ctrlKFocus: Boolean
})

const emit = defineEmits(['update:modelValue', 'setRef', 'clear'])

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

const inputElClass = computed(() => {
  const base = [
    'px-3 py-2 max-w-full focus:outline-none rounded w-full',
    'dark:placeholder-gray-400 focus:border-sky-500 focus:ring-sky-500',
    computedType.value === 'textarea' ? 'h-24' : 'h-10',
    props.borderless ? 'border-0' : 'border',
    props.transparent ? 'bg-transparent' : 'bg-white dark:bg-slate-800'
  ]

  if (props.icon) {
    base.push('pl-10')
  }

  return base
})

const computedType = computed(() => (props.options ? 'select' : props.type))
const controlIconH = computed(() => (props.type === 'textarea' ? 'h-full' : 'h-10'))
const mainStore = useMainStore()
const selectEl = ref(null)
const textareaEl = ref(null)
const inputEl = ref(null)

onMounted(() => {
  if (selectEl.value) {
    emit('setRef', selectEl.value)
  } else if (textareaEl.value) {
    emit('setRef', textareaEl.value)
  } else {
    emit('setRef', inputEl.value)
  }
})

if (props.ctrlKFocus) {
  const fieldFocusHook = (e) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault()
      inputEl.value.focus()
    } else if (e.key === 'Escape') {
      inputEl.value.blur()
    }
  }

  onMounted(() => {
    if (!mainStore.isFieldFocusRegistered) {
      window.addEventListener('keydown', fieldFocusHook)
      mainStore.isFieldFocusRegistered = true
    } else {
      console.error('Duplicate field focus event')
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', fieldFocusHook)
    mainStore.isFieldFocusRegistered = false
  })
}

const hasValue = computed(() => {
  return props.clearable && computedValue.value !== '' && computedValue.value !== null && computedValue.value !== undefined;
})

const handleClear = () => {
  emit('clear')
}
</script>

<template>
  <div class="relative">
    <select
      v-if="computedType === 'select'"
      :id="id"
      v-model="computedValue"
      :name="name"
      :class="inputElClass"
    >
      <option v-for="option in options" :key="option.id ?? option" :value="option">
        {{ option.label ?? option }}
      </option>
    </select>
    <textarea
      v-else-if="computedType === 'textarea'"
      :id="id"
      v-model="computedValue"
      :class="inputElClass"
      :name="name"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :required="required"
    />
    <input
      v-else
      :id="id"
      ref="inputEl"
      v-model="computedValue"
      :name="name"
      :maxlength="maxlength"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :required="required"
      :placeholder="placeholder"
      :type="computedType"
      :class="inputElClass"
    />
    <FormControlIcon v-if="icon" :icon="icon" :h="controlIconH" />

    <span
      v-if="hasValue "
      class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white"
      @click="handleClear"
    >
  <BaseIcon :path="mdiClose" :width="13" :height="13" />
</span>
  </div>
</template>

```