import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import destination1 from "../Images/Agra.jpg";
import destination2 from "../Images/Paris.jpg";
import destination3 from "../Images/USA.jpg";
import destination4 from "../Images/Rome.jpg";
import destination5 from "../Images/Venice.jpg";
import destination6 from "../Images/London.jpg";
import destination7 from "../Images/China.jpg";
export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        <div>
          <div className="container7">
            <div className="row">
              <div className="col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={destination1}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 className="card-title">AGRA</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container7">
            <div className="row">
              <div className="col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={destination2}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Paris</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="container7">
            <div className="row">
              <div className="col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={destination3}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 className="card-title">USA</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container7">
            <div className="row">
              <div className="col-md-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src={destination4}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 className="card-title"></h5>ROME
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div className="container7">
              <div className="row">
                <div className="col-md-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={destination5}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 className="card-title">Venice</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div className="container7">
              <div className="row">
                <div className="col-md-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={destination6}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 className="card-title">LONDON</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div className="container7">
              <div className="row">
                <div className="col-md-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={destination7}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 className="card-title">CHINA</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
