import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import { router } from './route/router';

const App = () => {
  return (
    <>
      <Header />

      <div className='min-h-screen'>
        <Routes>
          {
            router.map(route => (
              <Route path={route.path} element={route.element} />
            ))
          }
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
