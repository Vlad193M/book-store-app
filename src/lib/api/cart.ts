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

    if (!response.ok) {
      throw new Error(`Failed to fetch cart: ${response.status} ${response.statusText}`);
    }

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
    const response = await fetch(`${API_BASE_URL}/api/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId,
        quantity,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add cart item: ${response.status} ${response.statusText}`);
    }

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
    const response = await fetch(`${API_BASE_URL}/api/cart/item/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update cart item: ${response.status} ${response.statusText}`);
    }

    const body = await response.json();
    return body;
  },

  deleteCartItem: async ({ bookId }: { bookId: string }) => {
    const response = await fetch(`${API_BASE_URL}/api/cart/item/${bookId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete cart item: ${response.status} ${response.statusText}`);
    }

    const body = await response.json();
    return body;
  },
};
