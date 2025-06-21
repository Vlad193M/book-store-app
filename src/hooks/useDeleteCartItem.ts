import { cartApi } from '@/lib/api/cart';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteCartItem() {
  const queryClient = useQueryClient();

  const deleteCartItem = useMutation({
    mutationFn: cartApi.deleteCartItem,

    onMutate: async (deletedItem) => {
      await queryClient.cancelQueries({
        queryKey: [cartApi.baseKey],
      });

      const previousCart = queryClient.getQueryData(
        cartApi.getCartOptions().queryKey,
      );

      queryClient.setQueryData(cartApi.getCartOptions().queryKey, (oldCart) => {
        if (!oldCart || !oldCart.cartItems) return oldCart;

        return {
          ...oldCart,
          cartItems: oldCart.cartItems.filter(
            (cartItem) => cartItem.bookId !== deletedItem.bookId,
          ),
        };
      });

      return { previousCart };
    },

    onError(_, __, context) {
      if (context) {
        queryClient.setQueryData([cartApi.baseKey], context.previousCart);
      }
    },

    onSettled() {
      queryClient.invalidateQueries({
        queryKey: [cartApi.baseKey],
      });
    },
  });

  const deleteItem = (bookId: string) => {
    deleteCartItem.mutate({ bookId });
  };

  return {
    deleteItem,
  };
}
