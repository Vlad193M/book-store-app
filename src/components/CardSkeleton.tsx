import Skeleton from 'react-loading-skeleton';

export default function CardSkeleton() {
  return (
    <div className='flex flex-col gap-3 w-[286px]'>
      <div className='rounded-[14px] overflow-hidden bg-gray-100 h-[360px] relative'>
        <Skeleton height='100%' width='100%' />
      </div>
      <div className='w-full'>
        <h2 className='text-xl mb-2'>
          <Skeleton width={200} />
        </h2>
        <div className='flex justify-between'>
          <Skeleton width={60} height={24} />
          <Skeleton circle width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
