# Chart Component

## Base usage
![Chart-1 Screenshot](/images/chart1.png)

``` vue
<template>
  <div v-if="chartData">
    <bar-chart :data="chartData" class="h-72" />
    <line-chart :data="chartData" class="h-72" />
    <pie-chart :data="chartData" class="h-72" />
    <doughnut-chart :data="chartData" class="h-72" />
    <bubble-chart :data="chartData" class="h-72" />
  </div>
</template>

<script setup>
  import BarChart from '@/components/Charts/BarChart.vue'
  import LineChart from '@/components/Charts/LineChart.vue'
  import BubbleChart from '@/components/Charts/BubbleChart.vue'
  import PieChart from '@/components/Charts/PieChart.vue'
  import DoughnutChart from '@/components/Charts/DoughnutChart.vue'
</script>

```

## Usage Example

```vue
<template>
  <div v-if="chartData">
    <bar-chart :data="chartData" class="h-72" />
  </div>
</template>

<script setup>
  import BarChart from '@/components/Charts/BarChart.vue'
</script>

```

## Height chart
![BarChart Screenshot](/images/bar_chart.png)
``` vue
<template>
  <div v-if="chartData">
    <bar-chart :data="chartData" class="h-72" />
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
