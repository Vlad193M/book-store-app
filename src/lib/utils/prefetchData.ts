import { bookApi } from '@/lib/api/book';
import { cartApi } from '@/lib/api/cart';
import { QueryClient } from '@tanstack/react-query';

export async function prefetchInitialData(
  queryClient: QueryClient,
  token: string | undefined,
) {
  if (!token) return;

  const headers = {
    cache: 'no-store' as const,
    headers: {
      Cookie: `token=${token};`,
    },
  };

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [cartApi.baseKey],
      queryFn: (meta) =>
        cartApi.getCart({ signal: meta.signal, init: headers }),
    }),

    queryClient.prefetchQuery({
      queryKey: bookApi.getRecommendedBooksOptions().queryKey,
      queryFn: (meta) =>
        bookApi.getRecommendedBooks({ signal: meta.signal, init: headers }),
    }),
  ]);
}
