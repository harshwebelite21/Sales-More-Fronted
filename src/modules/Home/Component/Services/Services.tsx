import { GiReceiveMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const Services = () => {
  const serviceItems = [
    {
      icon: <TbTruckDelivery className="size-10 text-[#5138ee]" />,
      title: "Super Fast and Free Delivery",
    },
    {
      icon: <MdSecurity className="size-10 text-[#5138ee]" />,
      title: "Non-contact Shipping",
    },
    {
      icon: <GiReceiveMoney className="size-10 text-[#5138ee]" />,
      title: "Money-back Guaranteed",
    },
    {
      icon: <RiSecurePaymentLine className="size-10 text-[#5138ee]" />,
      title: "Super Secure Payment System",
    },
  ];

  const colLength = serviceItems.length % 3 === 0 ? 3 : 4;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-${colLength} w-[90%] mx-auto`}
    >
      {serviceItems.map((item) => (
        <div className="p-5" key={item.title}>
          <div className="bg-[#f6f8fa] rounded flex flex-col items-center justify-center p-5 h-full">
            <div className="bg-white rounded-full p-3">{item.icon}</div>
            <h3 className="p-5">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
