# MODAL

Hi this component using vue 3 + typescript.

## API

| Property        | Description                                                               | Type    | Default |
| :-------------- | :------------------------------------------------------------------------ | :------ | :------ |
| `size`          | Set the button type, options include (small, medium, large, pwa, pwa-v2 ) | String  | medium  |
| `image-modal`   | Display for image modal                                                   | Boolean | false   |
| `labelBtnLeft`  | Label for left button                                                     | String  | null    |
| `labelBtnRight` | Label for Right button                                                    | String  | null    |

## Modal Event

| Event Name    | Description                              |
| :------------ | :--------------------------------------- |
| `l-btn`       | Function for left Button, Only emitted   |
| `r-btn`       | Function for Right Button , Only emitted |
| `close-modal` | Function for close modal                 |

## Usage / Examples

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
<BaModal
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
 </BaModal>
```
