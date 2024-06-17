import './ui/global.css';
import Navbar from './ui/components/navigation/nav';
import { dmsans } from './ui/fonts';
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
        <Navbar/>
        {children}
        </body>
      </html>
  );
}
