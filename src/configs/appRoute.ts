import pages from '@pages';
import route from './route';
import { appRouteItemTypes } from './appRoute.type';

const appRoute: Array<appRouteItemTypes> = [
  {
    hide: false,
    page: pages.Home,
    path: route.home,
  },
];

export default appRoute;
