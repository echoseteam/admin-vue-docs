# Image Component

## Base usage
![Image Screenshot](/images/img1.png)

``` vue
<script setup>
import { reactive } from 'vue'
import FormFilePicker from '@/components/Forms/FormFilePicker.vue'
import FormField from '@/components/Forms/FormField.vue'

const customElementsForm = reactive({
  checkbox: ['lorem'],
  radio: 'one',
  switch: ['one'],
  file: null
})
</script>

<FormField label="Avatar">
  <FormFilePicker v-model="customElementsForm.file" label="Upload" />
</FormField>

```

## Image Preview
![Image-1 Screenshot](/images/img2.png)

``` vue
<script setup>
import { reactive } from 'vue'
import FormFilePicker from '@/components/Forms/FormFilePicker.vue'
import FormField from '@/components/Forms/FormField.vue'

const customElementsForm = reactive({
  checkbox: ['lorem'],
  radio: 'one',
  switch: ['one'],
  file: null
})
</script>

<FormField label="Avatar">
  <FormFilePicker v-model="customElementsForm.file" label="Upload" />
</FormField>

```