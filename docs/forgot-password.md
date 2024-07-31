# Forgot Password Layout
The Forgot Password Layout component is a user-friendly interface for password recovery in Vue 3 applications. It provides a clean, simple design with a split-screen layout, focusing on the essential task of initiating a password reset.

## Features
- Responsive design with a two-column layout on extra-large screens, collapsing to single column on smaller screens
- Left side features a full-height background image (hidden on smaller screens)
- Right side contains the password reset form
- Clear instructions for the user on the password reset process
- Input field for email with proper autocomplete attribute
- Send Reset Link button for form submission
- Back to Login button for easy navigation to the login page
- Form validation and submission handling
- Integration with Vue Router for navigation
- Utilizes reusable components for consistent styling and functionality
- Centered content layout for better focus and readability
- Dark mode support (implied through the use of utility classes)
## Example
![Forgot Password Screenshot](/images/forgotpassword.png)

## Usage
``` vue
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import CardBox from '@/components/CardBox.vue'
import FormField from '@/components/Forms/FormField.vue'
import FormControl from '@/components/Forms/FormControl.vue'
import BaseButton from '@/components/Forms/BaseButton.vue'
import Image from '@/components/Image.vue'

const form = reactive({
  email: ''
})

const router = useRouter()
const submit = () => {
  router.push('/dashboard')
}
</script>
<template>
  <div class="flex min-h-screen">
    <div class="hidden xl:block xl:w-2/3 relative">
      <Image
        src="/src/assets/img/forgot-pass.png"
        alt=""
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
    <div class="flex w-full xl:w-1/2 bg-white">
      <div class="w-full max-w-[80%] mx-auto flex flex-col justify-center px-6 py-12">
        <CardBox class="w-full" is-form @submit.prevent="submit">
          <h2 class="text-2xl font-bold mb-6 text-center">Forgot Password?</h2>
          <p class="text-center mb-8">
            Enter your email and we'll send you instructions to reset your password
          </p>
          <FormField label="Email" help="Please enter your email">
            <FormControl v-model="form.email" class="w-120" name="login" autocomplete="username" />
          </FormField>
          <div class="mt-8 space-y-4">
            <BaseButton type="submit" color="info" label="Send Reset Link" class="w-full" />
            <BaseButton to="/login" color="danger" label="Back To Login" class="w-full" />
          </div>
        </CardBox>
      </div>
    </div>
  </div>
</template>

```