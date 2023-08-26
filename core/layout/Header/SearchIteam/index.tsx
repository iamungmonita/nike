import Image from 'next/image';
import React from 'react';

import { search } from '@/public/icons';

interface PropType {
  onCancel?:() => void;
}

export default function SearchItem(props: PropType) {
  const {onCancel} = props;
  return (
    <div className='search-wrapper'>
      <div className='flex gap-x-3'>
        <div className='bg-gray-200 flex flex-auto rounded-full lg:flex gap-x-3 p-3'>
          <Image src={search} alt={search} width={24} height={24}></Image>
          <input type="text" className='bg-transparent w-[100%] outline-none' placeholder='Search...' />
        </div>
        <button onClick={onCancel} className='font-medium'>Cancel</button>
      </div>
      <h2>Popular Search Terms</h2>
    </div>
  )
}
