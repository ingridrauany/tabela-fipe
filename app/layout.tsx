import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ClientLayout } from './components/index';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Consulta de Preço Tabela Fipe',
  description: 'Formulário para consulta de preços de automóveis na Tabela Fipe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
