<template>
    <div :class="{ 'radio--horizontal': layout === 'horizontal', 'radio--vertical': layout === 'vertical' }">
        <div v-for="item in options" :key="item.value" :class="{ 'radio__group--selected': selectedOption === item.value }"
            class="radio__group">
            <input v-model="selectedOption" :value="item.value" class="radio__group__input" type="radio" />
            <span class="radio__group__label">{{ item.label }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType, watch } from 'vue';

interface RadioOption {
    label: string;
    value: string | number;
}

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true,
        },
        options: {
            type: Array as PropType<RadioOption[]>,
            required: true,
        },
        value: {
            type: [String, Number],
            required: false,
        },
        layout: {
            type: String as PropType<'horizontal' | 'vertical'>,
            default: 'vertical',
        },
    },
    setup(props, { emit }) {
        const selectedOption = ref(props.value);

        const updateSelectedOption = (value: string | number) => {
            selectedOption.value = value;
            emit('update:value', value);
        };

        watch(
            () => selectedOption.value,
            () => {
                emit('update:modelValue', selectedOption.value);
            }
        );

        return {
            selectedOption,
            updateSelectedOption,
        };
    },
});
</script>

<style lang="scss" scoped>
.radio {

    &--horizontal {
        display: flex;
        gap: 16px;
    }

    &--vertical {
        display: grid;
        grid-template-columns: 50% 50%;
        row-gap: 8px;
        column-gap: 16px;
    }

    &__group {
        display: flex;
        align-items: center;
        border: 1px solid $blue-100;
        margin-bottom: 0px;
        align-items: center;
        padding: 8px;
        border-radius: 10px;
        transition: border-color 0.3s ease;

        &__input {
            margin-right: 10px;
            cursor: pointer;
            position: relative;

            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 20px;
            height: 20px;
            border: 1px solid #ccc;
            border-radius: 50%;
            outline: none;

            &:checked {
                background-color: $green-100;
                border-color: $green-100;

                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: white;
                }
            }
        }

        &__label {
            font-size: 16px;
        }

        &--selected {
            border-color: $green-100;
        }
    }
}
</style>
