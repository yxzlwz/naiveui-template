export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/user/login/',
    name: 'user-login',
    component: () => import('../pages/user/login.vue'),
  },
  {
    path: '/yiyan/show/',
    name: 'yiyan-show',
    component: () => import('../pages/yiyan/show.vue'),
  },
  {
    path: '/yiyan/create/',
    name: 'yiyan-create',
    component: () => import('../pages/yiyan/create.vue'),
    meta: {
      showSider: true,
    },
  },
];

export default routes;
