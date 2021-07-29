import Vue from 'vue';
import VueRouter from 'vue-router';

import Header from '../components/Header.vue';
// import User from '../components/User/User.vue';
import HelloUser from '../components/User/HelloUser.vue';
import UserInfo from '../components/User/UserInfo.vue';
import MainPage from '../components/MainPage.vue';
import Error from '../components/Error.vue';
// import Desktop from '../components/deviceDetect/Desktop.vue';
// import Mobile from '../components/deviceDetect/Mobile.vue';

// import checkDevice from '../utils/checkDevice';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'main',
      path: '/',
      component: MainPage,
      children: [
        {
          path: '',
          components: {
            header: Header,
            device: () => import('../utils/checkDevice'),
          },
        },
      ],
    },

    {
      name: 'user',
      path: '/user/:id',
      component: () => import('../components/User/User.vue'),
      children: [
        {
          name: 'user.index',
          path: '',
          component: HelloUser,
        },
        {
          name: 'info',
          path: 'info',
          components: { default: HelloUser, info: UserInfo },
        },
      ],
    },

    {
      name: 'error',
      path: '*',
      component: Error,
    },
  ],
});

export default router;
