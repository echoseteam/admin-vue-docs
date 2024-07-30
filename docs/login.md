# Login Layout

## Base Usage
![Login Screenshot](/images/login.png)
``` vue
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/Forms/FormCheckRadio.vue'
import FormField from '@/components/Forms/FormField.vue'
import FormControl from '@/components/Forms/FormControl.vue'
import BaseButton from '@/components/Forms/BaseButton.vue'
import BaseButtons from '@/components/Forms/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import { RouterLink } from 'vue-router'

const form = reactive({
  login: 'john.doe',
  pass: 'highly-secure-password-fYjUw-',
  remember: true
})
const router = useRouter()
const submit = () => {
  router.push('/dashboard')
}
</script>

<template>
  <LayoutGuest>
    <div class="flex flex-col md:flex-row min-h-screen">
      <SectionFullScreen class="w-full 2xl:w-4/5 w-5/5 p-4 md:p-2 overflow-y-auto">
        <CardBox class="w-full md:3/4 max-w-[89%] mx-auto" is-form @submit.prevent="submit">
          <div class="flex items-center flex-col mb-6">
            <h4 class="font-bold text-xl md:text-2xl">Welcome Back</h4>
            <span class="text-sm md:text-base">Please Sign In to continue</span>
          </div>
          <FormField label="Email" help="Please enter your login" class="mb-4">
            <FormControl v-model="form.login" name="Email" autocomplete="username" />
          </FormField>
          <FormField label="Password" help="Please enter your password" class="mb-4">
            <FormControl
              v-model="form.pass"
              type="password"
              name="password"
              autocomplete="current-password"
            />
          </FormField>
          <div class="flex flex-wrap justify-between items-center mb-4">
            <FormCheckRadio
              v-model="form.remember"
              name="remember"
              label="Remember"
              :input-value="true"
            />
            <RouterLink class="text-blue-600 hover:underline mt-2 md:mt-0" to="/forgot-password"
              >Forgot Password</RouterLink
            >
          </div>
          <BaseButtons>
            <BaseButton class="w-full" type="submit" color="info" label="Login" />
          </BaseButtons>
          <div class="mt-4 text-center">
            <span class="text-sm">Not a member?</span>
            <RouterLink class="text-blue-600 hover:underline ml-1 text-sm" to="/register"
              >Register Now</RouterLink
            >
          </div>
        </CardBox>
      </SectionFullScreen>
      <div class="xm:hidden xs:hidden relative">
        <img src="/src/assets/img/login.png" class="h-full hidden xl:block object-cover" />

        <div class="absolute top-4 w-full hidden xl:flex items-center cursor-pointer">
          <svg
            width="42"
            height="22"
            viewBox="0 0 32 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
              fill="#7367F0"
            ></path>
            <path
              opacity="0.06"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
              fill="#161616"
            ></path>
            <path
              opacity="0.06"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
              fill="#161616"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
              fill="#7367F0"
            ></path>
          </svg>
          <span class="font-bold text-lg ml-2 text-bold">Text Echose Admin</span>
        </div>
      </div>
    </div>
  </LayoutGuest>
</template>

```