import { bookApi } from '@/lib/api/book';
import { getQueryClient } from '@/lib/utils/getQueryClient';
import { useMutation } from '@tanstack/react-query';

export function useLoadMoreBooks(searchParams: URLSearchParams) {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: () => bookApi.getBooks({ searchURL: searchParams.toString() }),
    onSuccess: (books) => {
      queryClient.setQueryData(bookApi.getBooksOptions().queryKey, (oldData) =>
        oldData ? [...oldData, ...books] : books,
      );
    },
  });
}
