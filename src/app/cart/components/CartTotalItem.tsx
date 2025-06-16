export default function CartTotalItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className='flex justify-between px-2 md:px-4 py-4 md:py-6 border-b border-[#DEDFE1] last:border-0'>
      <p className='text-[14px] md:text-[16px] text-[#3d3d3d] leading-[20px]'>
        {title}
      </p>
      <p className='text-[14px] md:text-[16px] text-[#949494] leading-[20px]'>
        {value}
      </p>
    </div>
  );
}
