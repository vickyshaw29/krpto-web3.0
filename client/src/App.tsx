import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@mui/styles';
import ErrorBoundary from './components/atoms/error/ErrorBoundary';
import theme from './styles/mui/theme';
import { Header } from './components/molecules';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <ErrorBoundary> */}
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={(props: RouteComponentProps<any>) => (
                <route.component {...props} {...route.props} />
              )}
            />
          ))}
          {/* </ErrorBoundary> */}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
