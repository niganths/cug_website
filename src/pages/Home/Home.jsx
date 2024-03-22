import Background from "../../components/designs/Background";
import socials from "../../util/Social";
import man from "../../assets/man.svg";
import Button from "../../components/Button/Button.jsx";
import "./Home.css";
import HomeCard from "../../components/HomeCard/Card.jsx";
import Img from "../../assets/gifs/giphy.gif";
import Img1 from "../../assets/gifs/Animation - 1708507904220.gif";

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
      <section className="home-hero">
        <div
          className="home-hero-image"
          style={{ backgroundImage: `url(${man})` }}
        ></div>
        <div className="home-hero-content">
          <span className="home-hero-content__h1" data-aos="fade-right">
            Cloud Users Group
          </span>
          <span className="home-hero-content__h2" data-aos="fade-right">
            Kongu Engineering College
          </span>
          <span className="home-hero-content__buttons" data-aos="zoom-in">
            <Button text="Know More" color="light-blue" link="/about" />
            <Button text="Contact Us" color="light-blue" link="/contact" />
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
      </section>
      <section style={{ position: "absolute" }}>
        <div className="flex justify-around mb-12">
          <img
            src={Img}
            className="w-64 h-auto object-contain mr-10 rounded-full"
            alt="object-profile"
          />
          <HomeCard text={homecontent1.text} content={homecontent1.content} />
        </div>
        <div className="flex justify-around mb-12">
          <HomeCard text={homecontent2.text} content={homecontent2.content} />
          <img
            src={Img1}
            className="w-64 h-auto object-contain mr-4 "
            alt="object-profile"
          />
        </div>
        <div className="flex justify-around">
          <img
            src={Img}
            className="w-64 h-auto object-contain mr-4"
            alt="object-profile"
          />
          <HomeCard text={homecontent3.text} content={homecontent3.content} />
        </div>
      </section>
    </>
  );
}

export default Home;
