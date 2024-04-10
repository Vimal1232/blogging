import React from "react";

const page = () => {
  return (
    <div className=" px-20 max-sm:px-5 py-10">
      <h1 className=" font-Garmond text-Primary font-semibold text-[60px] max-sm:text-[40px] max-ss:text-[30px] italic ">
        Hi
      </h1>
      <p className=" font-Garmond text-Primary font-normal text-[20px] max-sm:text-[16px] max-ss:text-[14px]">
        I am a front-end developer with a passion for creating beautiful and
        functional websites. I have experience in building websites using HTML,
        CSS, JavaScript, React, and other modern web technologies. I am always
        looking to learn new things and improve my skills. I am currently
        looking for new opportunities to work on exciting projects and
        collaborate with other talented developers. If you are interested in
        working with me, please feel free to contact me. I would love to hear
        from you!
      </p>
      <img src="/random.jpg" alt="" className=" w-[500px] mt-10 rounded-lg"/>
    </div>
  );
};

export default page;
