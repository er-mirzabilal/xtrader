import React from "react";
import Explore from "./Explore";
import HorizontalCarousel from "./MainCruosel";
import LimitedLeftSide from "./LimitedLeftSide";

const LimitedEdtion = () => {
  return (
    <div className="martfury-container">
      <div className="row">
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-9 vc_col-xs-12">
          <div className="vc_column-inner">
            <LimitedLeftSide />
          </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-3 vc_col-md-12 vc_hidden-md vc_hidden-sm vc_col-xs-12 vc_hidden-xs">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div
                className="mf-banner-small  has-img  position-price-2"
                style={{}}
              >
                <div className="b-image">
                  <img
                    // src="images/transparent.png"
                    src="https://x4traders.com/wp-content/uploads/2020/06/b1.jpg"
                    data-original="https://x4traders.com/wp-content/uploads/2020/06/b1.jpg"
                    alt=""
                    className="lazy "
                    width={390}
                    height={193}
                  />
                </div>
                <a className="link" href="#" />
                <div className="box-price">
                  <span className="s-price">
                    20%
                    <br />
                    OFF
                  </span>
                </div>
                <div className="banner-content" style={{}}>
                  <h2 className="box-title">
                    Unio
                    <br />
                    Leather
                    <br />
                    Bags
                  </h2>{" "}
                  <p className="desc">
                    100% leather
                    <br />
                    handmade
                  </p>
                </div>
              </div>
              <div className="martfury-empty-space ">
                <div className="mf_empty_space_lg" style={{ height: 30 }} />
                <div className="mf_empty_space_md" style={{ height: 30 }} />
                <div className="mf_empty_space_xs" style={{ height: 30 }} />
              </div>
              <div
                className="mf-banner-small  has-img  position-price-1"
                style={{}}
              >
                <div className="b-image">
                  <img
                    // src="images/transparent.png"
                    src="https://x4traders.com/wp-content/uploads/2020/06/b2.jpg"
                    data-original="https://x4traders.com/wp-content/uploads/2020/06/b2.jpg"
                    alt=""
                    className="lazy "
                    width={390}
                    height={202}
                  />
                </div>
                <a className="link" href="#" />
                <div className="box-price">
                  <span className="s-price">
                    40%
                    <br />
                    OFF
                  </span>
                </div>
                <div className="banner-content" style={{}}>
                  <h2 className="box-title">
                    iPhone 6+
                    <br />
                    32Gb
                  </h2>{" "}
                  <p className="desc">
                    Experience with
                    <br />
                    best smartphone
                    <br />
                    on the world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedEdtion;
