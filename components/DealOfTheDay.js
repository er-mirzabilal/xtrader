import React, { useEffect, useState } from "react";

const DealOfTheDay = () => {
  const [time, setTime] = useState("24:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        // Split the time into hours, minutes, and seconds
        const [hours, minutes, seconds] = prevTime.split(":").map(Number);

        // Calculate the total number of seconds
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        // Decrease the total seconds by 1
        totalSeconds--;

        if (totalSeconds < 0) {
          // Time is complete, remove the box or perform any other action
          clearInterval(interval);
          return prevTime;
        }

        // Calculate the new hours, minutes, and seconds
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;

        // Format the new time
        return `${newHours} : ${String(newMinutes).padStart(2, "0")} : ${String(
          newSeconds
        ).padStart(2, "0")}`;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <div
        className="mf-product-deals-day woocommerce  type-carousel style-1 product-type-sale mf-products-carousel"
        id="deals-of-day645c8202c33af"
      >
        <div className="cat-header">
          <div className="header-content">
            {" "}
            <h2 className="cat-title">Deals of the day</h2>{" "}
            <div className="header-countdown">
              <span className="ends-text">Ends in : {time}</span>
              <div className="martfury-countdown" data-expire={65406} />
            </div>{" "}
          </div>{" "}
          <div className="header-link">
            <a className="" href="#">
              View All
            </a>
          </div>
        </div>
        <div className="products-content">
          <ul className="products columns-6">
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-96 status-publish first instock product_cat-books-office product_tag-t-shirt product_tag-wireless has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/grand-slam-indoor-of-show-jumping-novel/">
                    <img
                      width={300}
                      height={300}
                      src="images/3a-300x300.jpg"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/3a-300x300.jpg 300w, images/3a-150x150.jpg 150w, images/3a-768x768.jpg 768w, images/3a-370x370.jpg 370w, images/3a-600x600.jpg 600w, images/3a-100x100.jpg 100w, images/3a.jpg 1000w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>22
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=96"
                      data-quantity={1}
                      data-title="Grand Slam Indoor Of Show Jumping Novel"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={96}
                      data-product_sku="AB123456787"
                      aria-label="Add “Grand Slam Indoor Of Show Jumping Novel” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/grand-slam-indoor-of-show-jumping-novel/"
                      data-id={96}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=96"
                      data-quantity={1}
                      data-product_id={96}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Grand Slam Indoor Of Show Jumping Novel” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=96"
                        data-product_id={96}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Grand Slam Indoor Of Show Jumping Novel”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Grand Slam Indoor Of Show Jumping Novel"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        32.39
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        41.27
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/grand-slam-indoor-of-show-jumping-novel/">
                    Grand Slam Indoor Of Show Jumping Novel
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                    </span>
                  </div>
                  <span className="count">02</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-90 status-publish instock product_cat-furniture product_cat-garden-kitchen product_tag-sofa has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/korea-long-sofa-fabric-in-blue-navy-color/">
                    <img
                      width={300}
                      height={300}
                      src="images/5a-300x300.jpg"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/5a-300x300.jpg 300w, images/5a-150x150.jpg 150w, images/5a-768x768.jpg 768w, images/5a-370x370.jpg 370w, images/5a-600x600.jpg 600w, images/5a-100x100.jpg 100w, images/5a.jpg 1000w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>16
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=90"
                      data-quantity={1}
                      data-title="Korea Long Sofa Fabric In Blue Navy Color"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={90}
                      data-product_sku="AB123456785"
                      aria-label="Add “Korea Long Sofa Fabric In Blue Navy Color” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/korea-long-sofa-fabric-in-blue-navy-color/"
                      data-id={90}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=90"
                      data-quantity={1}
                      data-product_id={90}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Korea Long Sofa Fabric In Blue Navy Color” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=90"
                        data-product_id={90}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Korea Long Sofa Fabric In Blue Navy Color”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Korea Long Sofa Fabric In Blue Navy Color"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        567.99
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        679.80
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/korea-long-sofa-fabric-in-blue-navy-color/">
                    Korea Long Sofa Fabric In Blue Navy Color
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 4.00 out of 5"
                  >
                    <span style={{ width: "80%" }}>
                      Rated <strong className="rating">4.00</strong> out of 5
                    </span>
                  </div>
                  <span className="count">02</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-37 status-publish instock product_cat-type-drying-clothes product_cat-type-horizontal product_cat-type-vertical product_cat-washing-machines product_tag-washer has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/lg-white-front-load-steam-washer/">
                    <img
                      width={300}
                      height={300}
                      src="images/H7634037c8d7c479db05e1bb167682841k.jpg_960x960-300x300.webp"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/H7634037c8d7c479db05e1bb167682841k.jpg_960x960-300x300.webp 300w, images/H7634037c8d7c479db05e1bb167682841k.jpg_960x960-150x150.webp 150w, images/H7634037c8d7c479db05e1bb167682841k.jpg_960x960-768x768.webp 768w, images/H7634037c8d7c479db05e1bb167682841k.jpg_960x960-370x370.webp 370w, images/H7634037c8d7c479db05e1bb167682841k.jpg_960x960-600x600.webp 600w, images/H7634037c8d7c479db05e1bb167682841k.jpg_960x960-100x100.webp 100w, images/H7634037c8d7c479db05e1bb167682841k.jpg_960x960.webp 960w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>28
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=37"
                      data-quantity={1}
                      data-title="Front Load Steam Washer"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={37}
                      data-product_sku="XZ2486357901"
                      aria-label="Add “Front Load Steam Washer” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/lg-white-front-load-steam-washer/"
                      data-id={37}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=37"
                      data-quantity={1}
                      data-product_id={37}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Front Load Steam Washer” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=37"
                        data-product_id={37}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Front Load Steam Washer”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Front Load Steam Washer"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        1,025.50
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        1,422.70
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/lg-white-front-load-steam-washer/">
                    Front Load Steam Washer
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                    </span>
                  </div>
                  <span className="count">02</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-22 status-publish instock product_cat-accessories product_cat-consumer-electrics product_tag-printer product_tag-sneaker has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/dji-phantom-4-quadcopter-camera-white/">
                    <img
                      width={300}
                      height={300}
                      src="images/H96479ecd58e8431cb37c4578881ca069d.jpg_960x960-300x300.webp"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/H96479ecd58e8431cb37c4578881ca069d.jpg_960x960-300x300.webp 300w, images/H96479ecd58e8431cb37c4578881ca069d.jpg_960x960-150x150.webp 150w, images/H96479ecd58e8431cb37c4578881ca069d.jpg_960x960-768x768.webp 768w, images/H96479ecd58e8431cb37c4578881ca069d.jpg_960x960-370x370.webp 370w, images/H96479ecd58e8431cb37c4578881ca069d.jpg_960x960-600x600.webp 600w, images/H96479ecd58e8431cb37c4578881ca069d.jpg_960x960-100x100.webp 100w, images/H96479ecd58e8431cb37c4578881ca069d.jpg_960x960.webp 960w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>22
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=22"
                      data-quantity={1}
                      data-title="Quadcopter Camera"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={22}
                      data-product_sku="MF990081234"
                      aria-label="Add “Quadcopter Camera” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/dji-phantom-4-quadcopter-camera-white/"
                      data-id={22}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=22"
                      data-quantity={1}
                      data-product_id={22}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Quadcopter Camera” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=22"
                        data-product_id={22}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Quadcopter Camera”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Quadcopter Camera"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        945.99
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        1,207.15
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/dji-phantom-4-quadcopter-camera-white/">
                    Quadcopter Camera
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 4.33 out of 5"
                  >
                    <span style={{ width: "86.6%" }}>
                      Rated <strong className="rating">4.33</strong> out of 5
                    </span>
                  </div>
                  <span className="count">03</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-4595 status-publish instock product_cat-decoration product_cat-furniture product_cat-garden-kitchen product_tag-sneaker product_tag-virtual has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/simple-plastice-chair-in-white-color/">
                    <img
                      width={300}
                      height={300}
                      src="images/Hc2f4aad6349f40eda79b80fc17407f63T.jpg_960x960-300x300.webp"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/Hc2f4aad6349f40eda79b80fc17407f63T.jpg_960x960-300x300.webp 300w, images/Hc2f4aad6349f40eda79b80fc17407f63T.jpg_960x960-150x150.webp 150w, images/Hc2f4aad6349f40eda79b80fc17407f63T.jpg_960x960-768x768.webp 768w, images/Hc2f4aad6349f40eda79b80fc17407f63T.jpg_960x960-370x370.webp 370w, images/Hc2f4aad6349f40eda79b80fc17407f63T.jpg_960x960-600x600.webp 600w, images/Hc2f4aad6349f40eda79b80fc17407f63T.jpg_960x960-100x100.webp 100w, images/Hc2f4aad6349f40eda79b80fc17407f63T.jpg_960x960.webp 800w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>25
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=4595"
                      data-quantity={1}
                      data-title="Plastic Chair"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={4595}
                      data-product_sku="WP9017332225"
                      aria-label="Add “Plastic Chair” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/simple-plastice-chair-in-white-color/"
                      data-id={4595}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=4595"
                      data-quantity={1}
                      data-product_id={4595}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Plastic Chair” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=4595"
                        data-product_id={4595}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Plastic Chair”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Plastic Chair"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        41.99
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        55.65
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/simple-plastice-chair-in-white-color/">
                    Plastic Chair
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 4.50 out of 5"
                  >
                    <span style={{ width: "90%" }}>
                      Rated <strong className="rating">4.50</strong> out of 5
                    </span>
                  </div>
                  <span className="count">02</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-280 status-publish last outofstock product_cat-decoration product_cat-garden-kitchen product_tag-garden product_tag-kitchen has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/letter-printed-cushion-cover-cotton/">
                    <img
                      width={300}
                      height={300}
                      src="images/Hb5ae3813ef064736a9079396f96a1486u.jpg_960x960-300x300.webp"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/Hb5ae3813ef064736a9079396f96a1486u.jpg_960x960-300x300.webp 300w, images/Hb5ae3813ef064736a9079396f96a1486u.jpg_960x960-150x150.webp 150w, images/Hb5ae3813ef064736a9079396f96a1486u.jpg_960x960-768x768.webp 768w, images/Hb5ae3813ef064736a9079396f96a1486u.jpg_960x960-370x370.webp 370w, images/Hb5ae3813ef064736a9079396f96a1486u.jpg_960x960-600x600.webp 600w, images/Hb5ae3813ef064736a9079396f96a1486u.jpg_960x960-100x100.webp 100w, images/Hb5ae3813ef064736a9079396f96a1486u.jpg_960x960.webp 960w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="out-of-stock ribbon">Out Of Stock</span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="https://x4traders.com/product/letter-printed-cushion-cover-cotton/"
                      data-quantity={1}
                      data-title="Printed Cushion Cover Cotton"
                      className="button wp-element-button product_type_simple"
                      data-product_id={280}
                      data-product_sku="VS75560341230"
                      aria-label="Read more about “Printed Cushion Cover Cotton”"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Read more"
                      />
                      <span className="add-to-cart-text">Read more</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/letter-printed-cushion-cover-cotton/"
                      data-id={280}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=280"
                      data-quantity={1}
                      data-product_id={280}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Printed Cushion Cover Cotton” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=280"
                        data-product_id={280}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Printed Cushion Cover Cotton”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Printed Cushion Cover Cotton"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        39.59
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        55.17
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/letter-printed-cushion-cover-cotton/">
                    Printed Cushion Cover Cotton
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                    </span>
                  </div>
                  <span className="count">01</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-297 status-publish first instock product_cat-health-beauty product_cat-skin-care product_tag-garden product_tag-kitchen has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/aveeno-moisturizing-body-shower-450ml/">
                    <img
                      width={300}
                      height={300}
                      src="images/H7a7163a954e34053867fa21744575e10p.jpg_960x960-300x300.webp"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/H7a7163a954e34053867fa21744575e10p.jpg_960x960-300x300.webp 300w, images/H7a7163a954e34053867fa21744575e10p.jpg_960x960-150x150.webp 150w, images/H7a7163a954e34053867fa21744575e10p.jpg_960x960-768x768.webp 768w, images/H7a7163a954e34053867fa21744575e10p.jpg_960x960-370x370.webp 370w, images/H7a7163a954e34053867fa21744575e10p.jpg_960x960-600x600.webp 600w, images/H7a7163a954e34053867fa21744575e10p.jpg_960x960-100x100.webp 100w, images/H7a7163a954e34053867fa21744575e10p.jpg_960x960.webp 800w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>27
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=297"
                      data-quantity={1}
                      data-title="Moisturizing Body Shower"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={297}
                      data-product_sku="YI1133569247-6"
                      aria-label="Add “Moisturizing Body Shower” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/aveeno-moisturizing-body-shower-450ml/"
                      data-id={297}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=297"
                      data-quantity={1}
                      data-product_id={297}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Moisturizing Body Shower” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=297"
                        data-product_id={297}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Moisturizing Body Shower”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Moisturizing Body Shower"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        45.90
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        62.60
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/aveeno-moisturizing-body-shower-450ml/">
                    Moisturizing Body Shower
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 2.00 out of 5"
                  >
                    <span style={{ width: "40%" }}>
                      Rated <strong className="rating">2.00</strong> out of 5
                    </span>
                  </div>
                  <span className="count">01</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-296 status-publish instock product_cat-health-beauty product_tag-beauty product_tag-care has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/nyx-beauty-couton-pallete-makeup-12-pantone/">
                    <img
                      width={300}
                      height={300}
                      src="images/Ha5ab95b9cab949009e21829f431d275bw.jpg_960x960-300x300.webp"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/Ha5ab95b9cab949009e21829f431d275bw.jpg_960x960-300x300.webp 300w, images/Ha5ab95b9cab949009e21829f431d275bw.jpg_960x960-150x150.webp 150w, images/Ha5ab95b9cab949009e21829f431d275bw.jpg_960x960-768x768.webp 768w, images/Ha5ab95b9cab949009e21829f431d275bw.jpg_960x960-370x370.webp 370w, images/Ha5ab95b9cab949009e21829f431d275bw.jpg_960x960-600x600.webp 600w, images/Ha5ab95b9cab949009e21829f431d275bw.jpg_960x960-100x100.webp 100w, images/Ha5ab95b9cab949009e21829f431d275bw.jpg_960x960.webp 960w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>30
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=296"
                      data-quantity={1}
                      data-title="Pallete Makeup"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={296}
                      data-product_sku="CE1133569247-5"
                      aria-label="Add “Pallete Makeup” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/nyx-beauty-couton-pallete-makeup-12-pantone/"
                      data-id={296}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=296"
                      data-quantity={1}
                      data-product_id={296}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Pallete Makeup” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=296"
                        data-product_id={296}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Pallete Makeup”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Pallete Makeup"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        69.90
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        99.60
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/nyx-beauty-couton-pallete-makeup-12-pantone/">
                    Pallete Makeup
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 4.00 out of 5"
                  >
                    <span style={{ width: "80%" }}>
                      Rated <strong className="rating">4.00</strong> out of 5
                    </span>
                  </div>
                  <span className="count">01</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-295 status-publish instock product_cat-equipments product_cat-health-beauty product_tag-beauty product_tag-care has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/baxter-care-hair-kit-for-bearded-mens/">
                    <img
                      width={300}
                      height={300}
                      src="images/HTB1AYnkdjfguuRjy1zeq6z0KFXaL.jpg_960x960-1-300x300.webp"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/HTB1AYnkdjfguuRjy1zeq6z0KFXaL.jpg_960x960-1-300x300.webp 300w, images/HTB1AYnkdjfguuRjy1zeq6z0KFXaL.jpg_960x960-1-150x150.webp 150w, images/HTB1AYnkdjfguuRjy1zeq6z0KFXaL.jpg_960x960-1-768x768.webp 768w, images/HTB1AYnkdjfguuRjy1zeq6z0KFXaL.jpg_960x960-1-370x370.webp 370w, images/HTB1AYnkdjfguuRjy1zeq6z0KFXaL.jpg_960x960-1-600x600.webp 600w, images/HTB1AYnkdjfguuRjy1zeq6z0KFXaL.jpg_960x960-1-100x100.webp 100w, images/HTB1AYnkdjfguuRjy1zeq6z0KFXaL.jpg_960x960-1.webp 960w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>25
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=295"
                      data-quantity={1}
                      data-title="Hair Kit For Bearded Mens"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={295}
                      data-product_sku="PU1133569999"
                      aria-label="Add “Hair Kit For Bearded Mens” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/baxter-care-hair-kit-for-bearded-mens/"
                      data-id={295}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=295"
                      data-quantity={1}
                      data-product_id={295}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Hair Kit For Bearded Mens” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=295"
                        data-product_id={295}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Hair Kit For Bearded Mens”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Hair Kit For Bearded Mens"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        93.59
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        125.17
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/baxter-care-hair-kit-for-bearded-mens/">
                    Hair Kit For Bearded Mens
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                    </span>
                  </div>
                  <span className="count">01</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-293 status-publish instock product_cat-health-beauty product_cat-skin-care product_tag-speaker product_tag-television has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/set-30-piece-korea-startskin-natural-mask/">
                    <img
                      width={300}
                      height={300}
                      src="images/Ha653f8eb75474acaa7d51c3fd4347f735.jpg_960x960-300x300.webp"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/Ha653f8eb75474acaa7d51c3fd4347f735.jpg_960x960-300x300.webp 300w, images/Ha653f8eb75474acaa7d51c3fd4347f735.jpg_960x960-150x150.webp 150w, images/Ha653f8eb75474acaa7d51c3fd4347f735.jpg_960x960-768x768.webp 768w, images/Ha653f8eb75474acaa7d51c3fd4347f735.jpg_960x960-370x370.webp 370w, images/Ha653f8eb75474acaa7d51c3fd4347f735.jpg_960x960-600x600.webp 600w, images/Ha653f8eb75474acaa7d51c3fd4347f735.jpg_960x960-100x100.webp 100w, images/Ha653f8eb75474acaa7d51c3fd4347f735.jpg_960x960.webp 960w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>35
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=293"
                      data-quantity={1}
                      data-title="Natural Mask"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={293}
                      data-product_sku="YI1133569889"
                      aria-label="Add “Natural Mask” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/set-30-piece-korea-startskin-natural-mask/"
                      data-id={293}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=293"
                      data-quantity={1}
                      data-product_id={293}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Natural Mask” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=293"
                        data-product_id={293}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Natural Mask”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Natural Mask"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        32.75
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        50.69
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/set-30-piece-korea-startskin-natural-mask/">
                    Natural Mask
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                    </span>
                  </div>
                  <span className="count">01</span>
                </div>
              </div>
            </li>
            <li className="col-xs-6 col-sm-4 col-md-3 col-lg-2 un-6-cols product type-product post-292 status-publish instock product_cat-health-beauty product_cat-makeup product_tag-chair product_tag-washer has-post-thumbnail sale shipping-taxable purchasable product-type-simple">
              <div className="product-inner  clearfix">
                <div className="mf-product-thumbnail">
                  <a href="https://x4traders.com/product/ciate-palemore-lipstick-bold-red-color/">
                    <img
                      width={300}
                      height={300}
                      src="images/H837eeb18faf94d87aab600e6d68ef632S.jpg_960x960-300x300.webp"
                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="images/H837eeb18faf94d87aab600e6d68ef632S.jpg_960x960-300x300.webp 300w, images/H837eeb18faf94d87aab600e6d68ef632S.jpg_960x960-150x150.webp 150w, images/H837eeb18faf94d87aab600e6d68ef632S.jpg_960x960-768x768.webp 768w, images/H837eeb18faf94d87aab600e6d68ef632S.jpg_960x960-370x370.webp 370w, images/H837eeb18faf94d87aab600e6d68ef632S.jpg_960x960-600x600.webp 600w, images/H837eeb18faf94d87aab600e6d68ef632S.jpg_960x960-100x100.webp 100w, images/H837eeb18faf94d87aab600e6d68ef632S.jpg_960x960.webp 800w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                    <span className="ribbons">
                      <span className="onsale ribbon">
                        <span className="onsep">-</span>37
                        <span className="per">%</span>
                      </span>
                    </span>
                  </a>
                  <div className="footer-button">
                    <a
                      href="?add-to-cart=292"
                      data-quantity={1}
                      data-title="Lipstick"
                      className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart"
                      data-product_id={292}
                      data-product_sku="SF1133569600"
                      aria-label="Add “Lipstick” to your cart"
                      rel="nofollow"
                    >
                      <i
                        className="p-icon icon-bag2"
                        data-rel="tooltip"
                        title="Add to cart"
                      />
                      <span className="add-to-cart-text">Add to cart</span>
                    </a>
                    <a
                      href="https://x4traders.com/product/ciate-palemore-lipstick-bold-red-color/"
                      data-id={292}
                      className="mf-product-quick-view"
                    >
                      <i
                        className="p-icon icon-eye"
                        title="Quick View"
                        data-rel="tooltip"
                      />
                    </a>
                    <a
                      href="?add-to-wishlist=292"
                      data-quantity={1}
                      data-product_id={292}
                      data-variations=""
                      className="wcboost-wishlist-button wcboost-wishlist-button--theme wcboost-wishlist-button--ajax"
                      aria-label="Add “Lipstick” to the wishlist"
                      data-rel="tooltip"
                      title="Wishlist"
                    >
                      <span className="wcboost-wishlist-button__icon">
                        <svg viewBox="0 0 32 32">
                          <path d="M15.2 30.4c-0.134 0-0.267-0.034-0.389-0.101-0.15-0.083-3.722-2.082-7.347-5.355-2.146-1.936-3.858-3.917-5.093-5.888-1.574-2.514-2.371-5.022-2.371-7.456 0-4.632 3.768-8.4 8.4-8.4 1.568 0 3.234 0.587 4.69 1.654 0.851 0.624 1.576 1.376 2.11 2.174 0.534-0.798 1.259-1.55 2.11-2.174 1.456-1.067 3.122-1.654 4.69-1.654 4.632 0 8.4 3.768 8.4 8.4 0 2.434-0.798 4.942-2.371 7.456-1.234 1.971-2.947 3.952-5.091 5.888-3.626 3.274-7.197 5.272-7.347 5.355-0.122 0.067-0.254 0.101-0.389 0.101zM8.4 4.8c-3.749 0-6.8 3.051-6.8 6.8 0 4.864 3.76 9.283 6.914 12.136 2.816 2.547 5.67 4.333 6.686 4.939 1.016-0.606 3.87-2.392 6.686-4.939 3.154-2.851 6.914-7.272 6.914-12.136 0-3.749-3.051-6.8-6.8-6.8-2.725 0-5.371 2.242-6.042 4.253-0.109 0.326-0.414 0.547-0.758 0.547s-0.65-0.221-0.758-0.547c-0.67-2.011-3.317-4.253-6.042-4.253z" />
                        </svg>
                      </span>
                      <span className="wcboost-wishlist-button__text">
                        Wishlist
                      </span>
                    </a>
                    <div className="mf-compare-button">
                      <a
                        href="?add_to_compare=292"
                        data-product_id={292}
                        className="wcboost-products-compare-button wcboost-products-compare-button--ajax compare-button"
                        aria-label="Compare “Lipstick”"
                        role="button"
                        title="Compare"
                        data-rel="tooltip"
                        data-product-title="Lipstick"
                      >
                        <span className="wcboost-products-compare-button__icon">
                          <svg viewBox="0 0 32 32">
                            <path d="M28 32h-25.6c-1.323 0-2.4-1.077-2.4-2.4v-25.6c0-1.323 1.077-2.4 2.4-2.4h25.6c1.323 0 2.4 1.077 2.4 2.4v25.6c0 1.323-1.077 2.4-2.4 2.4zM2.4 3.2c-0.442 0-0.8 0.358-0.8 0.8v25.6c0 0.442 0.358 0.8 0.8 0.8h25.6c0.442 0 0.8-0.358 0.8-0.8v-25.6c0-0.442-0.358-0.8-0.8-0.8h-25.6zM10.4 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-14.4c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v14.4c0 0.442-0.358 0.8-0.8 0.8zM8 25.6h1.6v-12.8h-1.6v12.8zM16.8 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-19.2c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v19.2c0 0.442-0.358 0.8-0.8 0.8zM14.4 25.6h1.6v-17.6h-1.6v17.6zM23.2 27.2h-3.2c-0.442 0-0.8-0.358-0.8-0.8v-8c0-0.442 0.358-0.8 0.8-0.8h3.2c0.442 0 0.8 0.358 0.8 0.8v8c0 0.442-0.358 0.8-0.8 0.8zM20.8 25.6h1.6v-6.4h-1.6v6.4z" />
                          </svg>
                        </span>
                        <span className="wcboost-products-compare-button__text">
                          Compare
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <span className="price">
                  <ins>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        42.33
                      </bdi>
                    </span>
                  </ins>
                  <del>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        66.78
                      </bdi>
                    </span>
                  </del>
                </span>
                <h2 className="woo-loop-product__title">
                  <a href="https://x4traders.com/product/ciate-palemore-lipstick-bold-red-color/">
                    Lipstick
                  </a>
                </h2>
                <div className="mf-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                    </span>
                  </div>
                  <span className="count">01</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
