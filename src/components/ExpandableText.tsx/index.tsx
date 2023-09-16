import React, { useEffect, useState } from "react";

interface Props {
  children: String;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [data, setData] = useState(
    children.length >= maxChar ? children.substring(0, maxChar) : children
  );
  const exa = children.substring(0, children.length);
  const [isExpandable, setIsExpandable] = useState(true);
  const handle = () => {
    if (isExpandable) {
      //المشكلة هنااا 
      // لازم تكون بولين 
      setData(children.substring(0, children.length));
      setIsExpandable(!isExpandable);
    }
    else{
      setData(children.substring(0, maxChar));
      setIsExpandable(isExpandable);
    }
  };

  return (
    <>
      {data}{isExpandable ? <p>...</p> :""} 
      {children.length >= maxChar ? (
        <button className="bg-white" onClick={handle}>
          {isExpandable ? "more" : "less"}
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default ExpandableText;

//   const [data, setData] = useState( children );
// useEffect (() =>{
//   if(children.length >= maxChar){
//     setData(children.substring(0, maxChar));
//   }
//   else{
//     setData(children)
//   }
// },[])




// if (children.length >= maxChar) {

// {children.substring(0, maxChar)}

// }
// return (
//   <>
//     <p>{children}</p>
//   </>
// );
