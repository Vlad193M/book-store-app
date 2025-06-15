import { DescriptionComponentType } from '@/types/book';

interface DescriptionProps {
  descriptionData: DescriptionComponentType | null;
}

export default function Description({ descriptionData }: DescriptionProps) {
  console.log('descriptionData', descriptionData);
  return (
    <section className=''>
      <h3 className='text-[#696969] text-xl leading-8 font-bold'>Annotation</h3>
      <p className='text-[#575757] leading-[1.7] mb-2 text-justify'>
        {descriptionData?.annotation}
      </p>
      <h3 className='text-[#696969] text-xl font-bold mb-4'>Characteristics</h3>
      <div>
        {!!descriptionData?.author && (
          <CharacteristicItem
            clef='Author'
            value={descriptionData.author.name}
          />
        )}
        {!!descriptionData?.publisher && (
          <CharacteristicItem
            clef='Publisher'
            value={descriptionData.publisher}
          />
        )}
        {!!descriptionData?.publication_year && (
          <CharacteristicItem
            clef='Publication year'
            value={String(descriptionData.publication_year)}
          />
        )}
        {!!descriptionData?.language && (
          <CharacteristicItem
            clef='Language'
            value={descriptionData.language}
          />
        )}
        {!!descriptionData?.format && (
          <CharacteristicItem
            clef='Format'
            value={
              descriptionData.format[0].toUpperCase() +
              descriptionData.format.slice(1).toLowerCase()
            }
          />
        )}
        {!!descriptionData?.book_categories[0].category.name && (
          <CharacteristicItem
            clef='Category'
            value={descriptionData.book_categories[0].category.name}
          />
        )}
        {!!descriptionData?.isbn && (
          <CharacteristicItem clef='ISBN' value={descriptionData.isbn} />
        )}
        {!!descriptionData?.pages && (
          <CharacteristicItem
            clef='Pages'
            value={String(descriptionData.pages)}
          />
        )}
        {!!descriptionData?.weight && (
          <CharacteristicItem
            clef='Weight'
            value={`0.${descriptionData.weight} kg`}
          />
        )}
        {!!descriptionData?.dimensions && (
          <CharacteristicItem
            clef='Dimensions'
            value={descriptionData.dimensions}
          />
        )}
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
