import {
  product1Thumbnail,
  product2Thumbnail,
  product3Thumbnail,
  product4Thumbnail,
} from "../assets";
import { products } from "../constants";
import Slider from "react-slick";

export default function Carousel({ dots, arrow, fsToggle, styles }) {
  var settings = {
    customPaging: function (i) {
      var no = i + 1;
      return (
        <a>
          <img
            src={`${
              no === 1
                ? product1Thumbnail
                : no === 2
                ? product2Thumbnail
                : no === 3
                ? product3Thumbnail
                : product4Thumbnail
            }`}
            className="rounded-xl"
            alt={`product-${no}`}
          />
        </a>
      );
    },

    dotsClass: "slick-dots slick-thumb",
    dots: dots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      {...settings}
      className={`${arrow ? "" : "arrow-none"} h-full md:rounded-2xl`}
    >
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.Image}
            alt={product.id}
            onClick={fsToggle}
            className={`${styles} w-full max-h-[350px] object-cover md:max-h-none md:rounded-2xl mb-6`}
          />
        </div>
      ))}
    </Slider>
  );
}
