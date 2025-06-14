import CardSkeleton from '@/components/CardSkeleton';

export default function SimilarBooksSkeleton() {
  return (
    <section>
      <h2 className='text-[#3D3D3D] text-4xl font-bold leading-[45px] mb-9'>
        Similar books
      </h2>
      <div aria-busy='true' className='flex flex-wrap gap-8 justify-center'>
        {[...Array(4)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
