"use client";
import { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLike, setIsLike] = useState(false);
  const [like, setLike] = useState("");
  const trigger = ()=>{
      setIsLike(!isLike);
  };
  useEffect(() => {
    setLike(isLike ? "text-red-400" : "");
  }, [isLike]);

  return (
    <div>
      <HeartIcon
        className={`h-6 w-6 text-black-500 cursor-pointer ${like}`}
        onClick={trigger}
      />
       <p> isLike: {isLike ? 'true' : 'false'} </p>
    </div>
  );
};

export default Like;


// console.log(isLike);


  // useEffect(() => {
  //   const trigger = ()=>{
  //     setIsLike(!isLike);
  // }
  // }, [isLike]);

    // useEffect(() => {
  //   console.log(`isLike changed to: ${isLike}`);
  // }, [isLike]);