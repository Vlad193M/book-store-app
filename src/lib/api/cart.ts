const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
import { CartDataType } from '@/types/book';
import { queryOptions } from '@tanstack/react-query';

export const cartApi = {
  baseKey: 'cart',

  getCartOptions: () => {
    return queryOptions({
      queryKey: [cartApi.baseKey],
      queryFn: (meta) => cartApi.getCart(meta),
    });
  },

  getCart: async ({ signal }: { signal: AbortSignal }, init?: RequestInit) => {
    const response = await fetch(`${API_BASE_URL}/api/cart`, {
      ...init,
      signal,
    });

    const cartData = (await response.json()) as CartDataType;
    return cartData;
  },

  addCartItem: async ({
    bookId,
    quantity,
  }: {
    bookId: string;
    quantity: number;
  }) => {
    const response = await fetch(`api/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId,
        quantity,
      }),
    });

    const body = await response.json();
    return body;
  },

  updateCartItem: async ({
    bookId,
    quantity,
  }: {
    bookId: string;
    quantity: number;
  }) => {
    const response = await fetch(`api/cart/item/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity,
      }),
    });

    const body = await response.json();
    return body;
  },

  deleteCartItem: async ({ bookId }: { bookId: string }) => {
    const response = await fetch(`api/cart/item/${bookId}`, {
      method: 'DELETE',
    });

    const body = await response.json();
    return body;
  },
};
