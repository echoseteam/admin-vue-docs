# Car-box Component
The Card-box Component is a versatile UI element in Vue 3, designed to display important information or statistics in a compact and visually appealing card format.

## Features
- Flexible display with icon, number, and label
- Customizable trend indicator
- Optional settings button for additional actions
- Color customization for icon and text
- Responsive layout using BaseLevel component
- Integration with Material Design Icons
- Dark mode support
- Prop-based configuration for easy customization
- Ability to append additional numbers or text
## Example
![Car box Screenshot](/images/car-box.png)

## Usage
``` vue
<script setup>
import { mdiCog } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import BaseIcon from '@/components/Icons/BaseIcon.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import PillTagTrend from '@/components/PillTagTrend.vue'
import BaseButton from '@/components/Forms/BaseButton.vue'

defineProps({
  number: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: null
  },
  prefix: {
    type: String,
    default: null
  },
  suffix: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null
  },
  trend: {
    type: String,
    default: null
  },
  trendType: {
    type: String,
    default: null
  },
  showSetting: {
    type: Boolean,
    default: false
  },
  appendedNumber: {
    type: [Number, String],
    default: 0
  }
})
</script>

<template>
  <CardBox>
    <BaseLevel v-if="trend" class="mb-3" mobile>
      <PillTagTrend :trend="trend" :trend-type="trendType" small />
      <BaseButton
        v-if="showSetting"
        :icon="mdiCog"
        icon-w="w-4"
        icon-h="h-4"
        color="lightDark"
        small
      />
    </BaseLevel>
    <BaseLevel mobile>
      <div>
        <h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400">
          {{ label }}
        </h3>
        <span class="text-2xl ml-1">{{ appendedNumber }}</span>
      </div>
      <BaseIcon v-if="icon" :path="icon" size="48" w="" h="h-16" :class="color" />
    </BaseLevel>
  </CardBox>
</template>

```