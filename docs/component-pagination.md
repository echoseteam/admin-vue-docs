
# Components


## Pagination
- This Pagination component is a flexible and feature-rich Vue.js component designed to handle pagination in your web applications. Here's what you need to know:
``` warning
1. Visual Appearance: As shown in the image, the component presents a series of numbered buttons, along with previous and next navigation buttons. It also includes ellipsis buttons for skipping multiple pages.

2. Key Features:

    - Customizable page count and current page
    - Responsive design with different size options (small, medium, large)
    - Dynamic page number display based on current page
    - Previous and Next buttons
    - Quick navigation buttons for jumping multiple pages

3. Usage: To use this component in your Vue application, import it and use it like this:
<Pagination 
  :total="100" 
  :per-page="10" 
  :current-page="1" 
  @change-page="handlePageChange"
/>

4. Props:

    - total: Total number of items (required)
    - size: Button size ('small', 'medium', 'large', default is 'small')
    - perPage: Items per page (default 10)
    - pageCount: Number of page buttons to show (minimum 4, default 3)
    - currentPage: Current active page (default 1)
    - pageStep: Number of pages to jump when using quick navigation (default 2)

5. Events:

    - change-page: Emitted when a page is selected, with the new page number as payload


6. Customization: The component uses Tailwind CSS classes for styling, making it easy to customize its appearance to match your application's design.
7. Accessibility: The component includes proper ARIA attributes for improved accessibility.
```
![Component Pagination Screenshot](/images/component_pagination.png)
``` copy
<script setup>
import { defineEmits, ref, computed } from 'vue'
import { HandleType } from '@/configs/pagination.ts'

const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
  size: {
    type: String,
    default: 'small' // medium | large
  },
  perPage: {
    type: Number,
    default: 10
  },
  pageCount: {
    type: Number,
    validator: (value) => value >= 4,
    default: 3
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageStep: {
    type: Number,
    default: 2
  }
})

const isPassPageCount = ref(props.pageCount >= 4 ? true : false)

let pageMiddle = (props.pageCount - 2) / 2

if (pageMiddle % 2 !== 0) {
  pageMiddle = Math.floor(pageMiddle)
}

const sizeClass = computed(() => {
  let className = ''

  switch (props.size) {
    case 'small':
      className = 'min-h-[38px] min-w-[38px]'
      break;
    case 'medium':
      className = 'min-h-[42px] min-w-[42px]'
      break;
    case 'large':
      className = 'min-h-[46px] min-w-[46px]'
      break;
  }

  return className
})

const handleShowHideButton = (page) => {
  if (isPassPageCount.value) {
    return (
      page > 1 &&
      (page <= props.currentPage + pageMiddle || page < props.pageCount) &&
      (page >= props.currentPage - pageMiddle || page >= props.total - props.pageCount + 1)
    )
  }

  return page > 1
}

const emits = defineEmits(['change-page'])

const changePage = (page) => {
  emits('change-page', page)
}

const handleNextPrePage = (handle) => {
  let newPage = props.currentPage

  switch (handle) {
    case HandleType.NEXT:
      if (newPage < props.total) {
        newPage++
      }
      break
    case HandleType.PRE:
      if (newPage > 1) {
        newPage--
      }
      break
    case HandleType.NEXT_STEP:
      newPage = Math.min(newPage + props.pageStep, props.total)
      break
    case HandleType.PRE_STEP:
      newPage = Math.max(newPage - props.pageStep, 1)
      break
  }

  return newPage
}
</script>

<template>
  <div class="flex items-center gap-x-1 pt-3 paginate">
    <a
      href="#"
      :disabled="currentPage == 1"
      class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center jusify-center bg-gray-200 hover:bg-gray-200 items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      :class="sizeClass"
      @click.prevent="changePage(handleNextPrePage('pre'))"
    >
      <svg
        class="flex-shrink-0 size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m15 18-6-6 6-6"></path>
      </svg>
      <span aria-hidden="true" class="sr-only">Previous</span>
    </a>

    <div class="flex items-center gap-x-1">
      <a
        href="#"
        class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
        :class="[
          { 'bg-blue-600 text-white': currentPage == 1, 'bg-gray-200': currentPage != 1 },
          sizeClass
        ]"
        :aria-current="currentPage == 1 ? 'page' : null"
        @click.prevent="changePage(1)"
      >
        1
      </a>
      <div
        v-if="currentPage >= pageCount - pageMiddle && total > pageCount && isPassPageCount"
        class="hs-tooltip inline-block"
        @click="changePage(handleNextPrePage('preStep'))"
      >
        <button
          type="button"
          class="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-100 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          :class="sizeClass"
        >
          <span class="group-hover:hidden text-xs">•••</span>
          <svg
            class="group-hover:block hidden flex-shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 17l-5-5 5-5"></path>
            <path d="M11 17l-5-5 5-5"></path>
          </svg>
          <span
            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
            role="tooltip"
          >
            Previous {{ pageCount }} pages
          </span>
        </button>
      </div>

      <template v-for="(page, index) in total - 1" :key="index">
        <button
          v-if="handleShowHideButton(page)"
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
          :class="[
            { 'bg-blue-600 text-white': currentPage == page, 'bg-gray-200': currentPage != page },
            sizeClass
          ]"
          :aria-current="currentPage == page ? 'page' : null"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
      </template>

      <div
        v-if="currentPage < total - pageMiddle - 1 && total > pageCount && isPassPageCount"
        class="hs-tooltip inline-block"
        @click="changePage(handleNextPrePage('nextStep'))"
      >
        <button
          type="button"
          class="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          :class="sizeClass"
        >
          <span class="group-hover:hidden text-xs">•••</span>
          <svg
            class="group-hover:block hidden flex-shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 17 5-5-5-5"></path>
            <path d="m13 17 5-5-5-5"></path>
          </svg>
          <span
            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
            role="tooltip"
          >
            Next {{ pageCount }} pages
          </span>
        </button>
      </div>
      <button
        type="button"
        class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
        :class="[
          { 'bg-blue-600 text-white': currentPage == total, 'bg-gray-200': currentPage != total },
          sizeClass
        ]"
        :aria-current="currentPage == total ? 'page' : null"
        @click="changePage(total)"
      >
        {{ total }}
      </button>
    </div>

    <button
      class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center jusify-center items-center gap-x-2 text-sm bg-gray-100 rounded-lg text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      type="button"
      :disabled="currentPage == total"
      :class="sizeClass"
      @click="changePage(handleNextPrePage('next'))"
    >
      <span aria-hidden="true" class="sr-only">Next</span>
      <svg
        class="flex-shrink-0 size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </button>
  </div>
</template>

```





