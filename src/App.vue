<template>
    <div>
        <h1>Component Buma</h1>

        <h1>Button</h1>
    
        <BaButton icon="mingcute:left-line"  />
        <BaPagination title="example" :items="50" :itemsPerPageOptions="[2, 5, 6]" v-model:currentPage="currentPage" @pagechanged="onPageChange" />


        <!-- <br />

        <h1>Modal</h1>

        <button @click="openModal" >show modal</button>
        <BaModal v-if="isModal" @closeModal="closeModal" size="small" @l-btn="leftButton" @r-btn="leftButton"  image-modal labelBtnLeft="label" labelBtnRight="close" >
            <template #imageModal>
                <img src="@/assets/img/ilustration-modal.svg" />
            </template>
        </BaModal>

        <br /> <br />

        <h1>Pagination</h1>
        <BaPagination title="example" :items="50" :itemsPerPageOptions="[2,5,6]" v-model:currentPage="currentPage" @pagechanged="onPageChange" />

        <br /> <br /> <br />

        <h1>Multiple Page</h1>

        <MultipleSelect
          v-model="selectedValues" :items="selectedOptions" required
        />
        <div>
          <strong>Selected Values:</strong>
          <ul>
            <li v-for="value in selectedValues" :key="value">{{ value }}</li>
          </ul>
        </div>

        <br />

        <H1>rADIO</H1>

        <Radio v-model="selectedRadio" label="evan" layout="vertical" :options="radioOptions" />

        {{ selectedRadio }}

        <input type="radio">asd
 -->

    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


import BaButton from '@/library/button/BmButton.vue'
import MultipleSelect from '@/library/multiple/BmMultiple.vue'
import BaModal from '@/library/modal/BmModal.vue'
import BaPagination from '@/library/pagination/BmPagination.vue'
import Radio from '@/library/radio/BmRadio.vue'

export default defineComponent({
    components: {
        BaButton,
        BaModal,
        BaPagination,
        MultipleSelect,
        Radio
    },
    setup(){

        const leftButton = () => {
            console.log('asdad')
        }

        const radioOptions= ref([
             { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
            { label: 'Option 4', value: 'option4' },
            { label: 'Option 5', value: 'option5' },
            { label: 'Option 6', value: 'option6' },
        ])

        const selectedRadio = ref('')

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

        const currentPage = ref(1)

        const onPageChange = (page: any) => {
            currentPage.value = page;
        }

        const isModal = ref(false)

        const openModal = () => {
            isModal.value = !isModal.value
        }

        const closeModal = () => {
            isModal.value = !isModal.value
            console.log('12')
        }

        const data = ref({
            length: 150,
            currentPage: 1,
            data:[
                {
                    id: 1,
                    name: "evan"
                },
                {
                    id: 2,
                    name: "evan"
                },
                {
                    id: 3,
                    name: "evaasdn"
                },
                {
                    id: 4,
                    name: "evaasdasdn"
                },
                {
                    id: 5,
                    name: "evaasdasdasdn"
                },
                {
                    id: 6,
                    name: "evasdasdan"
                },
                {
                    id: 7,
                    name: "evasdasan"
                },
                {
                    id: 8,
                    name: "evasdsaan"
                },

                {
                    id: 9,
                    name: "evasdsaan"
                },
                {
                    id: 10,
                    name: "easdasvan"
                },

            ]
        })

        return {
            currentPage,
            isModal,
            closeModal,
            openModal,
            data,
            onPageChange,
            selectedOptions,
            selectedValues,
            radioOptions,
            selectedRadio,
            leftButton
        }

    }
})

</script>

<style lang="scss"scoped>

div {
    background: white;
}


</style>