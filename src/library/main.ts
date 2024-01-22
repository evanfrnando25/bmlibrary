import type { App } from 'vue';
import { BmButton, BmModal, BmMultiple , BmRadioGroup,BmPagination } from "@/library";
import '@/assets/scss/main.scss'

export default {
  install: (app: App) => {
    app.component('BmButton', BmButton);
    app.component('BmModal', BmModal);
    app.component('BmMultiple', BmMultiple)
    app.component('BmRadioGroup', BmRadioGroup)
    app.component('BmPagination', BmPagination)
  }
};

export { BmButton, BmModal, BmMultiple , BmRadioGroup,BmPagination};


