'use client';

import { DescriptionComponentType, ReviewComponentType } from '@/types/book';
import { useState } from 'react';
import Description from './Description';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

interface DetailsProps {
  descriptionData: DescriptionComponentType | null;
  reviews: ReviewComponentType[];
}

export default function Details({ descriptionData, reviews }: DetailsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>(
    'description'
  );

  return (
    <div className='bg-[#f8f8f8] py-10'>
      <div className='container'>
        <div className='flex items-center justify-center md:justify-start mb-10'>
          <button
            onClick={() => setActiveTab('description')}
            className={`text-[#696969] text-[26px] leading-8 ${
              activeTab === 'description' && 'font-bold'
            }`}
          >
            Description
          </button>
          <div className='bg-[#000] w-[1px] h-8 mx-5' />
          <button
            onClick={() => setActiveTab('reviews')}
            className={`text-[#696969] text-[26px] leading-8 ${
              activeTab === 'reviews' && 'font-bold'
            }`}
          >
            Reviews
          </button>
        </div>
        <div className={activeTab === 'description' ? 'block' : 'hidden'}>
          <Description descriptionData={descriptionData} />
        </div>
        <div className={activeTab === 'reviews' ? 'block' : 'hidden'}>
          <Reviews reviews={reviews} />
          <ReviewForm />
        </div>
      </div>
    </div>
  );
}
