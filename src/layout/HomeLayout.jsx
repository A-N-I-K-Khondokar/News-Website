import { Outlet } from "react-router";
import Home from "../components/Home";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Home></Home>
      </header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <section className="left"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
