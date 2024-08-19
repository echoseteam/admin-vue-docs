# Paginate Component

## Base usage
![Paginate Screenshot](/images/paginate1.png)

``` vue
<template>
    <div class="flex justify-end">
        <Pagination
        :page-count="10"
        :per-page="pagination.perPage"
        :current-page="pagination.currentPage"
        :total="totalPages"
        @change-page="changePage"
        />
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import Pagination from '@/components/Tables/Pagination.vue'
    
    const pagination = ref({
    currentPage: 1,
    perPage: 10
    })
    const paginatedUsers = computed(() => {
    const startPage = (pagination.value.currentPage - 1) * pagination.value.perPage
    const endPage = startPage + pagination.value.perPage
    return users.value.slice(startPage, endPage)
    })
    const totalPages = computed(() => {
    return Math.ceil(users.value.length / pagination.value.perPage)
    })
    const changePage = (page) => {
    pagination.value.currentPage = page
    }
    const sortChange = (event) => {
    if (event.sort) {
        sortArrayByKey(users.value, event.column, event.sort)
        return
    }
    users.value = JSON.parse(JSON.stringify(SampleUserData))
    }

</script>

```

