import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen  w-100">
     <p className={`${inter.className}`}>
     dera
     </p>
    </main>
  );
}