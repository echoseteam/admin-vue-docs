# Car-box Component

## Base usage
![Card Screenshot](/images/card.png)

``` vue
<script setup>
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import {mdiCartOutline, mdiAccountBoxOutline} from '@mdi/js'
</script>
<template>
  <CardBoxWidget
    trend="12%"
    trend-type="down"
    color="text-blue-500"
    :icon="mdiCartOutline"
    :number="7770"
    prefix="$"
    label="Sales"
    rounded="rounded-2xl"
  />

  <CardBoxWidget
    trend="9%"
    trend-type="up"
    color="text-cyan-400"
    :icon="mdiAccountBoxOutline"
    :number="160697"
    label="Leads"
    rounded="rounded-2xl"
  />
</template>
```

## Simple card
![Simple Card](/images/simple_card.png)

```vue
<script setup>
  import CardBoxWidget from '@/components/CardBoxWidget.vue'
</script>

<template>
  <CardBoxClient
    v-for="client in clientBarItems"
    :key="client.id"
    :name="client.name"
    :login="client.login"
    :date="client.created"
    :progress="client.progress"
  />
</template>
```

## API

### Attributes

| Attribute | Description | Type | Accepted Values | Default |
|-----------|-------------|------|-----------------|---------|
| trend | Trend percentage | string | — | — |
| trend-type | Type of trend | string | 'up', 'down' | — |
| color | Text color class | string | Any valid Tailwind color class | — |
| icon | Icon path from @mdi/js | string | — | — |
| number | Main number to display | number | — | — |
| prefix | Prefix for the number (e.g. currency symbol) | string | — | — |
| label | Label text | string | — | — |
| rounded | CSS class for border radius | string | Any valid Tailwind rounded class | — |
| name | Client name (for CardBoxClient) | string | — | — |
| login | Client login (for CardBoxClient) | string | — | — |
| date | Client creation date (for CardBoxClient) | string | — | — |
| progress | Client progress (for CardBoxClient) | number | — | — |

### Slots

| Name | Description |
|------|-------------|
| default | Default slot for custom content |