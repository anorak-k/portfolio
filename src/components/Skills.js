import meter1 from "../assets/img/skills-computer.png";
import meter2 from "../assets/img/skills-piano.png";
import meter3 from "../assets/img/skills-movie.png";
import cloud1 from "../assets/img/cloud.png";
import cloud2 from "../assets/img/cloud(1).png";
import cloud3 from "../assets/img/cloud(2).png";
import cloudSm1 from "../assets/img/cloud-small.png";
import cloudSm2 from "../assets/img/cloud-small(1).png";
import cloudSm3 from "../assets/img/cloud-small(2).png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/laptop-vec-nobg.png"

const aboutMe = "I'm currently navigating the hustle and bustle of New York City while diving into the world of Computer Engineering at NYU. Originally from India, I've swapped the code chaos for the city lights. Before my NYU days, I was on a tech adventure as a full-stack software developer and consultant at Thoughtworks. I've tackled everything from backend wizardry to frontend finesse, ensuring that every line of code is as sharp as the skyline. When I'm not behind my laptop screen, you'll find me at the piano, playing melodies that sync with the rhythm of the city. And I love movies – whether it's an epic sci-fi or a classic drama, count me in for a movie marathon anytime. I believe in the power of code to build things that uplift people's lives, even if it's just a little bit. Whether it's creating innovative solutions or contributing to projects with a positive impact, I'm all about using technology to make a meaningful difference. Join me on this coding journey where every keystroke is a step towards creating a better, brighter world."

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <div className="skill-h">
                          <h2>About Me</h2>
                        </div>
                        <div className="skill-p">
                          <p>{aboutMe}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* <img className="cloud-sm1" src={cloudSm1}></img>
      <img className="cloud-sm2" src={cloudSm2}></img>
      <img className="cloud-sm3" src={cloudSm3}></img> */}
      {/* <img className="background-image-left" src={colorSharp}></img> */}
    </section>
  )
}
