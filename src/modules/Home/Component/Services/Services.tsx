import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 md:grid-rows-2 gap-5 rounded-3xl justify-items-center w-[90%] mx-auto">
      <div className="row-span-2 w-full">
        <div className="bg-[#f6f8fa] rounded flex flex-col items-center justify-center h-full">
          <div className="bg-[#ffffff] rounded-full p-3">
            <TbTruckDelivery className="size-10 text-[#5138ee]" />
          </div>
          <h3 className="p-5">Super Fast and Free Delivery</h3>
        </div>
      </div>

      <div className="w-full h-full ">
        <div className="bg-[#f6f8fa] rounded flex flex-col items-center p-3">
          <div className="bg-[#ffffff] rounded-full flex  p-3">
            <MdSecurity className="size-10 text-[#5138ee]" />
          </div>
          <h3 className="p-5">Non-contact Shipping</h3>
        </div>
      </div>

      <div className="md:col-start-2 md:row-start-2 w-full">
        <div className="bg-[#f6f8fa] rounded flex flex-col items-center p-3">
          <div className="bg-[#ffffff] rounded-full flex  p-3">
            <GiReceiveMoney className="size-10 text-[#5138ee]" />
          </div>
          <h3 className="p-5">Money-back Guaranteed</h3>
        </div>
      </div>

      <div className="md:row-span-2 md:col-start-3 row-start-1 w-full">
        <div className="bg-[#f6f8fa] rounded flex flex-col justify-center items-center h-full">
          <div className="bg-[#ffffff] rounded-full p-3">
            <RiSecurePaymentLine className="size-10 text-[#5138ee]" />
          </div>
          <h3 className="p-5">Super Secure Payment System</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
