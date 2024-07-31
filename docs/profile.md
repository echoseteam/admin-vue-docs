# Profile Layout
The Profile Layout component is a comprehensive and responsive profile management interface for Vue 3 applications. It combines user information display with editable form fields, providing a seamless user experience for viewing and updating profile details.

## Features
- Two-column grid layout, collapsing to single column on mobile devices
- User profile card with avatar, name, and status information
- Editable profile form with various input types
- Real-time data binding with Vuex store integration
- Breadcrumb navigation for easy site traversal
- Avatar upload functionality
- Responsive design with adaptable layout
- Dark mode support (implied through the use of utility classes)
- Verification status display and notifications toggle
- Form submission handling with update functionality

## Example
![Profile Screenshot](/images/profile.png)

## Usage
``` vue
<script setup>
import { reactive, watch, ref } from 'vue'
import { useMainStore } from '@/stores/index'
import { mdiAccount, mdiCheckDecagram } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormField from '@/components/Forms/FormField.vue'
import FormControl from '@/components/Forms/FormControl.vue'
import BaseButton from '@/components/Forms/BaseButton.vue'
import BaseButtons from '@/components/Forms/BaseButtons.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import UserAvatarCurrentUser from '@/components/UserAvatarCurrentUser.vue'
import PillTag from '@/components/PillTag.vue'
import FormCheckRadio from '@/components/Forms/FormCheckRadio.vue'

const mainStore = useMainStore()

const profileForm = reactive({
  name: mainStore.userName,
  email: mainStore.userEmail,
  phone: '',
  address: ''
})

const breadcrumbs = ref([{ name: 'Dashboard', link_to: '/dashboard' }, { name: 'Your profile' }])

const submitProfile = () => {
  mainStore.setUser(profileForm)
}

const uploadedAvatar = ref(null)

watch(uploadedAvatar, (newFile) => {
  if (newFile) {
    console.log('New avtar uploaded: ', newFile)
  }
})
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <Breadcrumb :items="breadcrumbs" title="Profile" :icon="mdiAccount" />
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <CardBox class="col-span-1">
          <div class="text-center">
            <UserAvatarCurrentUser class="lg:mx-12 f" />
            <h2 class="text-2xl p-2">{{ profileForm.name }}</h2>
            <p>Last login <b>15 mins ago</b></p>
            <div class="flex justify-center mt-2">
              <PillTag class="mr-3" label="Verified" color="info" :icon="mdiCheckDecagram" />
              <FormCheckRadio
                name="notifications-switch"
                type="switch"
                label="Notifications"
                :input-value="true"
              />
            </div>
          </div>
        </CardBox>
        <CardBox class="col-span-2" is-form @submit.prevent="submitProfile">
          <FormField label="Name" help="Required. Your name">
            <FormControl v-model="profileForm.name" name="username" autocomplete="username" />
          </FormField>

          <FormField label="E-mail" help="Required. Your e-mail">
            <FormControl
              v-model="profileForm.email"
              type="email"
              name="email"
              autocomplete="email"
            />
          </FormField>

          <FormField label="Your phone">
            <FormControl
              v-model="profileForm.phone"
              type="email"
              name="email"
              autocomplete="email"
            />
          </FormField>

          <FormField label="Address">
            <FormControl v-model="profileForm.address" type="text" name="address" />
          </FormField>

          <FormField label="Bio">
            <FormControl type="textarea" />
          </FormField>

          <template #footer>
            <BaseButtons>
              <BaseButton color="info" type="submit" label="Update" />
            </BaseButtons>
          </template>
        </CardBox>
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>


```