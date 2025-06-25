import { bookApi } from '@/lib/api/book';
import { QueryClient } from '@tanstack/react-query';

export async function prefetchBooks(
  queryClient: QueryClient,
  query: URLSearchParams,
) {
  await queryClient.prefetchQuery({
    queryKey: bookApi.getBooksOptions().queryKey,
    queryFn: ({ signal }) =>
      bookApi.getBooks({ signal, searchURL: query.toString() }),
  });
}
