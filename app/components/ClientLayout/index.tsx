'use client';

import { ReactQueryProvider } from '@components/index';
import { TabelaFipeProvider } from '@context/TabelaFipeContext';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <TabelaFipeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </TabelaFipeProvider>
  );
}
