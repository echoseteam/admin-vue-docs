# Table Component

## Base table
![Table Screenshot](/images/table.png)

``` vue
<template>
  <EchoseTable
    :items="paginatedProducts"
    :headers="tableColumns"
    checkbox
    class="w-full min-w-full"
    @sort-change="sortChange"
  >
    <template #action="{ item }">
      <BaseButtons type="justify-start lg:justify-end" no-wrap>
        <BaseButton
          color="default"
          :icon="mdiSquareEditOutline"
          small
        />
        <BaseButton
          color="danger"
          :icon="mdiTrashCan"
          icon-size="18"
          small
          @click="handleDeleteClick(item.id)"
        />
      </BaseButtons>
    </template>
    <template #image="{ item }">
      <div class="text-center">
        <Image :src="item.image" class="w-10 h-10" />
      </div>
    </template>
    <template #price="{ item }"> ${{ item.price.toFixed(2) }} </template>
  </EchoseTable>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import EchoseTable from '@/components/Tables/Table.vue'
  import Image from '@/components/Image.vue'
</script>
```

## Table width checkall
![Checkall Screenshot](/images/checkall.png)

``` vue
<template>
  <EchoseTable
    :items="paginatedProducts"
    :headers="tableColumns"
    checkbox
    class="w-full min-w-full"
    @sort-change="sortChange"
  >
</template>

<script setup>
  import EchoseTable from '@/components/Tables/Table.vue'
</script>

```

## Sorting
![Sort Screenshot](/images/sort.png)

``` vue
<template>
  <EchoseTable
    :items="paginatedProducts"
    :headers="tableColumns"
    checkbox
    class="w-full min-w-full"
    @sort-change="sortChange"
  >
</template>

<script setup>
  import EchoseTable from '@/components/Tables/Table.vue'

  const sortChange = (event) => {
    if (event.sort) {
      sortArrayByKey(users.value, event.column, event.sort)
      return
    }

    users.value = JSON.parse(JSON.stringify(SampleUserData))
  }
</script>

```
## API
### Attributes

| Attribute | Description | Type | Accepted Values | Default |
|-----------|-------------|------|-----------------|---------|
| items | Data to be displayed in the table | array | — | — |
| headers | Column definitions for the table | array | — | — |
| checkbox | Whether to display checkboxes for row selection | boolean | — | false |
| class | CSS classes to apply to the table | string | — | — |

### Events

| Event Name | Description | Parameters |
|------------|-------------|------------|
| sort-change | Triggers when sorting changes | { column: string, sort: 'asc'/'desc'/null } |

### Slots

| Name | Description | Slot Props |
|------|-------------|------------|
| action | Custom content for action column | { item } |
| image | Custom content for image column | { item } |
| [column-name] | Custom content for specific columns | { item } |

