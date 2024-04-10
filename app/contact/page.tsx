import React from "react";

const page = () => {
  return (
    <div className=" px-20 max-md:px-5 py-10">
      <div className="flex flex-col gap-5">
        <div>
          <img
            src="/food.jpg"
            alt=""
            className=" h-[400px] w-full object-cover"
          />
        </div>
        <div>
          <form className=" flex flex-col gap-5">
            <div className="flex gap-5 max-sm:flex-wrap">
              <input
                className=" font-Garmond font-semibold text-[20px] text-Primary italic
                border-b-2 border-Primary w-full outline-none placeholder:text-Primary"
                type="text"
                placeholder="Name"
              />
              <input
                className=" font-Garmond font-semibold text-[20px] text-Primary italic
                border-b-2 border-Primary w-full outline-none placeholder:text-Primary"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              typeof="text"
              id="subject"
              className=" font-Garmond font-semibold text-[20px] text-Primary italic
                border-b-2 border-Primary w-full outline-none placeholder:text-Primary"
              placeholder="Message"
            ></textarea>

            <button className=" bg-Primary text-white p-4 font-Garmond font-bold text-[20px] border-none outline-none">
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
