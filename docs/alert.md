# Alert Component

## Base usage
![Alert Screenshot](/images/alert1.png)

``` vue
<template>
  <AlertMessage type="info" :icon="mdiInformationSlabCircle">
    <strong>info!</strong> Sample alert message type info
  </AlertMessage>

  <AlertMessage type="warning" :icon="mdiAlert  ">
    <strong>warning!</strong> Sample alert message type warning
  </AlertMessage>

  <AlertMessage type="danger" :icon="mdiAlertCircle">
    <strong>danger!</strong> Sample alert message type danger
  </AlertMessage>

  <AlertMessage type="success" :icon="mdiCheckCircle ">
    <strong>success!</strong> Sample alert message type success
  </AlertMessage>

  <AlertMessage type="contrast" :icon="mdiMonitorCellphone">
    <strong>contrast!</strong> Sample alert message type contrast
  </AlertMessage>
</template>

<script setup>
  import AlertMessage from '@/components/Notifications/AlertMessage.vue'
  import {
          mdiMonitorCellphone,
          mdiAlert,
          mdiAlertCircle,
          mdiCheckCircle,
        } from '@mdi/js'
</script>

```

## With Icon and Description
![Alert Screenshot](/images/alert1.png)

``` vue
<template>
  <AlertMessage type="info" :icon="mdiInformationSlabCircle">
    <strong>info!</strong> Sample alert message type info
  </AlertMessage>

  <AlertMessage type="warning" :icon="mdiAlert  ">
    <strong>warning!</strong> Sample alert message type warning
  </AlertMessage>

  <AlertMessage type="danger" :icon="mdiAlertCircle">
    <strong>danger!</strong> Sample alert message type danger
  </AlertMessage>

  <AlertMessage type="success" :icon="mdiCheckCircle ">
    <strong>success!</strong> Sample alert message type success
  </AlertMessage>

  <AlertMessage type="contrast" :icon="mdiMonitorCellphone">
    <strong>contrast!</strong> Sample alert message type contrast
  </AlertMessage>
</template>

<script setup>
  import AlertMessage from '@/components/Notifications/AlertMessage.vue'
  import {
          mdiMonitorCellphone,
          mdiAlert,
          mdiAlertCircle,
          mdiCheckCircle,
        } from '@mdi/js'
</script>

```

## API

### Attributes

| Attribute | Description | Type | Accepted Values | Default |
|-----------|-------------|------|-----------------|---------|
| type | The type of alert | string | 'info', 'warning', 'danger', 'success', 'contrast' | 'info' |
| icon | The icon to display in the alert | string | Any valid MDI icon path | — |

### Slots

| Name | Description |
|------|-------------|
| default | The content of the alert message |

### Events

| Event Name | Description | Parameters |
|------------|-------------|------------|
| close | Triggers when the alert is closed (if closable) | — |

### CSS Classes

| Class | Description |
|-------|-------------|
| .alert-info | Applies styling for info type alerts |
| .alert-warning | Applies styling for warning type alerts |
| .alert-danger | Applies styling for danger type alerts |
| .alert-success | Applies styling for success type alerts |
| .alert-contrast | Applies styling for contrast type alerts |
