import route from './route';
import { appRouteItemTypes } from './appRoute.type';
import pages from '../pages';

const appRoute: Array<appRouteItemTypes> = [
  {
    hide: false,
    page: pages.Home,
    path: route.home,
  },
];

export default appRoute;
