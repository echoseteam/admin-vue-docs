
# Components


## Flash

![Flash Screenshot](/images/flash.png)
``` copy
<template>
  <div
    :class="[
      'fixed top-5 right-5 p-4 rounded-md shadow-md text-white font-bold z-50 transition-opacity duration-1000',
      messageTypeClasses,
      isVisible ? 'opacity-1' : 'opacity-0'
    ]"
  >
    {{ message }}
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue'
import { useFlashMessage } from '@/utils/flashMessage'

export default {
  setup() {
    const flashMessage = useFlashMessage()
    const isVisible = ref(false)
    const message = ref('')
    const messageType = ref('')

    const messageTypeClasses = computed(() => {
      switch (messageType.value) {
        case 'success':
          return 'bg-green-500'
        case 'error':
          return 'bg-red-500'
        case 'warning':
          return 'bg-yellow-500'
        case 'info':
          return 'bg-blue-500'
        default:
          return 'bg-gray-500'
      }
    })

    const showFlashMessage = (msg, type) => {
      message.value = msg
      messageType.value = type
      isVisible.value = true
      setTimeout(() => {
        isVisible.value = false
      }, 2000)
    }

    watch(
      () => flashMessage.message,
      (newMessage) => {
        if (newMessage) {
          showFlashMessage(newMessage, flashMessage.type)
          flashMessage.clearFlashMessage()
        }
      }
    )

    onMounted(() => {
      if (flashMessage.message) {
        showFlashMessage(flashMessage.message, flashMessage.type)
        flashMessage.clearFlashMessage()
      }
    })

    return {
      isVisible,
      message,
      messageTypeClasses
    }
  }
}
</script>
```

## Alert
![Alert Screenshot](/images/alert.png)
``` copy
<script setup>
import { ref, computed, useSlots } from 'vue'
import { mdiClose } from '@mdi/js'
import { colorsBgLight, colorsOutline } from '@/configs/colors'
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
  }
})

const componentClass = computed(() =>
  props.outline ? colorsOutline[props.type] : colorsBgLight[props.type]
)

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
    :class="componentClass"
    class="px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150"
  >
    <BaseLevel>
      <div class="flex flex-col md:flex-row items-center">
        <BaseIcon
          v-if="icon"
          :path="icon"
          w="w-10 md:w-5"
          h="h-10 md:h-5"
          size="24"
          class="md:mr-2"
        />
        <span class="text-center md:text-left md:py-2"><slot /></span>
      </div>
      <slot v-if="hasRightSlot" name="right" />
      <BaseButton v-else :icon="mdiClose" small rounded-full color="white" @click="dismiss" />
    </BaseLevel>
  </div>
</template>

```





