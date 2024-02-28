import Link from 'next/link';
import React from 'react'

declare global{
    interface SourcesProps {
        name: string;
        url: string;
        title: string;
    }
}

const SourcesBox = (props: SourcesProps) => {
    let urlObject = new URL(props.url);
  return (
    <Link href={urlObject}>
        <div className='bg-slate-400 rounded-md p-2'>
            <p className='text-lg font-semibold'>
                {props.title}
            </p>
            <p>
                {props.name}
            </p>
        </div>
    </Link>
  )
}

export default SourcesBox;
