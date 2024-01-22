<template>
    <button :disabled="disabled" :class="[
        'button', typeButton, icon ? iconAlign : '',
        outline ? outlineButtonStyle : '',
        textLine ? textlineStyle : '',
        disabled ? disabledButton : '',
    ]">
        <span v-if="icon" class="button__icon">
            <Icon :icon="icon" />
        </span>
        <span v-if="!iconOnly" class="button__text">
            {{ label }}
        </span>
    </button>
</template>

<script lang="ts">

import { defineComponent, computed, ButtonHTMLAttributes, ref } from 'vue'
import { Icon } from '@iconify/vue'


export default defineComponent({
    components: {
        Icon,
    },
    props: {
        type: {
            type: String,
            default: "primary",
            validator: (value: string) => ['primary', 'secondary', 'tertiary'].includes(value),
        },
        icon: {
            type: String,
            default: '',
        },
        iconAlign: {
            type: String,
            default: 'left',
            validator: (value: string) => ['left', 'right'].includes(value),
        },
        iconOnly: {
            type: Boolean,
        },
        textLine: {
            type: Boolean,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
        outline: {
            type: Boolean,
        }
    },
    setup(props, { emit }) {

        const buttonProps: ButtonHTMLAttributes = {
            type: 'button'
        }

        const typeButton = computed(() => {
            return `button-${props.type}`;
        })

        const disabledButton = computed(() => {
            return `button-disabled`;
        })

        const outlineButtonStyle = computed(() => {
            return 'button-outline'
        })

        const textlineStyle = computed(() => {
            return 'button-textline'
        })

        const iconAlign = computed(() => {
            return `button-icon-${props.iconAlign}`;
        })


        return {
            typeButton,
            iconAlign,
            outlineButtonStyle,
            textlineStyle,
            buttonProps,
            disabledButton
        }

    }
})

</script>

<style lang="scss" scoped>
.button {
    cursor: pointer;
    padding: 12px 16px;
    display: flex;
    gap: 4px;
    text-align: left;
    border-radius: 5px;
    outline: 10px;


    &-primary {
        border: 1px solid $green-100;
        background-color: $green-100;
        color: $white-100 !important;
    }

    &-secondary {
        background-color: $white-100;
        color: $dark-100;
        border: 1px solid $blue-100;
    }

    &-tertiary {
        background-color: transparent;
        color: $green-100;
        border: none;
    }

    &-icon-right {
        flex-direction: row-reverse;
    }

    &-icon-left {
        flex-direction: row;
    }

    &:not(:disabled):hover {
        background-color: $green-200;
        color: $white-100;
        border: none;
    }

    &:not(:disabled):active {
        background-color: $green-200;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    }

    &-outline {
        background-color: transparent;
        color: inherit !important;
    }

    &-textline {
        text-decoration: underline;
        color: inherit
    }

    &-disabled {
        cursor: not-allowed;
        opacity: 50%;
    }

}
</style>

