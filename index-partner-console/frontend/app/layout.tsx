import './ui/global.css';
import Navbar from './ui/components/navigation/nav';
import { dmsans } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={`${dmsans.className} antialiased bodyContainer`}>
        <Navbar/>
        {children}
        </body>
      </html>
  );
}
