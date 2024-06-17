import '../(main)/ui/global.css';
import { dmsans } from '../(main)/ui/fonts';
import Head from 'next/head'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
        <body className={`${dmsans.className} antialiased bodyContainer`}>
          {children}
        </body>
      </html>
  );
}
