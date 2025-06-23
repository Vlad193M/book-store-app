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
      queryFn: (meta) => cartApi.getCart(meta, headers),
    }),

    queryClient.prefetchQuery({
      queryKey: bookApi.getRecommendedOptions().queryKey,
      queryFn: (meta) => bookApi.getRecommendedBooks(meta, headers),
    }),
  ]);
}
