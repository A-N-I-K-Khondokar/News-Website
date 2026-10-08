import marqueeModule from "react-fast-marquee";

const Marquee = marqueeModule.default;

const LatestNews = () => {
  return (
    <div className="flex items-center my-5 w-8/12 mx-auto justify-between bg-base-300 rounded-2xl">
      <button className="btn btn-secondary px-6">Latest</button>
      <Marquee className="py-2" pauseOnHover={true}>
        <span className="mr-2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, cum.
        </span>
        <span className="mr-2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, cum.
        </span>
        <span className="mr-2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, cum.
        </span>
      </Marquee>
    </div>
  );
};

export default LatestNews;
