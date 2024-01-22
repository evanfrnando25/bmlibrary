<template>
    <div class="modal">
        <div :class="['modal__wrapper', sizeModal]">
            <div class="modal__content">
                <div class="modal__content__header">
                    <div v-if="imageModal" class="modal__content__header__image">
                        <slot name="imageModal" />
                    </div>
                    <div @click="$emit('closeModal')" class="modal__content__header__toggle">
                        X
                    </div>
                </div>
                <div class="modal__content__title">
                    <h3>Wohoo!</h3>
                </div>
                <div class="modal__content__description">
                    ..is successfully..
                </div>
            </div>
            <div class="modal__footer">
                <div class="modal__footer__wrapper">
                    <div v-if="size !== 'pwa' && size !== 'pwa-v2'" class="modal__footer__checkbox">
                        <input type="checkbox" class="modal__footer__checkbox__border" />
                        <span class="modal__footer__checkbox__label"> Option</span>
                    </div>
                    <button @click="$emit('l-btn')" class="modal__footer__button-left">{{ labelBtnLeft }}</button>
                    <button @click="$emit('r-btn')" class="modal__footer__button-right">{{ labelBtnRight }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, computed } from "vue"


export default defineComponent({

    props: {
        data: {
            type: Object || Array || null,
            default: []
        },
        modal: {
            type: Boolean,
        },
        imageModal: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'medium'
        },
        labelBtnLeft: {
            type: String,
            default: ''
        },
        labelBtnRight: {
            type: String,
            default: ''
        }
    },

    setup(props, { emit }) {

        const sizeModal = computed(() => {
            return `modal-${props.size}`
        })


        return {
            sizeModal,
        }

    }

})

</script>


<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

    &__wrapper {
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 20% auto;
        border-radius: 30px;
        background-color: $white-200;
        border-radius: 24px;
    }

    &__content {
        display: flex;
        flex-direction: column;

        &__header {
            display: grid;
            grid-template-columns: 98% 2%;

            &__image {
                justify-self: center;
            }

            &__toggle {
                font-size: 24px;
                justify-self: end;
                cursor: pointer;
            }

        }

        &__title {
            text-align: center;

            h3 {
                font-size: 24px;
            }

        }

        &__description {
            text-align: center;
            font-size: 12px;
            font-weight: 500;
            font-style: normal;
        }

    }

    &__footer {

        &__wrapper {
            display: flex;
            gap: 16px;
            justify-content: center;
        }

        &__checkbox {

            align-self: center;

            &__border {

                &:checked {
                    accent-color: $green-100;
                }

            }

        }

        &__button-left {
            padding: 12px 16px;
            border-radius: 5px;
            font-weight: 500;
            cursor: pointer;
            outline: none;
        }

        &__button-right {
            padding: 12px 16px;
            background-color: $green-100;
            color: $white-200;
            border: none;
            outline: none;
            border-radius: 5px;
            cursor: pointer;
        }

        &__button-right:active {
            background-color: $green-200;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        }

    }

    &-small {
        width: 500px;

        .modal__footer__button-left {
            background: $green-100;
            color: $white-100;
            border: 1px solid $blue-100;
        }

        .modal__footer__button-left:active {
            background: $green-200;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        }

    }

    &-medium {
        width: 720px;

        .modal__footer__button-left {
            background: $white-200;
            border: 1px solid $blue-100;
        }

        .modal__footer__button-left:active {
            background: $white-100;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        }

    }

    &-large {
        width: 1042px;

        .modal__footer__button-left {
            background: $green-100;
            color: $white-100;
            border: 1px solid $blue-100;
        }

        .modal__footer__button-left:active {
            background: $green-200;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        }
    }

    &-pwa {
        width: 328px;

        .modal__footer__button-left {
            width: 100%;
            background: $green-100;
            color: $white-100;
            border: 1px solid $blue-100;
        }

        .modal__footer__button-right {
            width: 100%;
            background: $green-100;
            color: $white-100;
            border: 1px solid $blue-100;
        }
    }

    &-pwa-v2 {
        width: 328px;

        .modal__footer__wrapper {
            flex-direction: column;
        }

        .modal__footer__button-left {
            background: $green-100;
            color: $white-100;
            border: 1px solid $blue-100;
        }

        .modal__footer__button-right {
            background: $white-200;
            color: $dark-100;
            border: 1px solid $blue-100;
        }

        .modal__footer__button-left:active {
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        }

    }


}
</style>