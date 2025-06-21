import { cartApi } from '@/lib/api/cart';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdateCartItem() {
  const queryClient = useQueryClient();

  const updateCartItem = useMutation({
    mutationFn: cartApi.updateCartItem,

    onMutate: async (updatedCartItem) => {
      await queryClient.cancelQueries({
        queryKey: [cartApi.baseKey],
      });

      const previousCart = queryClient.getQueryData(
        cartApi.getCartOptions().queryKey,
      );

      queryClient.setQueryData(cartApi.getCartOptions().queryKey, (oldCart) => {
        if (!oldCart || !oldCart.cartItems) return oldCart;

        if (updatedCartItem.quantity > 0) {
          return {
            ...oldCart,
            cartItems: oldCart.cartItems.map((cartItem) =>
              cartItem.bookId === updatedCartItem.bookId
                ? { ...cartItem, quantity: updatedCartItem.quantity }
                : cartItem,
            ),
          };
        } else {
          return {
            ...oldCart,
            cartItems: oldCart.cartItems.filter(
              (cartItem) => cartItem.bookId !== updatedCartItem.bookId,
            ),
          };
        }
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

  const updateItem = (bookId: string, quantity: number) => {
    updateCartItem.mutate({ bookId, quantity });
  };

  return {
    updateItem,
  };
}
