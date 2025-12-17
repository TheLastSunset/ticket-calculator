import { createRouter, createWebHashHistory } from 'vue-router';
import type { Router } from 'vue-router';
import routes from './routes';

const router: Router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach(async (_to, _from, next) => {
  next();
});

export default router;
