"use client"
import Card from "@/src/components/Card";
import { getDateList } from "@/src/components/DateUtils";
import { redirectTo } from "@/src/hooks/useHandleNavigation";
import { getLastDate, setLastDate } from "@/src/hooks/useLastDate";
import { da } from "date-fns/locale";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Navbar from "@/src/components/Navbar";

let flag = false;

async function fetchNewsData(date:string){
  try {
    const res = await fetch(`https://discover-nine-mocha.vercel.app/discover/${date}`, {cache: 'no-store'});
    if (flag){
      setLastDate((Number(getLastDate())-1).toString());
    }
    console.log(`Last date ${getLastDate()}`);
    return res.json()
  } catch (error) {
    console.error('Error fetching the data: ', error)
    throw error;
  }
}

export default function Home() {
  
  const [newsArray, setNewsArray] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const loadMoreData = async () => {
    setIsLoading(true);
    const dt = await fetchNewsData(getLastDate());
    setNewsArray(prevArray => [...prevArray, ...dt.news])
    setIsLoading(false);
  }

  useEffect(() => {
    const fetchInitData = async () => {
      const data = await fetchNewsData(getLastDate());
      setLastDate((Number(getLastDate())-1).toString());
      setNewsArray(data.news);
      flag = true;
      setIsLoading(false);
    }
    fetchInitData();
  }, [])


  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex-row justify-center gap-5 w-4/5 mt-12 flex-row-1">
          {
            newsArray.map((news:any, index:any) => (
              <React.Fragment key={index}>
                <Link href={`/answer/${news.slug}`} className="w-4/5">
                  <div className="flex-grow"> 
                  <Card
                  title={news.title}
                    url={news.image_url}
                    content={news.content}
                  />

                  </div>
                </Link>
              </React.Fragment>
            ))
          }
          <div className="flex justify-center my-5">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={loadMoreData}>
            {isLoading ? 'Loading...'  : 'Load More' }</button>
          </div>
        </div>
      </div>   
    </div>
  );
}
