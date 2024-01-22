# BmLibrary

fyi = bm is buma :)

Hi this component using vue 3 + typescript.

| Component      |
| :------------- |
| `BmButton`     |
| `BmModal`      |
| `BmPagination` |
| `BmRadioGroup` |
| `BmMultiple`   |

## Instalation

- npm install bmlibrary

```vue
import { BmRadioGroup, BmModal } from 'bmlibrary'

<BmButton label="evan" />
```

## Description

### BUTTON

#### API

| Property     | Description                                                            | Type    | Default |
| :----------- | :--------------------------------------------------------------------- | :------ | :------ |
| `Type`       | Set the button type, options include ( primary , secondary, tertiary ) | String  | primary |
| `outline`    | Set button to outlined style                                           | Boolean | false   |
| `icon`       | Set the icon model                                                     | String  | null    |
| `icon-align` | Set the icon align, options include ( left , right)                    | String  | left    |
| `disabled`   | Set the button to disabled                                             | Boolean | false   |
| `icon-only`  | Set the button to icon only                                            | Boolean | false   |

#### Usage / Examples

Button with type

```vue
<BmButton label="example" type="primary" />
```

Button with outline

```vue
<BmButton label="example" type="primary" outline />
```

Button with icon

```vue
<BmButton label="example" type="primary" icon="kiw" outline />
```

Button with icon allign

```vue
<BmButton label="example" type="primary" icon="kiw" icon-align="left" outline />
```

Button with text-line style

```vue
<BmButton label="example" icon="kiw" icon-align="left" outline text-line />
```

Button with using icon only

```vue
<BmButton icon="kiw" icon-only />
```

Button disabled

```vue
<BmButton label="example" disabled />
```

### PAGINATION

#### API

| Property              | Description                    | Type   | Default |
| :-------------------- | :----------------------------- | :----- | :------ |
| `title`               | Set the title pagination       | String | null    |
| `items`               | Set the total items            | Number | 0       |
| `itemsPerPageOptions` | Set the items per page options | []     |

#### Modal Event

| Event Name    | Description                            |
| :------------ | :------------------------------------- |
| `pagechanged` | Function for pagechanged, Only emitted |

#### Usage / Examples

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

### RADIO GROUP

#### API

| Property  | Description                                                    | Type   | Default  |
| :-------- | :------------------------------------------------------------- | :----- | :------- |
| `label`   | Set the title Radio                                            | String | null     |
| `layout`  | Set the Radio layout, options include ( horizontal, vertical ) | String | vertical |
| `options` | Set the radio options                                          | Array  | []       |

#### Usage / Examples

```vue

<BmRadioGroup label="evan" layout="horizontal" :options="radioOptions" v-model="selectedRadio" />

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

### MODAL

#### API

| Property        | Description                                                               | Type    | Default |
| :-------------- | :------------------------------------------------------------------------ | :------ | :------ |
| `size`          | Set the button type, options include (small, medium, large, pwa, pwa-v2 ) | String  | medium  |
| `image-modal`   | Display for image modal                                                   | Boolean | false   |
| `labelBtnLeft`  | Label for left button                                                     | String  | null    |
| `labelBtnRight` | Label for Right button                                                    | String  | null    |

#### Modal Event

| Event Name    | Description                              |
| :------------ | :--------------------------------------- |
| `l-btn`       | Function for left Button, Only emitted   |
| `r-btn`       | Function for Right Button , Only emitted |
| `close-modal` | Function for close modal                 |

#### Usage / Examples

Modal with size

```vue
<BmModal size="small" />
```

Modal with using image-modal

```vue
<BmModal>
    <template #imageModal>
        <!-- create your want -->
    </template>
</BmModal>
```

Modal with function

```vue
<BmModal
  v-if="isModal"
  @closeModal="closeModal"
  size="small"
  @l-btn="leftButton"
  @r-btn="leftButton"
  image-modal
  labelBtnLeft="label"
  labelBtnRight="close"
>
            <template #imageModal>
                <img src="@/assets/img/ilustration-modal.svg" />
            </template>
 </BmModal>
```

### MULTIPLE SELECT

#### API

| Property   | Description     | Type    | Default |
| :--------- | :-------------- | :------ | :------ |
| `label`    | Set the labe    | String  | null    |
| `items`    | Set the option  | Array   | []      |
| `required` | Set to required | Boolean | false   |
| `disabled` | Set to disabled | Boolean | false   |

#### Usage / Examples

```vue
<BmMultiple
    label="example" v-model="selectedValues" :items="selectedOptions" required
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
