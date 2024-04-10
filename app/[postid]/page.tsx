"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";

const Post = ({}) => {
  interface Meal {
    idMeal: number;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strArea: string;
  }
  type RouteParams = {
    postid: string;
  };

  const [data, setData] = useState<Meal[]>([]);

  const { postid } = useParams<RouteParams>();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${postid}`)
      .then((res) => res.json())
      .then((data) => setData(data.meals));
  }, [postid]);

  return (
    <div className=" px-20 max-sm:px-5 py-10">
      <div className="flex">
        {data.map((meal) => {
          return (
            <div key={meal.idMeal}>
              <div className="flex flex-col gap-5 ">
                <h1 className=" font-Garmond text-Primary font-semibold text-[60px] max-sm:text-[40px] max-ss:text-[30px]">
                  {meal.strMeal}
                </h1>
                <p className=" font-Garmond text-Primary font-medium text-[24px]">
                  {meal.strInstructions}
                </p>
              </div>
              <div className=" mt-20">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
