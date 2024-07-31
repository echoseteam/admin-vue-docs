
# Components


- Form

![Form Screenshot](/images/component_form.png)
``` copy
<script setup>
import { reactive, ref } from 'vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadioGroup from '@/components/Forms/FormCheckRadioGroup.vue'
import FormFilePicker from '@/components/Forms/FormFilePicker.vue'
import FormField from '@/components/Forms/FormField.vue'
import FormControl from '@/components/Forms/FormControl.vue'
import BaseButton from '@/components/Forms/BaseButton.vue'
import BaseButtons from '@/components/Forms/BaseButtons.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { mdiSquareEditOutline } from '@mdi/js'
import { useFlashMessage } from '@/utils/flashMessage'
import VueQuillEditor from '@/components/Forms/VueQuillEditor.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  country: '',
  textarea: '',
  editor: '',
  gender: '',
  question: ''
})

const countries = ref([
  { label: 'Viet Nam' },
  { label: 'Spain' },
  { label: 'France' },
  { label: 'England' }
])

const customElementsForm = reactive({
  checkbox: ['lorem'],
  radio: 'one',
  switch: ['one'],
  file: null
})

const flashMessage = useFlashMessage()

const submit = () => {
  flashMessage.fire('Save successfully!')
}

const breadcrumbs = ref([{ name: 'Dashboard', link_to: '/dashboard' }, { name: 'Sample form' }])
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <Breadcrumb :items="breadcrumbs" title="Sample form" :icon="mdiSquareEditOutline" />

      <CardBox>
        <FormField label="Fullname">
          <FormControl v-model="form.name" />
        </FormField>

        <FormField label="Email">
          <FormControl v-model="form.email" type="email" />
        </FormField>

        <FormField label="Phone" help="Do not enter the leading zero">
          <FormControl v-model="form.phone" type="tel" placeholder="Your phone number" />
        </FormField>

        <FormField label="Address">
          <FormControl v-model="form.address" />
        </FormField>

        <FormField label="Country">
          <FormControl v-model="form.country" type="select" :options="countries" />
        </FormField>

        <FormField label="Textarea">
          <FormControl v-model="form.textarea" type="textarea" />
        </FormField>

        <FormField label="Editor ">
          <VueQuillEditor v-model="form.editor" />
        </FormField>

        <FormField label="Gender">
          <FormCheckRadioGroup
            v-model="form.gender"
            name="gender"
            type="radio"
            :options="{
              one: 'Male',
              two: 'Female',
              three: 'Other'
            }"
          />
        </FormField>

        <FormField label="Avatar">
          <FormFilePicker v-model="customElementsForm.file" label="Upload" />
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Submit" @click="submit()" />
            <BaseButton type="reset" color="info" outline label="Reset" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

```
## In FormField
``` copy
<script setup>
import { computed, useSlots } from 'vue'

defineProps({
  label: {
    type: String,
    default: null
  },
  labelFor: {
    type: String,
    default: null
  },
  help: {
    type: String,
    default: null
  }
})

const slots = useSlots()

const wrapperClass = computed(() => {
  const base = []
  const slotsLength = slots.default().length

  if (slotsLength > 1) {
    base.push('grid grid-cols-1 gap-3')
  }

  if (slotsLength === 2) {
    base.push('md:grid-cols-2')
  }

  return base
})
</script>

<template>
  <div class="mb-6 last:mb-0">
    <label v-if="label" :for="labelFor" class="block font-medium mb-2 text-gray-800">{{
      label
    }}</label>
    <div :class="wrapperClass">
      <slot />
    </div>
    <div v-if="help" class="text-xs text-gray-500 dark:text-slate-400 mt-1">
      {{ help }}
    </div>
  </div>
</template>

```

## In FormControl
``` copy
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
      class="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
      @click="handleClear"
    >
  <BaseIcon :path="mdiClose" :width="13" :height="13" />
</span>
  </div>
</template>

```

## In FormCheckRadioGroup
``` copy
<script setup>
import { computed, defineEmits } from 'vue'
import FormCheckRadio from '@/components/Forms/FormCheckRadio.vue'

const props = defineProps({
  options: {
    type: Object,
    default: () => {}
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'checkbox',
    validator: (value) => ['checkbox', 'radio', 'switch'].includes(value)
  },
  componentClass: {
    type: String,
    default: null
  },
  isColumn: Boolean,
  modelValue: {
    type: [Array, String, Number, Boolean],
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="flex justify-start flex-wrap -mb-3" :class="{ 'flex-col': isColumn }">
    <FormCheckRadio
      v-for="(value, key) in options"
      :key="key"
      v-model="computedValue"
      :type="type"
      :name="name"
      :input-value="key"
      :label="value"
      :class="componentClass"
      class="mr-6 mb-3 last:mr-0"
    />
  </div>
</template>

```

## In FormFilePicker 
``` copy
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

## In BaseButton
``` copy
<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getButtonColor } from '@/configs/colors'
import BaseIcon from '@/components/Icons/BaseIcon.vue'

const props = defineProps({
  label: {
    type: [String, Number],
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  iconSize: {
    type: [String, Number],
    default: 22
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  type: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: 'white'
  },
  as: {
    type: String,
    default: null
  },
  small: Boolean,
  outline: Boolean,
  active: Boolean,
  disabled: Boolean,
  roundedFull: Boolean
})

const is = computed(() => {
  if (props.as) {
    return props.as
  }

  if (props.to) {
    return RouterLink
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const computedType = computed(() => {
  if (is.value === 'button') {
    return props.type ?? 'button'
  }

  return null
})

const labelClass = computed(() => (props.small && props.icon ? 'px-1' : 'px-2'))

const componentClass = computed(() => {
  const base = [
    'inline-flex',
    'justify-center',
    'items-center',
    'whitespace-nowrap',
    'focus:outline-none',
    'transition-colors',
    'duration-150',
    props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    props.roundedFull ? 'rounded-full' : 'rounded',
    getButtonColor(props.color, props.outline, !props.disabled, props.active)
  ]

  if (!props.label && props.icon) {
    base.push('p-1')
  } else if (props.small) {
    base.push('text-sm', props.roundedFull ? 'px-3 py-1' : 'p-1')
  } else {
    base.push('py-2', props.roundedFull ? 'px-6' : 'px-3')
  }

  if (props.disabled) {
    base.push(props.outline ? 'opacity-50' : 'opacity-70')
  }

  return base
})
</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    :href="href"
    :type="computedType"
    :to="to"
    :target="target"
    :disabled="disabled"
  >
    <BaseIcon v-if="icon" :path="icon" :size="iconSize" />
    <span v-if="label" :class="labelClass">{{ label }}</span>
  </component>
</template>

```




