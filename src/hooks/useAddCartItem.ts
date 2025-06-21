import { cartApi } from '@/lib/api/cart';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdateCartItem() {
  const queryClient = useQueryClient();

  const addCartItem = useMutation({
    mutationFn: cartApi.addCartItem,

    onSettled() {
      queryClient.invalidateQueries({
        queryKey: [cartApi.baseKey],
      });
    },
  });

  const addItem = (bookId: string, quantity: number) => {
    addCartItem.mutate({ bookId, quantity });
  };

  return {
    addItem,
  };
}
