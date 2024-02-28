import React from 'react'

declare global {
  interface AnswerProps {
    content: string;
    // reference: string[];
  }
}

export default function Answer(props: AnswerProps) {
  return (
    <div className='flex justify-center'>
      <p className='text-lg text-justify mb-5'>
        {props.content} 
      </p>
    </div>
  )
}