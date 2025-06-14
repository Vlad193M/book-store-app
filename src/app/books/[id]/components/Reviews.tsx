import Image from 'next/image';

import star from '@/../public/star.svg';

interface ReviewsProps {
  reviews: {
    id: string;
    text: string;
    rating: number;
    date: Date;
    user: { name: string };
  }[];
}

interface ReviewItemProps {
  name: string;
  text: string;
  date: Date;
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
        />
      ))}
    </div>
  );
}

function ReviewItem({ name, text, date }: ReviewItemProps) {
  return (
    <div className='p-4 rounded-[14px] border border-[#d3d3d3]'>
      <div className='flex justify-between'>
        <p className='text-[#3d3d3d]'>{name}</p>
        <div className='flex gap-0.5'>
          <Image src={star} alt='star' />
          <Image src={star} alt='star' />
          <Image src={star} alt='star' />
          <Image src={star} alt='star' />
          <Image src={star} alt='star' />
        </div>
      </div>
      <p className='text-[#3d3d3d] text-[12px] mb-1.5'>{date.toDateString()}</p>
      <p className='text-[#949494]'>{text}</p>
    </div>
  );
}
