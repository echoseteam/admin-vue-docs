# Chart Component
The Chart Component is a flexible and dynamic charting solution for Vue 3 applications, leveraging the power of Chart.js library.

## Features
- Integration with Chart.js for powerful and customizable charts
- Support for various chart types (e.g., bar, line, pie)
- Dynamic data updating with reactive props
- Customizable color schemes
- Responsive design with maintainable aspect ratio
- Configurable axes and scales
- Optional legend display
- Tooltip support for enhanced data visibility
- Easy integration with Vue 3 composition API
- Automatic chart updates on data changes

## Example
![Chart Screenshot](/images/chart.png)

## Usage
``` vue
<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {
  Chart,
  BarElement,
  PointElement,
  BarController,
  LinearScale,
  CategoryScale,
  Tooltip
} from 'chart.js'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const root = ref(null)

let chart

Chart.register(BarElement, PointElement, BarController, LinearScale, CategoryScale, Tooltip)

const chartColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)'
]

const applyColors = (data) => {
  return {
    ...data,
    datasets: data.datasets.map((dataset, index) => ({
      ...dataset,
      backgroundColor: chartColors[index % chartColors.length],
      borderColor: chartColors[index % chartColors.length].replace('0.8', '1'),
      borderWidth: 1
    }))
  }
}

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'bar',
    data: applyColors(props.data),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: false
        },
        x: {
          display: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  })
})

const chartData = computed(() => props.data)

watch(
  chartData,
  (newData) => {
    if (chart) {
      chart.data = applyColors(newData)
      chart.update()
    }
  },
  { deep: true }
)
</script>

<template>
  <canvas ref="root" />
</template>

```