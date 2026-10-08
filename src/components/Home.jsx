import { format } from "date-fns";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 ">
      <img className="w-87" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold">
        {format(new Date(), "EEEE , MMMM dd yyyy")}
      </p>
    </div>
  );
};

export default Home;
