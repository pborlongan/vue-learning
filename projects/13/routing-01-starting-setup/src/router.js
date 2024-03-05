import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList, alias: '/' }, can be done like this as well, instead of the one above.
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    }, //our-domain.com/teams => ...
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehaviour(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition; //returns where you should scroll (it scrolls back to where you were)
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  if (to.meta.needsAuth) {
    console.log('needs auth!');
    next();
  } else {
    next();
  }
});

router.afterEach(function (to, from) {
  //sending analytics data,
  console.log('global aftereach');
  console.log(to, from);
});

export default router;
