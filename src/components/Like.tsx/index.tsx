"use client";
import { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

const Like = () => {
  const [isLike, setIsLike] = useState(false);
  const [like, setLike] = useState("");
  const trigger = () => {
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
      <p> isLike: {isLike ? "true" : "false"} </p>
    </div>
  );
};

export default Like;

// const [bugs, setBugs] = useState([
//   { id: 1, title: "bug1", fixed: false },
//   { id: 2, title: "bug2", fixed: true },
// ]);
// console.log(bugs);
// const trigger = () => {
//   setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
// };



// let count = 0 ;
// count++;



// interface Props {
//   onClick: () => void;
// }
// { onClick }: Props

// console.log(isLike);

// useEffect(() => {
//   const trigger = ()=>{
//     setIsLike(!isLike);
// }
// }, [isLike]);

// useEffect(() => {
//   console.log(`isLike changed to: ${isLike}`);
// }, [isLike]);


// const [tags, setTags] = useState(['happy', 'good']);
//Add
    // setTags([...tags, "sad"])

    //  delete
    // setTags(tags.filter(tag => tag!=="happy"))

    // update
    // setTags(tags.map(tag => tag === 'good'?'not bad': tag))
