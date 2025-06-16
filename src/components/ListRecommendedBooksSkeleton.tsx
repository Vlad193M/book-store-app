import CardSkeleton from '@/components/CardSkeleton';

interface ListRecommendedBooksSkeletonProps {
  count: number;
}

export default function ListRecommendedBooksSkeleton({
  count,
}: ListRecommendedBooksSkeletonProps) {
  return (
    <div aria-busy='true' className='flex flex-wrap gap-8 justify-center'>
      {[...Array(count)].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
