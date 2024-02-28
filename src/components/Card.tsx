import React from "react";

interface CardProps {
  title: string;
  content: string;
  url: string;
}

const Card = (props: CardProps) => {
  const limitContent = (content:string):string => {
    const words = content.split(' ');

    if (words.length <= 70){
      return content;
    }
    return words.slice(0, 70).join(' ') + '...';

  }
  return (
    <div className="flex mt-3 transition duration-300 shadow-md hover:shadow-2xl h-full">
      <div className="w-1/5 bg-blue-100 items-center flex justify-center">
        <img className="p-2" src={props.url} alt="news-image"></img>
      </div>
      <div className="p-6 w-4/5">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <p className="mt-2 text-gray-600 text-justify">{limitContent(props.content)}</p>
      </div>
    </div>
  );
};

export default Card;
