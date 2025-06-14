'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import emptyStar from '@/../public/empty-star.svg';
import star from '@/../public/star.svg';
import rightArrow from '@/../public/white-right-arrow.svg';
import { addReview } from '@/lib/actions/addReview';

export default function ReviewForm() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const [validationErrors, setValidationErrors] = useState<{
    review?: string;
    rating?: string;
  }>({});

  const validateForm = () => {
    const errors: { review?: string; rating?: string } = {};

    if (reviewText.trim().length < 10) {
      errors.review = 'Review must be at least 10 characters long.';
    }
    if (reviewRating < 1 || reviewRating > 5) {
      errors.rating = 'Please select a rating between 1 and 5 stars.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (formData: FormData) => {
    if (!validateForm()) {
      return;
    }

    const data = {
      bookId: id,
      review: reviewText,
      rating: reviewRating,
    };

    const response = await addReview(data);

    router.refresh();
    console.log(response);

    setReviewText('');
    setReviewRating(0);
  };

  return (
    <form
      action={handleSubmit}
      className='bg-[#F2F2F2] my-4 mt-4 rounded-2xl border border-[#d3d3d3] p-4'
    >
      {Object.keys(validationErrors).length > 0 && (
        <div className='mb-1.5'>
          {Object.values(validationErrors).map((errorText) => (
            <p key={errorText} className='text-red-400 font-bold text-[12px] sm:text-[16px]'>
              {errorText}
            </p>
          ))}
        </div>
      )}
      <textarea
        className='p-2 text-[#949494] leading-[1.7] w-full h-32 mb-3 border border-[#00000026]'
        name='review'
        placeholder='Write your review...'
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />

      <div className='flex justify-between gap-3 flex-col sm:flex-row'>
        <div className='flex gap-3.5 justify-between sm:justify-normal items-center '>
          <p>Your Ratings:</p>
          <div className='flex gap-0.5'>
            {[1, 2, 3, 4, 5].map((rating) => (
              <Image
                width={25}
                height={25}
                key={rating}
                onClick={() => setReviewRating(rating)}
                src={rating <= reviewRating ? star : emptyStar}
                alt={`${rating} star`}
                className='cursor-pointer'
                aria-label={`Rate ${rating} star${rating > 1 ? 's' : ''}`}
              />
            ))}
          </div>
        </div>
        <button className='bg-black rounded-[64px] gap-2.5 flex justify-between py-2.5 px-6 max-w-44 self-end'>
          <p className='text-white '>Post Review</p>
          <Image src={rightArrow} alt='right arrow' />
        </button>
      </div>
    </form>
  );
}
