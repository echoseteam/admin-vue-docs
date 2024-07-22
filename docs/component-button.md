
# Components


## Buttons
- This Button component is a versatile and customizable Vue.js component that allows you to create stylish buttons with ease. Here's what you need to know:
``` warning
1. Visual Styles: As shown in the image, the component supports various button styles including primary, secondary, success, danger, warning, info, light, and dark. Each style has its own distinct color scheme.
2. Usage: To use this button in your Vue application, you simply need to import and use the component, passing the required props:
<Button type="primary" text="Click me" />

3. Props:

type: Determines the button's style. Options include 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', and 'dark'. Default is 'primary'.
text: The text to display on the button. This prop is required.


4. Styling: The button has a consistent style with padding (px-5 py-2), rounded corners, and bold font. The color scheme changes based on the type prop.
5. Customization: The component uses a buttonStyles configuration object (imported from '@/configs/button') to determine the specific styles for each button type. This allows for easy global customization of button styles.
6. Responsive: The button is designed to work well in various layouts and screen sizes.
``` 
![Component Button Screenshot](/images/component_button.png)
``` copy
<script setup>
import { computed } from 'vue';
import { buttonStyles } from '@/configs/button';

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value)
  },
  text: {
    type: String,
    required: true
  }
});

const buttonClass = computed(() => {
  return ['px-5 py-2 rounded font-bold', buttonStyles[props.type]];
});
</script>

<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>
```





