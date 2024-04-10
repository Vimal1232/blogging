"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface BlogCardsProps {
  range: number;
  range2: number;
  Gridcols: string;
  md: string;
  sm: string;
  xs: string;
}
interface Meal {
  idMeal: number;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strArea: string;
}

const BlogCards = ({ range, range2, Gridcols, md, sm, xs }: BlogCardsProps) => {
  const pathname = useRouter();

  const [data, setData] = useState<Meal[]>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((res) => res.json())
      .then((data) => setData(data.meals));
  }, []);

  const handleClick = (id: number) => {
    pathname.push(`/${id}`);
  };

  return (
    <div>
      <div className={` grid  ${Gridcols} gap-5 ${md} ${sm} ${xs} `}>
        {data.slice(range, range2).map((meal) => {
          return (
            <div
              key={meal.idMeal}
              onClick={() => handleClick(meal.idMeal)}
              className=" flex flex-col gap-5 bg-Bg_navbar p-5 cursor-pointer"
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} className="" />
              <div>
                <h1 className=" text-Primary font-Garmond text-[24px]">
                  {meal.strMeal}
                </h1>
                <p className=" text-Secondary font-Garmond text-[16px]">
                  {meal.strArea}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCards;
