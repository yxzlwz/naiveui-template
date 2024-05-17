import { defineStore } from 'pinia';
import naiveui from '../plugins/naiveui';
import { _ } from '../i18n';

export const useStore = defineStore('__default__', {
  state: () => ({
    theme: 'light',
    locale: 'zh',
    user: {},
  }),
  actions: {
    switchTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    },
    setLocale(locale: string) {
      this.locale = locale;
      naiveui.message.info(_('locale.switch'));
    },
    logout() {
      this.user = {};
    },
  },
  getters: {
    loggedIn(state) {
      return state.user.id ? true : false;
    },
  },
  persist: true,
});

export const useMenuStore = defineStore('menu', {
  state: () => ({
    sidebar_menu: [],
  }),
  actions: {
    setSidebarMenu(menu: any) {
      this.sidebar_menu = menu;
    },
  },
  persist: false,
});

export default useStore;
