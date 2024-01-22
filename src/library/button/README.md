# Button

Hi this component using vue 3 + typescript.

## API

| Property     | Description                                                            | Type    | Default |
| :----------- | :--------------------------------------------------------------------- | :------ | :------ |
| `Type`       | Set the button type, options include ( primary , secondary, tertiary ) | String  | primary |
| `outline`    | Set button to outlined style                                           | Boolean | false   |
| `icon`       | Set the icon model                                                     | String  | null    |
| `icon-align` | Set the icon align, options include ( left , right)                    | String  | left    |
| `disabled`   | Set the button to disabled                                             | Boolean | false   |
| `icon-only`  | Set the button to icon only                                            | Boolean | false   |

## Usage / Examples

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
