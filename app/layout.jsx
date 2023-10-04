import Footer from '@/components/footer'
import Navbar from '../components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='flex flex-col justify-between min-h-screen'>
				<Navbar />
				<main className='flex flex-grow flex-col bg-[#010101]'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
