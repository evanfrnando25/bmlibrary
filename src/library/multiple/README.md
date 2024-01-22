## Multiple Select

Hi this component using vue 3 + typescript.

### API

| Property   | Description     | Type    | Default |
| :--------- | :-------------- | :------ | :------ |
| `items`    | Set the option  | Array   | []      |
| `required` | Set to required | Boolean | false   |
| `disabled` | Set to disabled | Boolean | false   |

### Usage / Examples

Pagination

```vue


<BmMultiple
    v-model="selectedValues" :items="selectedOptions" required
/>

<script lang="ts" setup>

 const selectedOptions = ref([
        { label: 'Option 1 ', value: 'option 1' },
        { label: 'Option 2 ', value: 'option 2' },
        { label: 'Option 3 ', value: 'option 3' },
        { label: 'Option 4', value: 'option 4' },
        { label: 'Option  5', value: 'option 5' },
        { label: 'Option  5', value: 'option 5' },
        { label: 'Option  5', value: 'option 5' },

])

const selectedValues = ref([])

<script>
```
