import { IoStar } from "react-icons/io5";

const SellerComp = ({imgUrl,productName,regularPrice,discountedPrice}) => {
  return (
    <div className="w-[366px] h-[424px] sm:mx-auto sm:mb-32  cursor-pointer hover:shadow-3xl">
      <div className="rounded-t-[60px] overflow-hidden">
        <img
          className="w-full "
          src={imgUrl}
          alt="footer-img-(1).png"
        />
      </div>
      <div className="w-[366px] bg-[#FFFFFF] pt-5 pl-6">
        <div className="flex gap-3">
          <IoStar className="text-[#FFAF37]"></IoStar>
          <IoStar className="text-[#FFAF37]"></IoStar>
          <IoStar className="text-[#FFAF37]"></IoStar>
          <IoStar className="text-[#FFAF37]"></IoStar>
          <IoStar className="text-[#FFAF37]"></IoStar>
        </div>
        <h4 className="text-2xl font-bold pt-3">{productName}</h4>
        <p className="inline-block pr-8 pb-4 text-2xl font-normal text-[#C4C4C4]">
          {regularPrice}
        </p>
        <p className="inline-block text-2xl font-normal">{discountedPrice}</p>
      </div>
    </div>
  );
};

export default SellerComp;
