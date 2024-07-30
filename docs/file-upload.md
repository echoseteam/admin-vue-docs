# Upload Component

## Base usage
![Upload Screenshot](/images/upload1.png)

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

## User Avatar
![Avatar Screenshot](/images/avatar.png)

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

## API

### Attributes

| Attribute | Description | Type | Accepted Values | Default |
|-----------|-------------|------|-----------------|---------|
| v-model | Binding value for the uploaded file | File or null | — | null |
| label | Text label for the upload button | string | — | "Upload" |
| accept | File types that the file input should accept | string | — | — |
| multiple | Whether to allow multiple file selection | boolean | — | false |
| disabled | Whether the file picker is disabled | boolean | — | false |

### Events

| Event Name | Description | Parameters |
|------------|-------------|------------|
| change | Triggers when a file is selected | File or FileList |
| error | Triggers when an error occurs during file selection | Error object |

### Slots

| Name | Description | Slot Props |
|------|-------------|------------|
| default | Custom content for the upload button | — |
| file-preview | Custom content for displaying selected file(s) | { file } |

### Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| reset | Clears the selected file(s) | — |
