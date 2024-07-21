
# Component

- Overview of the component structure
   - In the component, there will be child components created such as: BaseLevel, Breadcrumb,... or Forms, Icons folders containing other components.
![Struct_component Screenshot](/images/struct_component.png)

- Key components and their purposes
    - In App.vue, this is the main component of our Vue 3 application. It serves as the entry point and defines the overall structure of the app.
    ![App Screenshot](/images/app.png)

    - The LayoutAuthenticated component is a crucial layout element that appears at the top of our application across multiple pages.
    ![Layout](/images/layout.png)

- How to create and register components
    - This guide demonstrates the process of creating and registering components in a Vue 3 project.
    ### Creating a Component

    ![Create](/images/create.png)
    ``` bash
        1. Create a new .vue file in your components directory
        2. Structure your component with <template>, <script>, and <style> tags
        3. Implement the component logic using the Composition API or Options API
    ```

    ### Registering Components

    ![Main](/images/main.png)
    ``` bash
        1. In your main.js file, import the component
        2. Use app.component() to register it globally
    ```
- Component communication (props, events, emits, watch)
    - This example demonstrates the key methods of component communication in Vue 3.
    ![prop](/images/prop.png)
    1. **Props**: 
   - `type`: Defines the HTML element type (default: 'td')
   - `checked`: Controls the checkbox state (default: false)

    2. **Emit**:
    - `update:checked`: Implements v-model functionality

    3. **Watchers**:
    - Synchronizes the local state with prop changes
    - Emits changes to the parent component

    ``` bash
    ### Props
    - Uses `defineProps` to declare and type-check incoming props
    - Provides default values for both props

    ### Emit
    - Utilizes `defineEmits` to declare the `update:checked` event

    ### State Management
    - `localChecked` ref stores the local state of the checkbox

    ### Watchers
    - First watcher: Keeps `localChecked` in sync with the `checked` prop
    - Second watcher: Emits changes in `localChecked` to the parent

    ## Best Practices

    - Use of `<script setup>` for more concise component logic
    - Implementation of two-way binding (v-model) using prop and emit
    - Separation of local state from props for proper reactivity
    ```
