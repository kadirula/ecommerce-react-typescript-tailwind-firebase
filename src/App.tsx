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
            router.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))
          }
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
