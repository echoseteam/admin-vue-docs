# Alert Component

The Alert component is a versatile and customizable notification element for Vue 3 applications. It provides a visually appealing way to display important messages, warnings, or information to users.

## Features
- Multiple alert types with corresponding color schemes
- Outline and filled style options
- Customizable icon support
- Dismissible alerts with a close button
- Responsive design (adapts to mobile and desktop layouts)
- Optional right slot for custom content
- Border option for additional styling
- Smooth transition effects for color changes
- Accessibility-friendly with appropriate color contrasts
- Flexible content through default slot
- Integrates with other base components (BaseLevel, BaseIcon, BaseButton)

## Example
![Alert Screenshot](/images/alert.png)

## Usage

``` vue
<script setup>
import { ref, computed, useSlots } from 'vue'
import { mdiClose } from '@mdi/js'
import { colorsBg, colorsOutline, colorsText } from '@/configs/colors'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseIcon from '@/components/Icons/BaseIcon.vue'
import BaseButton from '@/components/Forms/BaseButton.vue'

const props = defineProps({
  outline: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: null
  },
  type: {
    type: String,
    required: true
  },
  border: {
    type: Boolean,
    default: false
  }
})

const componentClass = computed(() =>
  props.outline ? colorsOutline[props.type] : colorsBg[props.type]
)

const textColorClass = computed(() => colorsText[props.type])

const isDismissed = ref(false)

const dismiss = () => {
  isDismissed.value = true
}

const slots = useSlots()

const hasRightSlot = computed(() => slots.right)
</script>

<template>
  <div
    v-if="!isDismissed"
    :class="[componentClass, textColorClass]"
    class="px-3 py-6 md:py-3 mb-6 last:mb-0 rounded-lg transition-colors duration-150">
    <BaseLevel>
      <div class="flex flex-col md:flex-row items-center">
        <BaseIcon
          v-if="icon"
          :path="icon"
          w="w-10 md:w-5"
          h="h-10 md:h-5"
          size="24"
          class="md:mr-2"
          :class="textColorClass"
        />
        <span :class="textColorClass" class="text-center md:text-left md:py-2">
          <slot />
        </span>
      </div>
      <slot v-if="hasRightSlot" name="right" />
      <BaseButton v-else :icon="mdiClose" small rounded-full color="white" @click="dismiss" />
    </BaseLevel>
  </div>
</template>

```