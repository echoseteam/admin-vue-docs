# Input Component

## Base usage
![Input Screenshot](/images/input.png)

``` vue
<script setup>
import FormField from '@/components/Forms/FormField.vue'
import FormControl from '@/components/Forms/FormControl.vue'
</script>

<FormField label="Fullname">
  <FormControl v-model="form.name" />
</FormField>

```

## Clearable​
Make the Input clearable with the clearable attribute
![Clearable Screenshot](/images/clearable.png)
``` vue
<script setup>
import { ref } from 'vue'
import FormField from '@/components/Forms/FormField.vue'
import FormControl from '@/components/Forms/FormControl.vue'
const searchQuery = ref('')

const handleClear = () => {
  searchQuery.value = ''
}
</script>

<template>
  <FormField>
    <FormControl
      v-model="searchQuery"
      :icon="mdiMagnify"
      placeholder="Search..."
      clearable
      @clear="handleClear" />
  </FormField>
</template>

```

## Date

![Input date Screenshot](/images/input_date.png)
``` vue
<script setup>
import FormField from '@/components/Forms/FormField.vue'
import FormControl from '@/components/Forms/FormControl.vue'
</script>

<FormField label="Start date" class="flex-1">
  <FormControl v-model="form.start_date" type="date" />
</FormField>
<FormField label="Due date" class="flex-1">
  <FormControl v-model="form.due_date" type="date" />
</FormField>

```

## Editor

![Description date Screenshot](/images/input_description.png)

``` vue
<script setup>
import FormField from '@/components/Forms/FormField.vue'
import Editor from '@/components/Forms/VueQuillEditor.vue'
</script>

<FormField label="Description">
  <Editor v-model="form.description" />
</FormField>

```

## Select

![Select date Screenshot](/images/select.png)

``` vue
<script setup>
import FormField from '@/components/Forms/FormField.vue'
import Editor from '@/components/Forms/VueQuillEditor.vue'
</script>

<FormField label="Assign to">
  <FormControl
    v-model="form.assign_to"
    :options="assignOptions"
    type="select"
    placeholder="Select assignee"
  >
    <option value="">Select assignee</option>
    <option v-for="option in assignOptions" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </FormControl>
</FormField>

```

## API

### Attributes

| Attribute      | Description                                                                                     | Type                  | Accepted Values                           | Default |
|----------------|-------------------------------------------------------------------------------------------------|----------------------|--------------------------------------------|---------|
| v-model        | Binding value                                                                                   | string / number      | —                                          | —       |
| type           | Type of input                                                                                   | string               | text, textarea, number, email, password, tel, date, select | text    |
| placeholder    | Placeholder of input                                                                            | string               | —                                          | —       |
| clearable      | Whether to show clear button                                                                    | boolean              | —                                          | false   |
| disabled       | Whether the input is disabled                                                                   | boolean              | —                                          | false   |
| size           | Size of input                                                                                   | string               | large/medium/small                         | —       |
| icon           | Icon component                                                                                  | string / Component   | —                                          | —       |
| name           | Same as native input's `name`                                                                   | string               | —                                          | —       |
| max            | Same as native input's `max`                                                                    | —                    | —                                          | —       |
| min            | Same as native input's `min`                                                                    | —                    | —                                          | —       |
| step           | Same as native input's `step`                                                                   | —                    | —                                          | —       |
| readonly       | Same as native input's `readonly`                                                               | boolean              | —                                          | false   |
| autofocus      | Same as native input's `autofocus`                                                              | boolean              | —                                          | false   |
| form           | Same as native input's `form`                                                                   | string               | —                                          | —       |
| options        | Options for select type (array of objects with value and label properties)                      | array                | —                                          | —       |

### Events

| Event Name | Description                                                  | Parameters                |
|------------|--------------------------------------------------------------|---------------------------|
| blur       | Triggers when Input blurs                                    | (event: Event)            |
| focus      | Triggers when Input focuses                                  | (event: Event)            |
| change     | Triggers when the input value changes                        | (value: string \| number) |
| input      | Triggers when the input value changes                        | (value: string \| number) |
| clear      | Triggers when the clear button is clicked                    | —                         |

### Slots

| Name    | Description                              |
|---------|------------------------------------------|
| prefix  | Content to prepend before the input      |
| suffix  | Content to append after the input        |
| default | Default slot for select options          |