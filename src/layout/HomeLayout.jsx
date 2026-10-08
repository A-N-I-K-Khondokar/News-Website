import { Outlet } from "react-router";
import Home from "../components/Home";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Home></Home>
      </header>
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
