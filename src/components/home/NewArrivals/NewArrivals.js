import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Áo phao dày có mũ"
            price="44.00"
            color="Black"
            badge={true}
            des="Dòng sản phẩm Thu Đông của Coolmate mang đến những sản phẩm THIẾT YẾU và CƠ BẢN nhất đáp ứng nhu cầu của nam giới trong mọi ngày thu đông, linh hoạt cho hoạt động khác nhau như đi tập, đi chơi, hoặc đi làm."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Quần Dữ Nhiệt"
            price="250.00"
            color="Gray"
            badge={true}
            des="Dòng sản phẩm Thu Đông của Coolmate mang đến những sản phẩm THIẾT YẾU và CƠ BẢN nhất đáp ứng nhu cầu của nam giới trong mọi ngày thu đông, linh hoạt cho hoạt động khác nhau như đi tập, đi chơi, hoặc đi làm."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Áo Khoác thể thảo"
            price="80.00"
            color="Red"
            badge={true}
            des="Dòng sản phẩm Thu Đông của Coolmate mang đến những sản phẩm THIẾT YẾU và CƠ BẢN nhất đáp ứng nhu cầu của nam giới trong mọi ngày thu đông, linh hoạt cho hoạt động khác nhau như đi tập, đi chơi, hoặc đi làm."
          />
        </div>

        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Quần Sort"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Dòng sản phẩm Thu Đông của Coolmate mang đến những sản phẩm THIẾT YẾU và CƠ BẢN nhất đáp ứng nhu cầu của nam giới trong mọi ngày thu đông, linh hoạt cho hoạt động khác nhau như đi tập, đi chơi, hoặc đi làm."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="Áo Chạy Bộ"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Dòng sản phẩm Thu Đông của Coolmate mang đến những sản phẩm THIẾT YẾU và CƠ BẢN nhất đáp ứng nhu cầu của nam giới trong mọi ngày thu đông, linh hoạt cho hoạt động khác nhau như đi tập, đi chơi, hoặc đi làm."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
