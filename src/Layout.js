import { Outlet, Link } from "react-router-dom";
import MainNav from './components/MainNav';
import {Footer} from './components/Footer';
import './App.css';

const Layout = () => {
  return (
    <>
      <MainNav />

      <Outlet />

      <Footer />
    </>

    

  )
};

export default Layout;