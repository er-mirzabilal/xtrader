import Footer from "@/components/Footer";
import { Inter } from "@next/font/google";
import Header from "components/header";
import NewArrival from "../components/NewArrival";
import DealOfTheDay from "../components/DealOfTheDay";
import TopCategory from "@/components/TopCategory";
import Discount from "@/components/Discount";
import FreeDelevery from "@/components/FreeDelevery";
import HorizontalCarousel from "./try";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* Hello world */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="pingback" href="https://x4traders.com/xmlrpc.php" />
      <title>Online Shopping Mart</title>
      <meta name="robots" content="max-image-preview:large" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="x4Traders » Feed"
        href="https://x4traders.com/feed/"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="x4Traders » Comments Feed"
        href="https://x4traders.com/comments/feed/"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 0.07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n",
        }}
      />
      <link
        rel="stylesheet"
        id="linearicons-css"
        href="css/linearicons.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="css/style.min.css"
        type="text/css"
        media="all"
      />
      <style
        id="wp-block-library-theme-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.wp-block-audio figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-audio figcaption{color:hsla(0,0%,100%,.65)}.wp-block-audio{margin:0 0 1em}.wp-block-code{border:1px solid #ccc;border-radius:4px;font-family:Menlo,Consolas,monaco,monospace;padding:.8em 1em}.wp-block-embed figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-embed figcaption{color:hsla(0,0%,100%,.65)}.wp-block-embed{margin:0 0 1em}.blocks-gallery-caption{color:#555;font-size:13px;text-align:center}.is-dark-theme .blocks-gallery-caption{color:hsla(0,0%,100%,.65)}.wp-block-image figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-image figcaption{color:hsla(0,0%,100%,.65)}.wp-block-image{margin:0 0 1em}.wp-block-pullquote{border-bottom:4px solid;border-top:4px solid;color:currentColor;margin-bottom:1.75em}.wp-block-pullquote cite,.wp-block-pullquote footer,.wp-block-pullquote__citation{color:currentColor;font-size:.8125em;font-style:normal;text-transform:uppercase}.wp-block-quote{border-left:.25em solid;margin:0 0 1.75em;padding-left:1em}.wp-block-quote cite,.wp-block-quote footer{color:currentColor;font-size:.8125em;font-style:normal;position:relative}.wp-block-quote.has-text-align-right{border-left:none;border-right:.25em solid;padding-left:0;padding-right:1em}.wp-block-quote.has-text-align-center{border:none;padding-left:0}.wp-block-quote.is-large,.wp-block-quote.is-style-large,.wp-block-quote.is-style-plain{border:none}.wp-block-search .wp-block-search__label{font-weight:700}.wp-block-search__button{border:1px solid #ccc;padding:.375em .625em}:where(.wp-block-group.has-background){padding:1.25em 2.375em}.wp-block-separator.has-css-opacity{opacity:.4}.wp-block-separator{border:none;border-bottom:2px solid;margin-left:auto;margin-right:auto}.wp-block-separator.has-alpha-channel-opacity{opacity:1}.wp-block-separator:not(.is-style-wide):not(.is-style-dots){width:100px}.wp-block-separator.has-background:not(.is-style-dots){border-bottom:none;height:1px}.wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots){height:2px}.wp-block-table{margin:0 0 1em}.wp-block-table td,.wp-block-table th{word-break:normal}.wp-block-table figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-table figcaption{color:hsla(0,0%,100%,.65)}.wp-block-video figcaption{color:#555;font-size:13px;text-align:center}.is-dark-theme .wp-block-video figcaption{color:hsla(0,0%,100%,.65)}.wp-block-video{margin:0 0 1em}.wp-block-template-part.has-background{margin-bottom:0;margin-top:0;padding:1.25em 2.375em}\n",
        }}
      />
      <link
        rel="stylesheet"
        id="wc-blocks-vendors-style-css"
        href="css/wc-blocks-vendors-style.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wc-blocks-style-css"
        href="css/wc-blocks-style.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="classic-theme-styles-css"
        href="css/classic-themes.min.css"
        type="text/css"
        media="all"
      />
      <style
        id="global-styles-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\nbody{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('index_1.html#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('index_1.html#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('index_1.html#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('index_1.html#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('index_1.html#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('index_1.html#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('index_1.html#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('index_1.html#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}\n:where(.wp-block-columns.is-layout-flex){gap: 2em;}\n.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}\n",
        }}
      />
      <link
        rel="stylesheet"
        id="contact-form-7-css"
        href="css/styles.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="woocommerce-general-css"
        href="css/woocommerce.css"
        type="text/css"
        media="all"
      />
      <style
        id="woocommerce-inline-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.woocommerce form .form-row .required { visibility: visible; }\n",
        }}
      />
      <link
        rel="stylesheet"
        id="wcboost-products-compare-css"
        href="css/compare.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="wcboost-variation-swatches-css"
        href="css/frontend.css"
        type="text/css"
        media="all"
      />
      <style
        id="wcboost-variation-swatches-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.wcboost-variation-swatches__item { width: 30px; height: 30px; line-height: 30px; }.wcboost-variation-swatches--round.wcboost-variation-swatches--button .wcboost-variation-swatches__item {border-radius: 15px}\n",
        }}
      />
      <link
        rel="stylesheet"
        id="wcboost-wishlist-css"
        href="css/wishlist.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="martfury-fonts-css"
        href="https://fonts.googleapis.com/css?family=Work+Sans%3A300%2C400%2C500%2C600%2C700%7CLibre+Baskerville%3A400%2C700&subset=latin%2Clatin-ext&ver=20170801"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="ionicons-css"
        href="css/ionicons.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="eleganticons-css"
        href="css/eleganticons.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="font-awesome-css"
        href="css/font-awesome.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="bootstrap-css"
        href="css/bootstrap.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="martfury-css"
        href="css/style.css"
        type="text/css"
        media="all"
      />
      <style
        id="martfury-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n.site-header .logo img  {width:450px; }.site-header .logo img  {height:185px; }\n",
        }}
      />
      <link
        rel="stylesheet"
        id="photoswipe-css"
        href="css/photoswipe.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="photoswipe-default-skin-css"
        href="css/default-skin.min.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="tawc-deals-css"
        href="css/tawc-deals.css"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="js_composer_front-css"
        href="css/js_composer.min.css"
        type="text/css"
        media="all"
      />
      {/*[if lt IE 9]>
  
  <![endif]*/}
      {/*[if lt IE 9]>
  
  <![endif]*/}
      <link rel="https://api.w.org/" href="https://x4traders.com/wp-json/" />
      <link
        rel="alternate"
        type="application/json"
        href="https://x4traders.com/wp-json/wp/v2/pages/2537"
      />
      <link
        rel="EditURI"
        type="application/rsd+xml"
        title="RSD"
        href="https://x4traders.com/xmlrpc.php?rsd"
      />
      <link
        rel="wlwmanifest"
        type="application/wlwmanifest+xml"
        href="https://x4traders.com/wp-includes/wlwmanifest.xml"
      />
      <meta name="generator" content="WordPress 6.2" />
      <meta name="generator" content="WooCommerce 7.2.0" />
      <link rel="canonical" href="https://x4traders.com/" />
      <link rel="shortlink" href="https://x4traders.com/" />
      <link
        rel="alternate"
        type="application/json+oembed"
        href="https://x4traders.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fx4traders.com%2F"
      />
      <link
        rel="alternate"
        type="text/xml+oembed"
        href="https://x4traders.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fx4traders.com%2F&format=xml"
      />
      <noscript>
        &lt;style&gt;.woocommerce-product-gallery{"{"} opacity: 1 !important;{" "}
        {"}"}
        &lt;/style&gt;
      </noscript>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            ".recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}",
        }}
      />
      <meta
        name="generator"
        content="Powered by WPBakery Page Builder - drag and drop page builder for WordPress."
      />
      <meta
        name="generator"
        content="Powered by Slider Revolution 6.6.7 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface."
      />
      <link rel="icon" href="images/icon-100x100.png" sizes="32x32" />
      <link rel="icon" href="images/icon-300x300.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="images/icon-300x300.png" />
      <meta
        name="msapplication-TileImage"
        content="https://x4traders.com/wp-content/uploads/2022/12/icon-300x300.png"
      />
      <style
        type="text/css"
        id="wp-custom-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\t.header-layout-3 .site-header .header-bar {    background-color: transparent;}\t\t",
        }}
      />
      <style
        id="kirki-inline-styles"
        dangerouslySetInnerHTML={{
          __html:
            "/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiAJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBiEJoI3ZKyHqQvhf.woff) format('woff');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Work Sans';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(fonts/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QBi8JoI3ZKyHqQg.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}",
        }}
      />
      <style
        type="text/css"
        data-type="vc_shortcodes-custom-css"
        dangerouslySetInnerHTML={{
          __html:
            ".vc_custom_1671603524734{margin-top: 0px !important;margin-bottom: 20px !important;}",
        }}
      />
      <noscript>
        &lt;style&gt; .wpb_animate_when_almost_visible {"{"} opacity: 1; {"}"}
        &lt;/style&gt;
      </noscript>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-dark-grayscale">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 0.49803921568627" />
              <feFuncG type="table" tableValues="0 0.49803921568627" />
              <feFuncB type="table" tableValues="0 0.49803921568627" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-grayscale">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 1" />
              <feFuncG type="table" tableValues="0 1" />
              <feFuncB type="table" tableValues="0 1" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-yellow">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.54901960784314 0.98823529411765"
              />
              <feFuncG type="table" tableValues="0 1" />
              <feFuncB
                type="table"
                tableValues="0.71764705882353 0.25490196078431"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-red">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 1" />
              <feFuncG type="table" tableValues="0 0.27843137254902" />
              <feFuncB
                type="table"
                tableValues="0.5921568627451 0.27843137254902"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-midnight">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 0" />
              <feFuncG type="table" tableValues="0 0.64705882352941" />
              <feFuncB type="table" tableValues="0 1" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-magenta-yellow">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0.78039215686275 1" />
              <feFuncG type="table" tableValues="0 0.94901960784314" />
              <feFuncB
                type="table"
                tableValues="0.35294117647059 0.47058823529412"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-purple-green">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR
                type="table"
                tableValues="0.65098039215686 0.40392156862745"
              />
              <feFuncG type="table" tableValues="0 1" />
              <feFuncB type="table" tableValues="0.44705882352941 0.4" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width={0}
        height={0}
        focusable="false"
        role="none"
        style={{
          visibility: "hidden",
          position: "absolute",
          left: "-9999px",
          overflow: "hidden",
        }}
      >
        <defs>
          <filter id="wp-duotone-blue-orange">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0.098039215686275 1" />
              <feFuncG type="table" tableValues="0 0.66274509803922" />
              <feFuncB
                type="table"
                tableValues="0.84705882352941 0.41960784313725"
              />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>{" "}
      <div id="martfury-preloader" className="martfury-preloader"></div>
      <div id="page" className="hfeed site">
        {/* header */}
        <Header />
        <div id="content" className="site-content">
          <div className="martfury-container">
            <div className="row">
              <section className="wpb-content-wrapper">
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 30 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 30 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 30 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div
                  style={{
                    backgroundColor: "red",
                    width: "100%",
                    height: "300px",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "green",
                      width: "70%",
                      height: "300px",
                    }}
                  >
                    <img src="images/5a.jpg" width={"40%"} />
                  </div>
                  <div
                    style={{
                      backgroundColor: "yellow",
                      width: "30%",
                      height: "300px",
                    }}
                  ></div>
                </div> */}
                {/* free delevery */}
                <FreeDelevery />
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 85 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 85 }}
                              />
                            </div>
                            {/* deal of the day */}
                            <DealOfTheDay />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 76 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 76 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 76 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* minimal */}
                <Discount />
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 50 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 50 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 50 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* top category */}
                <TopCategory />

                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 52 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 52 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 52 }}
                              />
                            </div>
                            <div
                              className="mf-products-tabs mf-products-tabs-carousel woocommerce  header-style-1"
                              id="products-tabs645c8202e6bf8"
                            >
                              <div className="tabs-header">
                                <h2 className="tabs-cat__heading">
                                  <span className="cat-title">
                                    Consumer Electronics
                                  </span>
                                </h2>{" "}
                                <div className="tabs-header-nav">
                                  {" "}
                                  <ul className="tabs-nav">
                                    {" "}
                                    <li>
                                      <a
                                        href="#"
                                        data-href="recent"
                                        className="active"
                                      >
                                        New Arrivals
                                      </a>
                                    </li>{" "}
                                    <li>
                                      <a
                                        href="#"
                                        data-href="best_selling"
                                        className=""
                                      >
                                        Best Seller
                                      </a>
                                    </li>{" "}
                                    <li>
                                      <a
                                        href="#"
                                        data-href="top_rated"
                                        className=""
                                      >
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
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 50 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 50 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 50 }}
                              />
                            </div>
                            <div
                              className="mf-products-tabs mf-products-tabs-carousel woocommerce  header-style-1"
                              id="products-tabs645c8202e6e7f"
                            >
                              <div className="tabs-header">
                                <h2 className="tabs-cat__heading">
                                  <span className="cat-title">
                                    Apparels &amp; Clothings
                                  </span>
                                </h2>{" "}
                                <div className="tabs-header-nav">
                                  {" "}
                                  <ul className="tabs-nav">
                                    {" "}
                                    <li>
                                      <a
                                        href="#"
                                        data-href="recent"
                                        className="active"
                                      >
                                        New Arrivals
                                      </a>
                                    </li>{" "}
                                    <li>
                                      <a
                                        href="#"
                                        data-href="best_selling"
                                        className=""
                                      >
                                        Best Seller
                                      </a>
                                    </li>{" "}
                                    <li>
                                      <a
                                        href="#"
                                        data-href="top_rated"
                                        className=""
                                      >
                                        Most Popular
                                      </a>
                                    </li>{" "}
                                  </ul>{" "}
                                  <a className="link" href="#">
                                    View All
                                  </a>{" "}
                                </div>
                              </div>
                              <div className="tabs-content">
                                {/* <div className="mf-vc-loading">
                                  <div className="mf-vc-loading--wrapper" />
                                </div> */}
                                <div
                                  style={{
                                    backgroundColor: "pink",
                                    width: "100%",
                                    height: "300px",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 50 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 50 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 50 }}
                              />
                            </div>
                            <div
                              className="mf-products-tabs mf-products-tabs-carousel woocommerce  header-style-1"
                              id="products-tabs645c8202e7173"
                            >
                              <div className="tabs-header">
                                <h2 className="tabs-cat__heading">
                                  <span className="cat-title">
                                    Home, Garden &amp; Kitchen
                                  </span>
                                </h2>{" "}
                                <div className="tabs-header-nav">
                                  {" "}
                                  <ul className="tabs-nav">
                                    {" "}
                                    <li>
                                      <a
                                        href="#"
                                        data-href="recent"
                                        className="active"
                                      >
                                        New Arrivals
                                      </a>
                                    </li>{" "}
                                    <li>
                                      <a
                                        href="#"
                                        data-href="best_selling"
                                        className=""
                                      >
                                        Best Seller
                                      </a>
                                    </li>{" "}
                                    <li>
                                      <a
                                        href="#"
                                        data-href="top_rated"
                                        className=""
                                      >
                                        Most Popular
                                      </a>
                                    </li>{" "}
                                  </ul>{" "}
                                  <a className="link" href="#">
                                    View All
                                  </a>{" "}
                                </div>
                              </div>
                              <div className="tabs-content">
                                {/* <div className="mf-vc-loading">
                                  <div className="mf-vc-loading--wrapper" />
                                </div> */}
                                <div
                                  style={{
                                    backgroundColor: "yellow",
                                    width: "100%",
                                    height: "300px",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 40 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 40 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 40 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                                      <strong className="r-price">
                                        25% OFF
                                      </strong>
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
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 30 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 30 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 30 }}
                              />
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
                                    Discount{" "}
                                    <strong className="r-price">25%</strong> Off
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
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 30 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 30 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 30 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 70 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 70 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 70 }}
                              />
                            </div>
                            <div
                              className="martfury-newletter "
                              style={{ backgroundColor: "#f8f8f8" }}
                            >
                              <div className="container">
                                <div className="row newsletter-row">
                                  <div className="form-image col-md-6 hidden-sm hidden-xs text-center">
                                    <img
                                      // src="images/transparent.png"
                                      src="https://x4traders.com/wp-content/uploads/2022/12/b355.png"
                                      data-original="https://x4traders.com/wp-content/uploads/2022/12/b355.png"
                                      alt=""
                                      className="lazy "
                                      width={487}
                                      height={379}
                                    />
                                  </div>
                                  <div className="form-area col-md-6 col-xs-12 col-sm-12">
                                    <h3 className="form-title">
                                      Download x4Traders App Now!
                                    </h3>
                                    <div className="form-desc">
                                      Shopping fastly and easily more with our
                                      app. Get a link to
                                      <br />
                                      download the app on your phone.
                                    </div>
                                    {/* Mailchimp for WordPress v4.8.12 - https://wordpress.org/plugins/mailchimp-for-wp/ */}
                                    <form
                                      id="mc4wp-form-1"
                                      className="mc4wp-form mc4wp-form-436"
                                      method="post"
                                      data-id={436}
                                      data-name="Newsletter"
                                    >
                                      <div className="mc4wp-form-fields">
                                        <input
                                          type="email"
                                          name="EMAIL"
                                          placeholder="Email Address"
                                          required=""
                                        />
                                        <input
                                          type="submit"
                                          defaultValue="Subscribe"
                                        />
                                      </div>
                                      <label
                                        style={{ display: "none !important" }}
                                      >
                                        Leave this field empty if you're human:{" "}
                                        <input
                                          type="text"
                                          name="_mc4wp_honeypot"
                                          defaultValue=""
                                          tabIndex={-1}
                                          autoComplete="off"
                                        />
                                      </label>
                                      <input
                                        type="hidden"
                                        name="_mc4wp_timestamp"
                                        defaultValue={1683784194}
                                      />
                                      <input
                                        type="hidden"
                                        name="_mc4wp_form_id"
                                        defaultValue={436}
                                      />
                                      <input
                                        type="hidden"
                                        name="_mc4wp_form_element_id"
                                        defaultValue="mc4wp-form-1"
                                      />
                                      <div className="mc4wp-response" />
                                    </form>
                                    {/* / Mailchimp for WordPress Plugin */}
                                    <div className="btn-area">
                                      <a
                                        className="link"
                                        href="https://play.google.com/store"
                                      >
                                        <img
                                          src="images/transparent.png"
                                          data-original="https://x4traders.com/wp-content/uploads/2018/08/t1.png"
                                          alt=""
                                          className="lazy "
                                          width={127}
                                          height={43}
                                        />
                                      </a>
                                      <a
                                        className="link"
                                        href="https://www.appstore.com/"
                                      >
                                        <img
                                          src="images/transparent.png"
                                          data-original="https://x4traders.com/wp-content/uploads/2018/08/t2.png"
                                          alt=""
                                          className="lazy "
                                          width={128}
                                          height={43}
                                        />
                                      </a>
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
                </div>
                <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="martfury-empty-space ">
                              <div
                                className="mf_empty_space_lg"
                                style={{ height: 100 }}
                              />
                              <div
                                className="mf_empty_space_md"
                                style={{ height: 100 }}
                              />
                              <div
                                className="mf_empty_space_xs"
                                style={{ height: 100 }}
                              />
                            </div>
                            {/* new Arrival */}
                            <NewArrival />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* #content */}
        {/* footer */}
        <Footer />
        {/* #colophon */}
      </div>
      {/* #page */}
      <div id="pswp" className="pswp" tabIndex={-1} aria-hidden="true">
        <div className="pswp__bg" />
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter" />
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              />
              <button
                className="pswp__button pswp__button--share"
                title="Share"
              />
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              />
              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              />
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>
            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            ></button>
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            ></button>
            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="mf-quick-view-modal"
        className="mf-quick-view-modal martfury-modal woocommerce"
        tabIndex={-1}
      >
        <div className="mf-modal-overlay" />
        <div className="modal-content">
          <a href="#" className="close-modal">
            <i className="icon-cross" />
          </a>
          <div className="product-modal-content loading" />
        </div>
        <div className="mf-loading" />
      </div>
      <a id="scroll-top" className="backtotop" href="#page-top">
        <i className="arrow_carrot_up_alt" />
      </a>
      <div
        id="mf-newsletter-popup"
        className="martfury-modal mf-newsletter-popup "
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="mf-modal-overlay" />
        <div className="modal-content">
          <a href="#" className="close-modal">
            <i className="icon-cross" />
          </a>
          <div className="newletter-content">
            <div
              className="n-image"
              style={{ backgroundImage: "url(images/nl.jpg)" }}
            />{" "}
            <div className="nl-inner">
              <div className="n-desc">
                <h3>
                  Get <strong className="primary-color">25% </strong>Discount
                </h3>
                <p>
                  Subscribe to the x4Traders mailing list to receive updates on
                  new arrivals, special offers and our promotions.
                </p>
              </div>
              <div className="n-form">
                {/* Mailchimp for WordPress v4.8.12 - https://wordpress.org/plugins/mailchimp-for-wp/ */}
                <form
                  id="mc4wp-form-3"
                  className="mc4wp-form mc4wp-form-436"
                  method="post"
                  data-id={436}
                  data-name="Newsletter"
                >
                  <div className="mc4wp-form-fields">
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="Email Address"
                      required=""
                    />
                    <input type="submit" defaultValue="Subscribe" />
                  </div>
                  <label style={{ display: "none !important" }}>
                    Leave this field empty if you're human:{" "}
                    <input
                      type="text"
                      name="_mc4wp_honeypot"
                      defaultValue=""
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                  <input
                    type="hidden"
                    name="_mc4wp_timestamp"
                    defaultValue={1683784195}
                  />
                  <input
                    type="hidden"
                    name="_mc4wp_form_id"
                    defaultValue={436}
                  />
                  <input
                    type="hidden"
                    name="_mc4wp_form_element_id"
                    defaultValue="mc4wp-form-3"
                  />
                  <div className="mc4wp-response" />
                </form>
                {/* / Mailchimp for WordPress Plugin */}
              </div>
              <a href="#" className="n-close">
                Don't show this popup again
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="primary-mobile-nav mf-els-item" id="primary-mobile-nav">
        <div className="mobile-nav-content">
          <div className="mobile-nav-overlay" />
          <div className="mobile-nav-header">
            <h2 className="mobile-nav-header__title">Main Menu</h2>
            <a className="close-mobile-nav">
              <i className="icon-cross" />
            </a>
          </div>
          <ul id="menu-shop-by-department-1" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2346">
              <a href="#">
                <i className="icon-star" /> Hot Promotions
              </a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-409">
              <a href="https://x4traders.com/product-category/consumer-electrics/">
                <i className="icon-laundry" /> Consumer Electrics
              </a>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2152">
                  <a href="#">Electronics</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2156">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/">
                        Home Audios &amp; Theaters
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2157">
                      <a href="https://x4traders.com/product-category/consumer-electrics/tv-televisions/">
                        TV &amp; Videos
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2159">
                      <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/">
                        Camera, Photos &amp; Videos
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2158">
                      <a href="https://x4traders.com/product-category/consumer-electrics/air-conditioners/accessories/">
                        Cellphones &amp; Accessories
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2160">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/headphone/">
                        Headphones
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2161">
                      <a href="https://x4traders.com/product-category/consumer-electrics/refrigerators/">
                        Videogames
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2162">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/wireless-audio/">
                        Wireless Speakers
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2164">
                      <a href="https://x4traders.com/product-category/consumer-electrics/office-electronics/">
                        Office Electronics
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2153">
                  <a href="#">Accessories &amp; Parts</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2165">
                      <a href="https://x4traders.com/product-category/consumer-electrics/air-conditioners/accessories/">
                        Digital Cables
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2166">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/speakers/">
                        Audio &amp; Video Cables
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2167">
                      <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/car-security/">
                        Batteries
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2168">
                      <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/vehicle-gps/">
                        Charger
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="hidden menu-item menu-item-type-custom menu-item-object-custom menu-item-2154">
                  <a href="#">DJI Phantom</a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-410">
              <a href="https://x4traders.com/product-category/clothing-apparel/">
                <i className="icon-shirt" /> Clothing &amp; Apparel
              </a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-411">
              <a href="https://x4traders.com/product-category/garden-kitchen/">
                <i className="icon-lampshade" /> Home, Garden &amp; Kitchen
              </a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-412">
              <a href="https://x4traders.com/product-category/health-beauty/">
                <i className="icon-heart-pulse" /> Health &amp; Beauty
              </a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-413">
              <a href="https://x4traders.com/product-category/jewelry-watches/">
                <i className="icon-diamond2" /> Jewelry &amp; Watches
              </a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-414">
              <a href="https://x4traders.com/product-category/computers-technologies/">
                <i className="icon-desktop" /> Computers &amp; Technologies
              </a>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2175">
                  <a href="#">Computer &amp; Technologies</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2172">
                      <a href="https://x4traders.com/product-category/computers-technologies/desktop-pc/">
                        Computers &amp; Tablets
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2173">
                      <a href="https://x4traders.com/product-category/computers-technologies/laptop/">
                        Laptop
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2174">
                      <a href="https://x4traders.com/product-category/computers-technologies/smartphones/">
                        Monitors
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2176">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/wireless-audio/">
                        Networking
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2177">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/">
                        Drive &amp; Storages
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2178">
                      <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/">
                        Computer Components
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2179">
                      <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/audio-video/">
                        Security &amp; Protection
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2180">
                      <a href="https://x4traders.com/product-category/consumer-electrics/office-electronics/">
                        Gaming Laptop
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2181">
                      <a href="https://x4traders.com/product-category/consumer-electrics/office-electronics/printers/">
                        Accesories
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2182">
                  <a href="#">Headphone</a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-415">
              <a href="https://x4traders.com/product-category/babies-moms/">
                <i className="icon-baby-bottle" /> Babies &amp; Moms
              </a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-416">
              <a href="https://x4traders.com/product-category/sport-outdoor/">
                <i className="icon-baseball" /> Sport &amp; Outdoor
              </a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-417">
              <a href="https://x4traders.com/product-category/phones-accessories/">
                <i className="icon-smartphone" /> Phones &amp; Accessories
              </a>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2187">
                  <a href="#">Smart Phones</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2189">
                      <a href="https://x4traders.com/product-category/computers-technologies/smartphones/">
                        iOS Phones
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2190">
                      <a href="https://x4traders.com/product-category/computers-technologies/desktop-pc/">
                        Android Phones
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2191">
                      <a href="https://x4traders.com/product-category/computers-technologies/laptop/">
                        Window Phones
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2192">
                      <a href="https://x4traders.com/product-category/phones-accessories/">
                        Other Smartphones
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2201">
                  <a href="#">Galaxy Note 4</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2204">
                  <a href="#">Line</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2205">
                  <a href="#">Line 2</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2188">
                  <a href="#">Accessories</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2193">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/headphone/">
                        Headphones
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2194">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/home-theater-system/">
                        Cases
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2195">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/speakers/">
                        Lighting Cables
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2196">
                      <a href="https://x4traders.com/product-category/consumer-electrics/audios-theaters/wireless-audio/">
                        Memory Cards
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2197">
                      <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/">
                        Others
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2198">
                      <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/audio-video/">
                        Ear-Phones
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2199">
                      <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/car-security/">
                        Phone Components
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2200">
                      <a href="https://x4traders.com/product-category/consumer-electrics/car-electronics/radar-detector/">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-418">
              <a href="https://x4traders.com/product-category/books-office/">
                <i className="icon-book2" /> Books &amp; Office
              </a>
            </li>
            <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-419">
              <a href="https://x4traders.com/product-category/cars-motocycles/">
                <i className="icon-car-siren" /> Cars &amp; Motocycles
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2347">
              <a href="#">
                <i className="icon-wrench" /> Home Improments
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2348">
              <a href="#">
                <i className="icon-tag" /> Vouchers &amp; Services
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="mf-off-canvas-layer" className="martfury-off-canvas-layer" />
      <div
        id="wcboost-products-compare-popup"
        className="wcboost-products-compare-popup"
        aria-hidden="true"
      >
        <div className="wcboost-products-compare-popup__backdrop" />
        <div className="wcboost-products-compare-popup__body">
          <div className="wcboost-products-compare-popup__header">
            <div className="wcboost-products-compare-popup__title">
              Compare products
            </div>
            <a
              href="#"
              className="wcboost-products-compare-popup__close"
              role="button"
            >
              <span className="wcboost-products-compare-popup__close-icon">
                <svg
                  width={20}
                  height={20}
                  role="image"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>{" "}
              </span>
              <span className="screen-reader-text">Close</span>
            </a>
          </div>
          <div className="wcboost-products-compare-popup__content" />
        </div>
      </div>
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:400%2C500%2C700%7COpen+Sans:700&display=swap"
        rel="stylesheet"
        property="stylesheet"
        media="all"
        type="text/css"
      />
      <link
        rel="stylesheet"
        id="rs-plugin-settings-css"
        href="css/rs6.css"
        type="text/css"
        media="all"
      />
      <style
        id="rs-plugin-settings-inline-css"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t.martfury-arrow-dark{background-color:rgba( 0,0,0,0.3 );  min-width:48px;  min-height:48px;  transition:0.5s}.martfury-arrow-dark:hover{background-color:#000}.martfury-arrow-dark:before{display:none}.martfury-arrow-dark i{color:#fff;  font-size:18px;  position:absolute;  top:50%;  left:50%;  transform:translate(-50%,-50%);  transition:0.5s}.martfury-arrow-dark.tp-leftarrow .right-arrow{display:none}.martfury-arrow-dark.tp-rightarrow .left-arrow{display:none}\n",
        }}
      />
    </>
  );
}
