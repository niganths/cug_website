import Background from "../../components/designs/Background";
import socials from "../../util/Social";
import man from "../../assets/man.svg";
import Button from "../../components/Button/Button.jsx";
import "./Home.css";
import HomeCard from "../../components/HomeCard/Card.jsx";
import Img from "../../assets/gifs/gif1.gif";
import Img1 from "../../assets/gifs/gif2.gif";
import Img2 from "../../assets/gifs/gif3.gif";
// import Footer from "../../components/footer/Footer.jsx";

import {
  homecontent1,
  homecontent2,
  homecontent3,
} from "../../util/homecontent.js";
function Home() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Background data="home" />
      </div>
      <div className="home-hero">
        <div
          className="home-hero-image"
          style={{ backgroundImage: `url(${man})` }}
        ></div>
        <div className="home-hero-content" >
          <span className="home-hero-content__h1" data-aos="fade-right">
            Cloud Users Group
          </span>
          <span className="home-hero-content__h2" data-aos="fade-right">
             Kongu Engineering College
          </span>
          <span className="home-hero-content__buttons" data-aos="zoom-in">
            <Button text="Know More" color="light-blue" link="/about" />
            <Button text="Events" color="light-blue" link="/contact" />
          </span>
          <div className="home-hero-content-socials" data-aos="fade-up">
            {socials.map((social, id) => (
              <a
                href={social.link}
                title={social.text + "/" + social.username}
                target="_blank"
                rel="noreferrer"
                key={id}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <button
          className="home-hero-scroll-btn"
          onClick={() => {
            window.scrollTo(0, 2 * window.innerHeight);
          }}
        ></button>
      </div>
      <div style={{ position: "absolute" }} className="w-full">
  <div className="flex flex-wrap justify-center mb-12">
    <div className="flex items-center">
      <img
        src={Img}
        className="w-64 h-auto object-contain mr-4"
        alt="object-profile"
      />
      <HomeCard
        text={homecontent1.text}
        content={homecontent1.content}
        className="w-full sm:w-auto"
      />
    </div>
  </div>

  <div className="flex flex-wrap justify-center mb-12">
    <div className="flex items-center">
      <HomeCard
        text={homecontent2.text}
        content={homecontent2.content}
        className="w-full sm:w-auto"
      />
      <img
        src={Img1}
        className="w-64 h-auto object-contain ml-4"
        alt="object-profile"
      />
    </div>
  </div>

  <div className="flex flex-wrap justify-center mb-12">
    <div className="flex items-center">
      <img
        src={Img2}
        className="w-64 h-auto object-contain mr-4"
        alt="object-profile"
      />
      <HomeCard
        text={homecontent3.text}
        content={homecontent3.content}
        className="w-full sm:w-auto"
      />
    </div>
  </div>
</div>
{/* <section style={{marginTop:"150px"}}>
        <Footer/>
      </section> */}

    </>
  );
}

export default Home;
