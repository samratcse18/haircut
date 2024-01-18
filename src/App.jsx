import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import Story from "./component/Story";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Service from "./component/Service";
import Quality from "./component/Quality";

function App() {
  const { ref: footer, inView: footerView } = useInView({ threshold: 0.8 });
  const [footerAnimate, setFooterAnimate] = useState();
  useEffect(() => {
    footerView
      ? setFooterAnimate("brightness-100")
      : setFooterAnimate("brightness-0");
  }, [footerView]);
  return (
    <>
      <Navbar />
      <Header />
      <Story />
      <Service />
      <Quality />
      <div
        className="mb-[500px] lg:mb-[350px] opacity-0"
        ref={footer}
        id="Contact"
      ></div>
      <div className="bg-black fixed w-full bottom-0 -z-50 pt-5">
        <div className={`${footerAnimate} duration-500`}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
