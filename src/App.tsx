import { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import appRoute from '@configs/appRoute';

const App = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
      <Switch>
        {appRoute.map(({ page: Page, hide, path }) => !hide && (
          <Route component={Page} exact key={path} path={path} />
        ))}
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default App;
