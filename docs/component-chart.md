
# Components


## Bar Chart

![Bar Chart Screenshot](/images/bar_chart.png)
``` copy
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

## Polar Area Chart
![Polar Area Chart Screenshot](/images/polar_area_chart.png)

``` copy
<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {
  Chart,
  ArcElement,
  RadialLinearScale,
  PolarAreaController,
  Tooltip,
  Legend
} from 'chart.js'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const root = ref(null)

let chart

Chart.register(ArcElement, RadialLinearScale, PolarAreaController, Tooltip, Legend)

const chartColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)'
]

const applyColors = (data) => {
  return {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: chartColors,
      borderColor: chartColors.map((color) => color.replace('0.8', '1')),
      borderWidth: 1
    }))
  }
}

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'polarArea',
    data: applyColors(props.data),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          enabled: true
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

## Line Chart
![Line Chart Screenshot](/images/line_chart.png)

``` copy
<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
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

Chart.register(LineElement, PointElement, LineController, LinearScale, CategoryScale, Tooltip)

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'line',
    data: props.data,
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

watch(chartData, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})
</script>

<template>
  <canvas ref="root" />
</template>

```

## Pie Chart
![Pie Chart Screenshot](/images/pie_chart.png)

``` copy
<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {
  Chart,
  ArcElement,
  PointElement,
  PieController,
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

Chart.register(ArcElement, PointElement, PieController, LinearScale, CategoryScale, Tooltip)

const chartColors = ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)']

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'pie',
    data: {
      ...props.data,
      datasets: props.data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: chartColors,
        borderColor: chartColors
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true
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
      chart.data = {
        ...newData,
        datasets: newData.datasets.map((dataset) => ({
          ...dataset,
          backgroundColor: chartColors,
          borderColor: chartColors
        }))
      }
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

## Doughnut_chart
![Doughnut Chart Screenshot](/images/doughnut_chart.png)

``` copy
<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { Chart, ArcElement, PointElement, DoughnutController, Tooltip, Legend } from 'chart.js'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const root = ref(null)

let chart

Chart.register(ArcElement, PointElement, DoughnutController, Tooltip, Legend)

const chartColors = ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)']

const applyColors = (data) => {
  return {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: chartColors,
      borderColor: chartColors,
      borderWidth: 1
    }))
  }
}

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'doughnut',
    data: applyColors(props.data),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          enabled: true
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

## Bubble_chart
![Bubble Chart Screenshot](/images/bubble_chart.png)

``` copy
<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {
  Chart,
  PointElement,
  BubbleController,
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

Chart.register(PointElement, BubbleController, LinearScale, CategoryScale, Tooltip)

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'bubble',
    data: props.data,
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

watch(chartData, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})
</script>

<template>
  <canvas ref="root" />
</template>

```


