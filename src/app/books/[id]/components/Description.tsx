interface DescriptionProps {
  description: string;
}

export default function Description({ description }: DescriptionProps) {
  return (
    <section className=''>
      <p className='text-[#575757] leading-[1.7] mb-2'>{description}</p>
      <h3 className='text-[#696969] text-xl font-bold mb-4'>Characteristics</h3>
      <div>
        <CharacteristicItem clef='Format' value='1300*200mm' />
        <CharacteristicItem clef='Format' value='1300*200mm' />
        <CharacteristicItem clef='Format' value='1300*200mm' />
      </div>
    </section>
  );
}

function CharacteristicItem({ clef, value }: { clef: string; value: string }) {
  return (
    <div className=''>
      <div className='flex justify-between gap-6'>
        <p className='text-[#575757]'>{clef}</p>
        <p className='text-[#575757]'>{value}</p>
      </div>
      <div className='bg-[#DDD] h-[1px] w-full my-4' />
    </div>
  );
}
