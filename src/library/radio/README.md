
# Radio


Hi this component using vue 3 + typescript.

## API

| Property | Description     | Type                |   Default |
| :-------- | :------- | :------------------------- | :-------------------------   |
| `label` | Set the title Radio | String | null  |
| `layout` | Set the Radio layout, options include ( horizontal, vertical ) | String | vertical  |
| `options` | Set the radio options | Array  | [] |



## Usage / Examples

Pagination 

```vue

<Radio label="evan" layout="horizontal" :options="radioOptions" v-model="selectedRadio" />

<script lang="ts" setup>

const radioOptions= ref([
             { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
            { label: 'Option 4', value: 'option4' },
            { label: 'Option 5', value: 'option5' },
            { label: 'Option 6', value: 'option6' },
       ])

const selectedRadio = ref('')

<script>
```













