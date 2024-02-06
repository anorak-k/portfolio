import meter1 from "../assets/img/skills-computer.png";
import meter2 from "../assets/img/skills-piano.png";
import meter3 from "../assets/img/skills-movie.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/laptop-vec-nobg.png"

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
                        <h2>About Me</h2>
                        <p>I have been working as a full-time software engineer for almost 3 years.<br></br> Currently a Computer Engineering grad student at NYU.</p>
                        <Carousel responsive={responsive} infinite={true} arrows = {false} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h3>Technology</h3>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h3>Music</h3>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h3>Movies</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      <img className="background-image-left" src={colorSharp}></img>
    </section>
  )
}
