<template>
    <div class="pagination">
        <div class="pagination__wrapper">
            <div class="pagination__dropdown">
                <div v-if="title" class="pagination__dropdown__title">
                    {{ title }}
                </div>
                <div class="pagination__dropdown__content">
                    <div class="pagination__dropdown__content__option">
                        <select id="itemsPerPage" v-model="itemsPerPage">
                            <option v-for="option in itemsPerPageOptions" :key="option" :value="option">{{ option }}
                            </option>
                        </select>
                    </div>
                    <div class="pagination__dropdown__content__arrow">
                        <span class="arrow-up" @click="increaseItemsPerPage">&#9650;</span>
                        <span class="arrow-down" @click="decreaseItemsPerPage">&#9660;</span>
                    </div>
                </div>
            </div>
            <div class="pagination__page">
                <div class="pagination__page__wrapper">
                    <div class="pagination__page__left">
                        <button @click="firstPage" :disabled="currentPage === 1">
                            <Icon icon="mingcute:left-line" />
                        </button>
                        <button @click="prevPage" :disabled="currentPage === 1">
                            <Icon icon="ri:skip-left-line" />
                        </button>
                    </div>
                    <div class="pagination__page__current">
                        <template v-for="page in visiblePages" :key="page">
                            <button @click="gotoPage(page)" :class="{ active: page === currentPage }">{{ page }}</button>
                        </template>
                    </div>
                    <div class="pagination__page__right">
                        <button @click="nextPage" :disabled="currentPage === totalPages">
                            <Icon icon="mingcute:right-line" />
                        </button>
                        <button @click="lastPage" :disabled="currentPage === totalPages">
                            <Icon icon="ri:skip-right-line" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script  lang="ts">
import { ref, computed, watch, defineComponent, PropType } from 'vue';
import { Icon } from '@iconify/vue'


interface Item {
    id: number;
    name: string;
}

interface ItemsData {
    length: number;
    currentPage: number;
    data: Item[];
}

export default defineComponent({
    components: {
        Icon,
    },
    props: {
        title: {
            type: String,
            default: null,
        },
        items: {
            type: Number,
            default: 0,
        },
        itemsPerPageOptions: {
            type: Array as PropType<number[]>,
            default: [],
        },
        currentPage: {
            type: Number,
            default: 1,
        }
    },
    setup(props, { emit }) {

        const current = ref(1)

        const itemsPerPage = ref(props.itemsPerPageOptions[0]);

        const totalPages = computed(() => Math.ceil(props.items / itemsPerPage.value))

        const visiblePages = computed(() => {

            const numberOfVisiblePages = 5;
            const totalPagesToDisplay = Math.min(numberOfVisiblePages, totalPages.value)

            let startPage;

            if (props.currentPage > totalPages.value - numberOfVisiblePages + 1) {
                startPage = Math.max(1, totalPages.value - numberOfVisiblePages + 1);
            } else {
                startPage = Math.max(1, props.currentPage - Math.floor(numberOfVisiblePages / 2));
            }

            const endPage = Math.min(totalPages.value, startPage + totalPagesToDisplay - 1);

            const result = [];

            for (let i = startPage; i <= endPage; i++) {
                result.push(i);
            }

            return result;
        })

        const gotoPage = (page: number) => {
            current.value = page;
            emit('update:currentPage', current.value);
        }

        const prevPage = () => {
            current.value = current.value - 1
            emit('update:currentPage', current.value)
        }

        const nextPage = () => {
            current.value = current.value + 1
            emit('update:currentPage', current.value)
        }

        const lastPage = () => {
            current.value = totalPages.value
            emit('update:currentPage', current.value)
        }

        const firstPage = () => {
            current.value = 1
            emit('update:currentPage', current.value)
        }

        const increaseItemsPerPage = () => {
            const currentIndex = props.itemsPerPageOptions.indexOf(itemsPerPage.value);
            if (currentIndex < props.itemsPerPageOptions.length - 1) {
                itemsPerPage.value = props.itemsPerPageOptions[currentIndex + 1];
                emit('update:currentPage', current.value);
            }
        };

        watch(() => itemsPerPage.value, () => {
            current.value = 1;
            emit('update:currentPage', current.value)
        });


        const decreaseItemsPerPage = () => {
            const currentIndex = props.itemsPerPageOptions.indexOf(itemsPerPage.value);
            if (currentIndex > 0) {
                itemsPerPage.value = props.itemsPerPageOptions[currentIndex - 1];
                current.value = 1
                emit('update:currentPage', current.value);
            }
            console.log(currentIndex, 'zz')
        };

        return {
            gotoPage,
            prevPage,
            nextPage,
            totalPages,
            visiblePages,
            itemsPerPage,
            increaseItemsPerPage,
            decreaseItemsPerPage,
            current,
            lastPage,
            firstPage,
        }
    }
})

</script>

<style lang="scss" scoped>
.pagination {
    padding: 10px;

    &__wrapper {
        display: flex;
        gap: 24px;
        align-items: center;
    }

    &__dropdown {
        display: flex;
        gap: 8px;
        align-items: center;

        &__title {
            font-size: 14px;
        }

        &__content {
            display: flex;
            align-items: center;
            gap: 4px;
            border: none;

            &__option {

                select {
                    padding: 4px 16px;
                    width: 60px;
                    height: 24px;
                    text-align: center;
                    font-size: 10px;
                    appearance: none;
                    border-radius: 5px;
                    background: $white-100;
                    border: none;
                    cursor: pointer;
                }

            }

            &__arrow {
                display: flex;
                gap: 5px;
                flex-direction: column;
                font-size: 6px;
                justify-content: center;
                height: 24px;
                background: $white-100;
                padding: 2px 4px;
                border-radius: 7px;
                cursor: pointer;
            }

        }

    }

    &__page {

        button {
            font-size: 8px;
            border: 1px solid grey;
            cursor: pointer;
            border-radius: 4px;
            padding: 4px 10px;
            outline: none;
        }

        button:nth-child(n+6) {
            display: none;
        }

        button.active {
            color: $green-100;
            border: 1px solid $green-100;
        }

        &__wrapper {
            display: flex;
            gap: 8px;
        }

        &__left {
            display: flex;
            gap: 8px;

            button {
                background: $green-200;
                color: $white-100;
                border: none;
            }

            button:disabled {
                opacity: 50%;
                background: $white-200;
                color: $dark-100;
            }
        }

        &__current {
            display: flex;
            gap: 8px;
        }

        &__right {
            display: flex;
            gap: 8px;

            button {
                background: $green-200;
                color: $white-100;
                border: none;
            }

            button:disabled {
                opacity: 50%;
                background: $white-200;
                color: $dark-100;
            }

        }

    }


}</style>
