import { RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header';
import { router } from './route/router';
const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
