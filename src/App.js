import { Route, Routes } from 'react-router-dom';
import style from './style.module.scss';
import AllRoutes from './routes';
import Layout from './Layout'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className={style.mainContainer}>
      <Routes>
        <Route path='/' element={<Layout />}>
          {AllRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                key={index}
                element={<route.component />}
              />
            )
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
