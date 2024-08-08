# Confirm Component

## Base usage
![Confirm Screenshot](/images/confirm1.png)

``` vue
<script setup>
import BaseButton from '@/components/Forms/BaseButton.vue'
import { EchoseAlert } from '@/plugins/EchoseAlert'

const handleConfirmClick = () => {
  EchoseAlert.fire({
    title:
      'Product deletion process: Store ID, display confirmation dialog, and call delete function upon user approval',
    showCancelButton: true
  }).then(() => {})
}
</script>

<template>
  <BaseButton color="info" label="Confirm message" outline @click="handleConfirmClick"/>
</template>

```
## Destroy on Close
![Confirm Screenshot](/images/confirm1.png)

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
  <BaseButton color="info" label="Notice message" outline @click="handleConfirmClick"/>
</template>

```

## API

### Attributes

| Attribute | Description | Type | Accepted Values | Default |
|-----------|-------------|------|-----------------|---------|
| title | The main message of the confirmation dialog | string | — | — |
| text | Additional text below the title | string | — | — |
| icon | Icon to display | string | 'success', 'error', 'warning', 'info', 'question' | — |
| showCancelButton | Whether to show a cancel button | boolean | — | false |
| confirmButtonText | Text for the confirm button | string | — | 'OK' |
| cancelButtonText | Text for the cancel button | string | — | 'Cancel' |
| confirmButtonColor | Color of the confirm button | string | — | — |
| cancelButtonColor | Color of the cancel button | string | — | — |

### Events

| Event Name | Description | Parameters |
|------------|-------------|------------|
| confirm | Triggered when the confirm button is clicked | — |
| cancel | Triggered when the cancel button is clicked | — |
| close | Triggered when the dialog is closed (by clicking outside or pressing ESC) | — |

### Slots

| Name | Description |
|------|-------------|
| default | Custom content for the confirmation dialog body |
| title | Custom content for the dialog title |
| actions | Custom content for the action buttons area |