# Chart Component

## Base usage
![Chart-1 Screenshot](/images/chart1.png)

``` vue
<script setup>
import { ref } from 'vue'
import BarChart from '@/components/Charts/BarChart.vue'
import LineChart from '@/components/Charts/LineChart.vue'
import BubbleChart from '@/components/Charts/BubbleChart.vue'
import PieChart from '@/components/Charts/PieChart.vue'
import DoughnutChart from '@/components/Charts/DoughnutChart.vue'

const chartData = ref({
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 50, 70, 90],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
})
</script>

<template>
  <div v-if="chartData">
    <BarChart :data="chartData" class="h-72" />
    <LineChart :data="chartData" class="h-72" />
    <PieChart :data="chartData" class="h-72" />
    <DoughnutChart :data="chartData" class="h-72" />
    <BubbleChart :data="chartData" class="h-72" />
  </div>
</template>

```

## Usage Example

```vue
<script setup>
import BarChart from '@/components/Charts/BarChart.vue'
</script>
<template>
  <div v-if="chartData">
    <Bar-chart :data="chartData" class="h-72"/>
  </div>
</template>

```

## Height chart
![BarChart Screenshot](/images/bar_chart.png)
``` vue
<script setup>
import BarChart from '@/components/Charts/BarChart.vue'
</script>
<template>
  <div v-if="chartData">
    <Bar-chart :data="chartData" class="h-72"/>
  </div>
</template>

```

## API

### Attributes

| Attribute | Description | Type | Accepted Values | Default |
|-----------|-------------|------|-----------------|---------|
| data | The data to be displayed in the chart | Object | — | — |

### Classes

| Class | Description |
|-------|-------------|
| h-72 | Sets the height of the chart to 72 units (18rem or typically 288px) |

### Available Chart Components

| Component | Description |
|-----------|-------------|
| BarChart | Renders a bar chart |
| LineChart | Renders a line chart |
| BubbleChart | Renders a bubble chart |
| PieChart | Renders a pie chart |
| DoughnutChart | Renders a doughnut chart |
