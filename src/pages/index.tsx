
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen p-16 border-2  w-full border-blue-500">
     <p className={`${inter.className} mt-24 w-full`} >
     Hello Deraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
     </p>
    </main>
  );
}