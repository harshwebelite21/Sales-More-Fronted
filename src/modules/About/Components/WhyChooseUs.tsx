import why_us from "../../../images/why_us.jpg";

const WhyChooseUs = () => {
  return (
    <div className=" w-[90%] mx-auto flex flex-col lg:flex-row ">
      <div className="lg:w-[50%] w-full mx-auto flex flex-col  justify-center md:p-20  gap-4 text-[#333]">
        <h1 className="font-libre text-4xl text-[#333]">Why Choose Us</h1>
        <div className="font-muli text-lg text-[#333]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarks grove right at the coast of the Semantics, a large
          language ocean.
        </div>
        <div className="space-y-2">
          <ul className="list-none">
            <li className="relative pl-6">
              <span className="absolute top-0 left-0 w-6 h-6 text-green-500">
                &#10003;
              </span>{" "}
              Separated they live
            </li>
            <li className="relative pl-6">
              <span className="absolute top-0 left-0 w-6 h-6 text-green-500">
                &#10003;
              </span>{" "}
              Bookmarks grove right at the coast
            </li>
            <li className="relative pl-6">
              <span className="absolute top-0 left-0 w-6 h-6 text-green-500">
                &#10003;
              </span>{" "}
              Large language ocean
            </li>
          </ul>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <div className="font-libre text-3xl">4000+</div>
            <div className="font-muli text-md">Products</div>
          </div>
          <div className="flex flex-col">
            <div className="font-libre text-3xl">400+</div>
            <div className="font-muli text-md">Partners</div>
          </div>
          <div className="flex flex-col">
            <div className="font-libre text-3xl">4+</div>
            <div className="font-muli text-md">Awards</div>
          </div>
        </div>
        <div className=" flex gap-4">
          <button className="size-10 bg-black text-white w-fit px-4">
            Shop Now
          </button>
          <button className="size-10 bg-white text-black w-fit px-4 border-2 border-black hover:bg-black hover:text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="lg:w-[50%]  mx-auto flex-center">
        <img
          src={why_us}
          alt="Why Us"
          className="hidden object-cover rounded-xl lg:block h-[350px] w-[500px]"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
