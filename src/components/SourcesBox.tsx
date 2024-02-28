import Link from 'next/link';
import React from 'react'
import { limitText } from '../utils/limitText';

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
    <Link href={urlObject} target='blank'>
        <div className='transition duration-300 shadow-md hover:shadow-2xl rounded-md p-2 bg-gray-100'>
            <p className='text-lg font-semibold'>
                {limitText(props.title, 10)}
            </p>
            <p>
                {props.name}
            </p>
        </div>
    </Link>
  )
}

export default SourcesBox;
