
# Components


## Tables
- This Table component is a flexible and customizable data table built with Vue.js. It offers features such as:
``` warning
1. Displaying tabular data with customizable columns and rows.
2. Support for column sorting (if configured).
3. Optional checkboxes for multi-row selection.
4. Ability to customize cell content through slots.
5. Responsive design with horizontal scrolling capability.
```
- To use this component:
``` warning
1. Define an array of headers containing information about the columns (name, label, width, etc.).
2. Provide an array of items containing the data to be displayed.
3. Optionally enable the checkbox feature by setting the checkbox prop to true.
4. Use the provided slots to customize the content of headers and data cells.
5. Listen to the sortChange event to handle sorting logic when a user clicks on a column header.
```
![Component Table Screenshot](/images/component_table.png)
``` copy
<template>
  <div class="bg-white w-full pr-1 scrollbar-style-1 overflow-x-auto overflow-y-hidden">
    <table class="w-full table-auto" :style="{ minWidth: tableMinWidth + 'px' }">
      <colgroup>
        <col width="40" />
      </colgroup>
      <colgroup>
        <col v-for="field in displayedFields" :width="field.width ?? widthEachFiled" />
      </colgroup>
      <thead>
        <tr ref="widthContentTable">
          <TableCheckboxCell v-if="checkbox" v-model:checked="isSelectedAll" type="th" />
          <th v-for="field in displayedFields">
            <slot :name="`head(${field.name})`" :field="field">
              <template v-if="field.sortable">
                <a
                  href="#"
                  @click.prevent="handleSort(field.name)"
                  class="inline-flex items-center"
                >
                  {{ field.label }}
                  <BaseIcon
                    :path="mdiUnfoldMoreHorizontal"
                    :size="20"
                    v-if="isShowIconSort(field.name)"
                  />
                  <BaseIcon
                    :path="mdiChevronUp"
                    :size="20"
                    v-if="isShowIconSort(field.name, sortAsc)"
                  />
                  <BaseIcon
                    :path="mdiChevronDown"
                    :size="20"
                    v-if="isShowIconSort(field.name, sortDesc)"
                  />
                </a>
              </template>
              <span v-else>{{ field.label }}</span>
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <TableCheckboxCell v-if="checkbox" :checked="isChecked(item.id)" />
          <template v-for="key in displayedFieldKeys">
            <Component :is="cellElement(key as string)">
              <slot
                :name="`${key}`"
                :value="format(item, key as string)"
                :item="item"
                :format="(k: string) => format(item, k)"
              >
                {{ format(item, key as string) }}
              </slot>
            </Component>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, PropType, onMounted, defineEmits } from 'vue'
import TableCheckboxCell from '@/components/Tables/TableCheckboxCell.vue'
import { mdiChevronUp, mdiChevronDown, mdiUnfoldMoreHorizontal } from '@mdi/js'
import BaseIcon from '../Icons/BaseIcon.vue'

interface TableHeader {
  name: string
  label: string
  format?: Function
  hidden?: boolean
  header?: boolean
  sortable?: boolean
  width?: number
}

interface TableItem {
  id: number
  [name: string]: unknown
}

const widthContentTable = ref('')
const widthEachFiled = ref(0)
const widthCurrentTable = computed(() => widthContentTable.value.offsetWidth - 40)
onMounted(() => {
  let totalWidth = 0

  const fieldsWithoutWidth = props.headers.filter((field) => !field.width)

  totalWidth = props.headers.reduce((sum, field) => {
    return sum + (field.width || 0)
  }, 0)

  if (fieldsWithoutWidth == 0) {
    widthEachFiled.value = Math.floor(widthCurrentTable.value / props.headers.length)
  } else {
    widthEachFiled.value = Math.floor(
      (widthCurrentTable.value - totalWidth) / fieldsWithoutWidth.length
    )
    if (widthEachFiled.value <= 80) {
      widthEachFiled.value = 80
    }
  }
})
const props = defineProps({
  headers: { type: Array as PropType<TableHeader[]>, default: () => [] },
  items: { type: Array as PropType<TableItem[]>, default: () => [] },
  caption: { type: String, default: null },
  checkbox: { type: Boolean, default: false },
  responsive: { type: Boolean, default: false }
})

const displayedFields = computed(() => props.headers.filter((i) => !i.hidden))

const displayedFieldKeys = computed(() => {
  return Object.entries(displayedFields.value).map(([_key, value]) => value.name)
})

const emits = defineEmits(['sortChange'])

const sortAsc = ref('asc')
const sortDesc = ref('desc')
const sortNone = ref('none')

const cellElement = (key: string) => {
  const field = props.headers.find((f) => f.name === key)
  return field && field.header ? 'th' : 'td'
}

const format = (item: TableItem, key: string) => {
  const field = props.headers.find((f) => f.name === key)
  return field && field.format ? field.format(item[key]) : item[key]
}

const isSelectedAll = ref(false)

watch(isSelectedAll, (newVal) => {
  props.items.forEach((item) => {
    item.checked = newVal
  })
})

const isChecked = (id: number) => {
  const item = props.items.find((item) => item.id === id)
  return item ? item.checked : false
}

// Logic change value and icon sort
const currentSort = ref({ column: '', sort: '' })

const isShowIconSort = (fieldName: string, type: string = 'none') => {
  if (type == sortNone.value) {
    return (
      currentSort.value.column != fieldName ||
      (!currentSort.value.sort && !currentSort.value.column)
    )
  }

  if (type == sortAsc.value) {
    return currentSort.value.sort === sortAsc.value && currentSort.value.column == fieldName
  }

  if (type == sortDesc.value) {
    return currentSort.value.sort === sortDesc.value && currentSort.value.column == fieldName
  }

  return false
}

const handleSort = (fieldName: string) => {
  let isFirstTimeSort =
    (!currentSort.value.column && !currentSort.value.sort) || fieldName != currentSort.value.column

  if (isFirstTimeSort) {
    currentSort.value.column = fieldName
    currentSort.value.sort = sortAsc.value
  } else {
    currentSort.value.column = currentSort.value.sort == sortAsc.value ? fieldName : ''
    currentSort.value.sort = currentSort.value.sort == sortAsc.value ? sortDesc.value : ''
  }

  emits('sortChange', currentSort.value)
}

const tableMinWidth = computed(() => {
  const totalWidth = props.headers.reduce((sum, field) => sum + (field.width || 100), 0);
  return Math.max(totalWidth, 1200);
});
</script>

```





