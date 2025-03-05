# Register Layout

## Base Usage
![Register Screenshot](/images/register.png)
``` vue
<template>
  <div class="flex justify-evely min-h-screen">
    <div class="hidden md:block w-1/2 relative">
      <Image
        class="absolute inset-0 w-full h-full object-cover object-center"
        src="/src/assets/img/auth-register.png"
        alt=""
      ></Image>
    </div>
    <div class="w-full md:w-1/2 flex items-center justify-center px-4 min-h-screen">
      <CardBox class="w-full" :class="cardClass" is-form @submit.prevent="submit">
        <div class="m-2 w-full">
          <h2 class="text-2xl font-bold mb-6 text-center">Register New Account</h2>

          <p class="text-center mb-5">
            Have an account?
            <RouterLink to="/login" class="text-blue-600 hover:underline">Sign In</RouterLink>
          </p>
        </div>

        <FormField label="Name">
          <FormControl v-model="form.name" type="text" name="name" />
        </FormField>

        <FormField label="Email" help="Please enter your email">
          <FormControl v-model="form.email" name="login" autocomplete="username" />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="form.pass"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <p class="text-left text-sm text-gray-600 mt-4 flex items-center">
          <FormCheckRadio
            name="notifications-switch"
            type="checkbox"
            label="You agree to our"
            :input-value="true"
          />
          <a href="#" class="text-blue-600 hover:underline">Terms of Service</a>
        </p>

        <div
          class="mt-4 flex flex-col md:flex-row md:justify-between lg:flex-row space-y-4 md:space-y-0 md:space-x-4"
        >
          <BaseButton to="/dashboard" color="danger" label="Back" class="flex-1" />
          <BaseButton type="submit" color="info" label="Submit" class="flex-1" />
        </div>

        <div class="mt-2">
          <p class="text-center text-sm text-gray-600 mb-4">Or create an account using:</p>
          <div
            class="mt-4 flex flex-col md:flex-row md:justify-between lg:flex-row space-y-4 md:space-y-0 md:space-x-4"
          >
            <button
              class="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <img src="/src/assets/img/google.ico" alt="Google logo" class="h-5 w-5 mr-2" />
              Continue with Google
            </button>
            <button
              class="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <img src="/src/assets/img/facebook.png" alt="Facebook logo" class="h-5 w-5 mr-2" />
              Continue with Facebook
            </button>
          </div>
        </div>
      </CardBox>
    </div>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import CardBox from '@/components/CardBox.vue'
  import FormField from '@/components/Forms/FormField.vue'
  import FormControl from '@/components/Forms/FormControl.vue'
  import BaseButton from '@/components/Forms/BaseButton.vue'
  import Image from '@/components/Image.vue'
  import FormCheckRadio from '@/components/Forms/FormCheckRadio.vue'

  const form = reactive({
    email: ''
  })

  const router = useRouter()
  const submit = () => {
    router.push('/dashboard')
  }

  const cardClass = ref('default-class')
</script>
```