# PAGINATION

Hi this component using vue 3 + typescript.

## API

| Property              | Description                    | Type   | Default |
| :-------------------- | :----------------------------- | :----- | :------ |
| `title`               | Set the title pagination       | String | null    |
| `items`               | Set the total items            | Number | 0       |
| `itemsPerPageOptions` | Set the items per page options | []     |

## Modal Event

| Event Name    | Description                            |
| :------------ | :------------------------------------- |
| `pagechanged` | Function for pagechanged, Only emitted |

## Usage / Examples

Pagination

```vue
<BmPagination title="example" :items="50" :itemsPerPageOptions="[2,5,6]" v-model:currentPage="currentPage" @pagechanged="onPageChange" />

<script lang="ts" setup>

const currentPage = ref(1)
const onPageChange = (page: any) => {
    currentPage.value = page;
}

<script>
```
