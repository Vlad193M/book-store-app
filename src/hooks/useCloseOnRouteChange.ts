import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function useCloseOnRouteChange(close: () => void) {
  const pathname = usePathname();

  useEffect(() => {
    close();
  }, [pathname]);
}
