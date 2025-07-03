import FilterItemTemplate from './FilterItemTemplate';

const bookFormatsArray = ['Hardcover', 'Paperback', 'Ebook', 'Audiobook'];

export default function BookFormatFilter({
  initSelectedList,
}: {
  initSelectedList: string[];
}) {
  return (
    <FilterItemTemplate
      name='bookFormats'
      title='Book Formats'
      list={bookFormatsArray}
      initSelectedList={initSelectedList}
    />
  );
}
