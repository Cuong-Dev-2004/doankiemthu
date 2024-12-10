import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont flex items-center">

        <div className="w-full md:w-1/2 px-6">
          <h1 className="text-4xl font-bold text-black mb-4">ĐỒ CHẠY BỘ</h1>
          <p className="text-lg text-gray-600 mb-6">
            Tặng tất thể thao 99K cho một số sản phẩm
          </p>
          <ShopNow />
        </div>
        <div className="hidden md:block md:w-1/2">
          <Image
            className="w-full h-full object-cover"
            imgSrc={productOfTheYear}
            alt="Product of the Year"
          />
        </div>
      </div>


    </Link>
  );
};

export default YearProduct;
