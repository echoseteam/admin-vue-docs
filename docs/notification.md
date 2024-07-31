# Notification Component
The Notification Component provides a versatile system for displaying alerts and notifications in Vue 3 applications.

## Features
- Multiple alert types (info, warning, danger, success, contrast)
- Customizable icons for alerts
- Flash messages for temporary notifications
- Confirmation dialogs
- Integration with Material Design Icons
- Responsive layout
- Breadcrumb navigation
- Vue 3 Composition API compatibility
- Custom utility functions for easy usage

## Example
![Notification Screenshot](/images/notification.png)

## Usage

``` vue
<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import CardBox from '@/components/CardBox.vue'
import BaseButton from '@/components/Forms/BaseButton.vue'
import AlertMessage from '@/components/Notifications/AlertMessage.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import { mdiNotificationClearAll,
        mdiMonitorCellphone,
        mdiInformationSlabCircle,
        mdiAlert,
        mdiAlertCircle,
        mdiCheckCircle,
      } from '@mdi/js'
import { ref } from 'vue'
import { useFlashMessage } from '@/utils/flashMessage'
import { EchoseAlert } from '@/plugins/EchoseAlert '

const breadcrumbs = ref([{ name: 'Dashboard', link_to: '/' }, { name: 'Components' }])

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
  <LayoutAuthenticated>
    <SectionMain>
      <Breadcrumb :items="breadcrumbs" :icon="mdiNotificationClearAll" title="Notifications" />

      <CardBox>
        <SectionTitleLineWithButton title="Alerts message" />

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
      </CardBox>

      <CardBox class="mt-5">
        <SectionTitleLineWithButton title="Dialogs message" />

        <BaseButton color="info" label="Confirm message" outline @click="handleConfirmClick" />
        <BaseButton
          type="reset"
          color="info"
          label="Notice message"
          outline
          @click="showFlashMessage"
        />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

```