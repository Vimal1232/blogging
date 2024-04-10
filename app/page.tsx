"use client";

import BlogCards from "@/components/BlogCards";

const page = () => {
  return (
    <div className=" px-20 max-sm:px-5 py-10">
      <div className=" flex gap-10 flex-col">
        <h1 className=" text-Primary font-Garmond text-[40px]">Top Picks</h1>
        <BlogCards
          range={25}
          range2={28}
          Gridcols="grid-cols-3"
          md="max-md:grid-cols-3"
          sm="max-sm:grid-cols-2"
          xs="max-xs:grid-cols-1"
        />
      </div>
      <div className=" flex gap-10 flex-col mt-20">
        <h1 className=" text-Primary font-Garmond text-[40px]">All Blogs</h1>
        <BlogCards
          range={3}
          range2={20}
          Gridcols="grid-cols-4"
          md="max-md:grid-cols-3"
          sm="max-sm:grid-cols-2"
          xs="max-xs:grid-cols-1"
        />
      </div>
    </div>
  );
};

export default page;
