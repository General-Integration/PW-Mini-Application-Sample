import { defineStore } from 'pinia'

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        topBarTitle: '',
        visibleTopBarBgColor: true,
        visibleTopBarLeftIcon: true,
        visibleTopBarRightIcon: true
    }),
    actions: {
        setTitle(payload) {
            this.topBarTitle = payload;
        }
    }
})