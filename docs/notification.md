# Notification Component

## Base usage
![Notifile Screenshot](/images/notifile.png)

``` vue
<script setup>
import BaseButton from '@/components/Forms/BaseButton.vue'
import { EchoseAlert } from '@/plugins/EchoseAlert '

const handleConfirmClick = () => {
  EchoseAlert.fire({
    title:
      'Product deletion process: Store ID, display confirmation dialog, and call delete function upon user approval',
    showCancelButton: true
  }).then(() => {})
}
</script>

<template>
  <BaseButton color="info" label="Confirm message" outline @click="handleConfirmClick" />
</template>

```
## With offset
![Notice Screenshot](/images/notice.png)

``` vue
<script setup>
import BaseButton from '@/components/Forms/BaseButton.vue'
import { EchoseAlert } from '@/plugins/EchoseAlert'
import { useFlashMessage } from '@/plugins/FlashMessage'

const flashMessage = useFlashMessage()

const showFlashMessage = () => {
  flashMessage.fire('This is a flash message!', 'warning')
}

const handleConfirmClick = () => {
  EchoseAlert.fire({
    title:
      'Product deletion process: Store ID, display confirmation dialog, and call delete function upon user approval',
    showCancelButton: true
  }).then(() => {})
}
</script>

<template>
  <BaseButton color="info" label="Notice message" outline @click="handleConfirmClick" />
</template>

```

## API

### Options

| Option | Description | Type | Accepted Values | Default |
|--------|-------------|------|-----------------|---------|
| title | The main message of the notification | string | — | — |
| type | The type of notification | string | 'success', 'warning', 'info', 'error' | 'info' |
| duration | How long the notification stays visible (in milliseconds) | number | — | 3000 |
| position | Position of the notification on the screen | string | 'top-right', 'top-left', 'bottom-right', 'bottom-left' | 'top-right' |
| showCloseButton | Whether to show a close button | boolean | — | true |
| showCancelButton | Whether to show a cancel button (for confirmations) | boolean | — | false |
| cancelButtonText | Text for the cancel button | string | — | 'Cancel' |
| confirmButtonText | Text for the confirm button | string | — | 'OK' |

### Methods

| Method | Description | Parameters | Return |
|--------|-------------|------------|--------|
| fire | Display a notification | (message: string, type?: string, options?: Object) | Promise |
| success | Display a success notification | (message: string, options?: Object) | Promise |
| warning | Display a warning notification | (message: string, options?: Object) | Promise |
| info | Display an info notification | (message: string, options?: Object) | Promise |
| error | Display an error notification | (message: string, options?: Object) | Promise |
| confirm | Display a confirmation dialog | (message: string, options?: Object) | Promise |
| close | Close all notifications | — | void |
