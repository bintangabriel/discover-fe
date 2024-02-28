import Answer from "@/src/components/Answer";
import SourcesBox from "@/src/components/SourcesBox";
import SourcesWrapper from "@/src/components/SourcesWrapper";
import { GetStaticProps } from "next";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

interface AnswersProps {
  title: string;
  sources: {
    name: string;
    url: string;
    title: string;
  }[];
  content: string;
  day: string;
}

const Answers = async ({ params }: { params: { answerId: string } }) => {
  //   const [data, setData] = useState<any>();

  const res = await fetch(
    `https://discover-nine-mocha.vercel.app/discover/full/${params.answerId}`,
    { cache: "no-store" }
  );
  const jsonData = await res.json();
  console.log(jsonData);
  console.log(`haloo this is daata : ${jsonData}`);

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid justify-center w-4/5 gap-3">
          <h1 className="mt-10 mb-3 text-4xl font-semibold">{jsonData.title}</h1>
          <h1 className="mb-3 text-2xl font-medium">Sources</h1>
          <SourcesWrapper>
            {jsonData.sources.map((source: any, index: any) => (
              <React.Fragment key={index}>
                <div className="flex-1">
                  <SourcesBox
                    name={source.name}
                    url={source.url.toString()}
                    title={source.title}
                  />
                </div>
              </React.Fragment>
            ))}
          </SourcesWrapper>
          <h1 className="mt-5 text-2xl font-medium">Answer</h1>
          <Answer content={jsonData.content} />
        </div>
      </div>
    </div>
  );
};

// export const getProps = (id:string) => {
//   const data: AnswersProps = await res.json();
//   const processedData: AnswersProps = {
//     title: data.title,
//     sources: data.sources,
//     content: data.content,
//     day: data.day
//   };

//   return {
//     props: processedData,
//   };
// };

export default Answers;
