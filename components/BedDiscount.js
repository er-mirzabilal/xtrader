import React from "react";

const BedDiscount = () => {
  return (
    <div>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="martfury-container">
          <div className="row">
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div
                    className="mf-banner-large  layout-2 "
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    <div
                      className="featured-image"
                      style={{
                        backgroundImage: "url(images/b7.jpg)",
                      }}
                     />
                     <a className="link-all" href="#" />
                     <div className="row banner-row">
                      <div className="col-md-offset-1 col-md-3 col-sm-6 col-xs-12 col-banner-content">
                        <div className="banner-content">
                          <h2 className="box-title">
                            FABRIC BED
                            <br />
                            DISCOUNT{" "}
                            <strong className="r-price">25% OFF</strong>
                          </h2>{" "}
                          <p className="desc">
                            Strong mattress support with 10 wood
                            <br />
                            prevents sagging and increases mattress
                          </p>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-12 col-banner-price">
                        <div className="banner-price">
                          <span className="sale-price">$260.50</span>{" "}
                          <span className="s-price">$219.05</span>{" "}
                          <a className="link" href="#">
                            Shop Now
                          </a>
                        </div>
                      </div>
                      <div className="col-md-5 col-sm-12 col-xs-12 col-banner-image">
                        <div className="banner-image" />
                      </div>
                    </div>
                  </div>
                  <div className="martfury-empty-space ">
                    <div className="mf_empty_space_lg" style={{ height: 30 }} />
                    <div className="mf_empty_space_md" style={{ height: 30 }} />
                    <div className="mf_empty_space_xs" style={{ height: 30 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div
                    className="mf-banner-medium  layout-5 has-img "
                    style={{}}
                  >
                    <a className="link-all" href="#" />
                    <div className="banner-content" style={{}}>
                      <div className="s-content">
                        <h2 className="title">
                          <strong>iPhone X 128GB</strong>
                          <br />
                          Retina Display
                        </h2>{" "}
                        <div className="desc">
                          Discount <strong className="r-price">25%</strong> Off
                        </div>
                      </div>
                      <div className="link-box">
                        <a className="link" href="#">
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="banner-image">
                      <img
                        src="images/transparent.png"
                        data-original="https://x4traders.com/wp-content/uploads/2018/08/b6.jpg"
                        alt=""
                        className="lazy "
                        width={530}
                        height={245}
                      />
                    </div>
                  </div>
                  <div className="martfury-empty-space ">
                    <div className="mf_empty_space_lg" style={{ height: 30 }} />
                    <div className="mf_empty_space_md" style={{ height: 30 }} />
                    <div className="mf_empty_space_xs" style={{ height: 30 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedDiscount;
