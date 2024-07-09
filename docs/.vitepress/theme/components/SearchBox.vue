<template>
  <div class="search-box">
    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <input 
      type="text" 
      v-model="searchQuery" 
      @input="search" 
      placeholder="Tìm kiếm..."
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search() {
      
    }
  }
}
</script>

<style scoped>
.search-box {
  position: relative;
  width: 200px; 
  padding: 0;
}
.search-box input {
  width: 100%;
  padding: 8px 8px 8px 30px; 
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
.search-icon {
  position: absolute;
  left: 8px; 
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none;
}
</style>