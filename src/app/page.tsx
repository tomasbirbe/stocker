import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full h-full grid place-items-center">
      <h1>Stocker</h1>
    </main>
  );
}
