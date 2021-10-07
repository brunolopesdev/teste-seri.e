import './App.css';
import Banners from './components/Banners';
import Destaques from './components/Destaques';
import Footer from './components/Footer';
import Header from './components/Header';
import Novidades from './components/Novidades';

function App() {
  return (
    <>
      <Header />
      <Novidades />
      <Banners />
      <Destaques />
      <Footer />
    </>
  );
}

export default App;
