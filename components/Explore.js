import HorizontalCarousel from "@/components/MainCruosel";
import React from "react";

const Explore = () => {
  return (
    <div>
      <div className="vc_row wpb_row vc_row-fluid">
        <div className="martfury-container">
          <div className="row">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="martfury-empty-space ">
                    <div className="mf_empty_space_lg" style={{ height: 52 }} />
                    <div className="mf_empty_space_md" style={{ height: 52 }} />
                    <div className="mf_empty_space_xs" style={{ height: 52 }} />
                  </div>
                  <div
                    className="mf-products-tabs mf-products-tabs-carousel woocommerce  header-style-1"
                    id="products-tabs645c8202e6bf8"
                  >
                    <div className="tabs-header">
                      <h2 className="tabs-cat__heading">
                        <span className="cat-title">Consumer Electronics</span>
                      </h2>{" "}
                      <div className="tabs-header-nav">
                        {" "}
                        <ul className="tabs-nav">
                          {" "}
                          <li>
                            <a href="#" data-href="recent" className="active">
                              New Arrivals
                            </a>
                          </li>{" "}
                          <li>
                            <a href="#" data-href="best_selling" className="">
                              Best Seller
                            </a>
                          </li>{" "}
                          <li>
                            <a href="#" data-href="top_rated" className="">
                              Most Popular
                            </a>
                          </li>{" "}
                        </ul>{" "}
                        <a className="link" href="#">
                          View All
                        </a>{" "}
                      </div>
                    </div>
                    <div>
                      {/* <div className="mf-vc-loading">
                                  <div className="mf-vc-loading--wrapper" />
                                </div> */}
                      <div
                        style={{
                          // backgroundColor: "green",
                          width: "100%",
                        }}
                      >
                        <HorizontalCarousel />
                      </div>
                    </div>
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

export default Explore;
