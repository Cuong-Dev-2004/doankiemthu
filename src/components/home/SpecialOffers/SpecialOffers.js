import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,

} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={newArrOne}
          productName="Áo phao dày có mũ"
          price="44.00"
          color="Black"
          badge={true}
          des="Dòng sản phẩm Thu Đông của Coolmate mang đến những sản phẩm THIẾT YẾU và CƠ BẢN nhất đáp ứng nhu cầu của nam giới trong mọi ngày thu đông, linh hoạt cho hoạt động khác nhau như đi tập, đi chơi, hoặc đi làm."
        />
        <Product
          _id="1102"
          img={newArrTwo}
          productName="Quần Dữ Nhiệt"
          price="250.00"
          color="Gray"
          badge={true}
          des="Dòng sản phẩm Thu Đông của Coolmate mang đến những sản phẩm THIẾT YẾU và CƠ BẢN nhất đáp ứng nhu cầu của nam giới trong mọi ngày thu đông, linh hoạt cho hoạt động khác nhau như đi tập, đi chơi, hoặc đi làm."
        />
        <Product
          _id="1103"
          img={newArrThree}
          productName="Áo Khoác thể thảo"
          price="80.00"
          color="Red"
          badge={true}
          des="Dòng sản phẩm Thu Đông của Coolmate mang đến những sản phẩm THIẾT YẾU và CƠ BẢN nhất đáp ứng nhu cầu của nam giới trong mọi ngày thu đông, linh hoạt cho hoạt động khác nhau như đi tập, đi chơi, hoặc đi làm."
        />
        <Product
          _id="1104"
          img={newArrFour}
          productName="Quần Sort"
          price="60.00"
          color="Mixed"
          badge={false}
          des="Dòng sản phẩm Thu Đông của Coolmate mang đến những sản phẩm THIẾT YẾU và CƠ BẢN nhất đáp ứng nhu cầu của nam giới trong mọi ngày thu đông, linh hoạt cho hoạt động khác nhau như đi tập, đi chơi, hoặc đi làm."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
