import Image from 'next/image';

import emptyStar from '@/../public/empty-star.svg';
import star from '@/../public/star.svg';
import { ReviewComponentType } from '@/types/book';

interface ReviewsProps {
  reviews: ReviewComponentType[];
}

interface ReviewItemProps {
  name: string;
  text: string;
  date: Date;
  rating: number;
}

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className='flex flex-col gap-4'>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          name={review.user.name}
          text={review.text}
          date={review.date}
          rating={review.rating}
        />
      ))}
    </div>
  );
}

function ReviewItem({ name, text, date, rating }: ReviewItemProps) {
  return (
    <div className='p-4 rounded-[14px] border border-[#d3d3d3]'>
      <div className='flex justify-between'>
        <p className='text-[#3d3d3d]'>{name}</p>
        <div className='flex gap-0.5'>
          {Array.from({ length: 5 }, (_, index) => (
            <Image
              key={index}
              src={index < rating ? star : emptyStar}
              alt='star'
              width={16}
              height={16}
            />
          ))}
        </div>
      </div>
      <p className='text-[#3d3d3d] text-[12px] mb-1.5'>{date.toDateString()}</p>
      <p className='text-[#949494]'>{text}</p>
    </div>
  );
}
