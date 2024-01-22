<template>
    <div class="multipleselect">
        <div class="multipleselect__wrapper">
            <div class="multipleselect__title">{{ label }} <span v-if="required"
                    class="multipleselect__title__required">*</span></div>
            <div
                :class="['multipleselect__dropdown', isOpen ? 'active' : '', { 'invalid': isRequired }, disabled ? 'disabled' : '']">
                <div class="multipleselect__dropdown__content">
                    <div @click="toogleDisabled" class="multipleselect__dropdown__content__wrapper">
                        <div v-for="item in selectedItems" :key="item.value"
                            class="multipleselect__dropdown__content__item">
                            {{ item.label }}
                            <span v-if="isOpen" @click="removeItem(item)">x</span>
                        </div>
                    </div>
                    <div v-if="((isOpen && selectedItems.length > 0) && (isOpen && isInvalid || selectedItems.length > 0))"
                        @click="removeAllItem" class="multipleselect__dropdown__content__clear">
                        <span>
                            <Icon icon="zondicons:close-outline" />
                        </span>
                    </div>
                </div>
                <div @click="toogleDisabled" class="multipleselect__dropdown__icon">
                    <span v-if="!isOpen">
                        <Icon icon="iconamoon:arrow-down-2" />
                    </span>
                    <span v-else>
                        <Icon icon="iconamoon:arrow-up-2" />
                    </span>
                </div>
            </div>
            <div v-if="!isOpen && isInvalid" class="multipleselect__validation">Mohon Isi minimal 1</div>
            <div v-if="!isOpen && !isInvalid">Pengisian berhasil</div>
            <div v-if="isOpen" class="multipleselect__option">
                <div v-for="item in filteredItems" :key="item.value" @click="toggleItem(item)"
                    class="multipleselect__option__label">{{ item.label }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, watch } from 'vue';
import { Icon } from '@iconify/vue'


interface SelectItem {
    label: string;
    value: string | number;
}

export default defineComponent({
    components: {
        Icon
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        items: {
            type: Array as () => SelectItem[],
            required: true,
        },
        value: {
            type: Array as () => SelectItem[],
            default: () => [],
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    setup(props, { emit }) {

        const isOpen = ref(false);
        const search = ref('');
        const selectedItems = ref(props.value);

        const isInvalid = computed(() => {
            const selectedCount = selectedItems.value.length;
            if (selectedCount < 1) {
                return true
            }
        });

        const isRequired = computed(() => {
            const selectedCount = selectedItems.value.length;
            return props.required ? selectedCount < 1 : false
        })

        const validationRemoveAll = computed(() => {
            if (isOpen && (isInvalid || selectedItems.value.length > 0)) {
                return true
            }
            if (!isOpen && (isInvalid || selectedItems.value.length > 0)) {
                return true
            }
        })

        const filteredItems = computed(() =>
            props.items.filter((item) => item.label.toLowerCase().includes(search.value.toLowerCase()))
        );

        const toggleDropdown = () => {
            isOpen.value = !isOpen.value;
        };

        const toggleItem = (item: SelectItem) => {
            if (!selectedItems.value.some((i) => i.value === item.value)) {
                selectedItems.value = [...selectedItems.value, item];
            }
        };


        const toogleDisabled = computed(() => {
            if (!props.disabled) {
                return toggleDropdown
            }
        })


        watch(
            () => selectedItems.value,
            () => {
                emit('update:modelValue', selectedItems.value);
            }
        );

        const removeItem = (item: SelectItem) => {
            selectedItems.value = selectedItems.value.filter((i) => i.value !== item.value);
        };

        const removeAllItem = () => {
            selectedItems.value.length = 0;
        }

        const filterItems = () => {
            isOpen.value = true;
        };

        return {
            isOpen,
            search,
            selectedItems,
            filteredItems,
            toggleItem,
            removeItem,
            toggleDropdown,
            filterItems,
            removeAllItem,
            isInvalid,
            validationRemoveAll,
            toogleDisabled,
            isRequired
        };
    },
});
</script>

<style scoped lang="scss">
.multipleselect {
    width: 412px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        height: auto;
        gap: 10px;
        width: 100%;
    }

    &__title {
        font-size: 15px;

        &__required {
            color: $red-100;
        }
    }

    &__dropdown {
        display: grid;
        overflow: hidden;
        width: 100%;
        grid-template-columns: 90% 10%;
        gap: 8px;
        border: 2px solid $blue-100;
        border-radius: 5px;
        padding: 0px 8px;
        align-self: stretch;
        cursor: pointer;

        &.active {
            border: 1px solid $green-100;

            .multipleselect__dropdown__icon {
                border-left: 1px solid $green-100;
                color: $green-100;
            }

        }

        &.invalid {
            border: 1px solid red;

            .multipleselect__dropdown__icon {
                border-left: 1px solid red;
                color: $red-100;
            }
        }

        &.disabled {
            cursor: not-allowed;

            .multipleselect__dropdown__content__item {
                background: $blue-200;
                color: $dark-100;
                opacity: 50%;
            }
        }

        &__content {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            padding: 4px;

            &__clear {
                align-self: center;
                padding: 5px 0px;
                font-size: 12px;
                border-radius: 20px;
                text-align: center;
                color: $dark-200;

            }

            &__wrapper {
                display: flex;
                gap: 10px;
                width: 85%;
                overflow: hidden;
                white-space: nowrap;
            }

            &__item {
                display: flex;
                gap: 10px;
                background: $blue-100;
                font-size: 12px;
                color: $dark-100;
                border-radius: 5px;
                padding: 2px 8px;
                align-items: center;

                span {
                    border: none;
                    padding: 0px 5px;
                    background: $dark-100;
                    font-size: 12px;
                    color: $white-100;
                    align-self: center;
                    border-radius: 10px;
                    cursor: pointer;
                }
            }
        }

        &__icon {
            border-left: 2px solid $blue-100;
            border-radius: 5px;
            padding: 8px 0px;
            font-size: 15px;
            align-content: center;
            text-align: center;
            justify-content: center;

            span {}
        }
    }


    &__option {
        padding: 5px 10px;
        display: flex;
        gap: 5px;
        flex-direction: column;
        background: $blue-100;
        border-radius: 5px;

        &__label {
            font-size: 15px;
            cursor: pointer;
        }
    }
}</style>
