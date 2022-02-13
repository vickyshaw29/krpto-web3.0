import { IRoute } from './interfaces';
import HomePage from './pages/HomePage';

const routes: IRoute[] = [
  {
    name: 'homePage',
    path: '/',
    exact: true,
    component: HomePage,
  },
];

export default routes;
