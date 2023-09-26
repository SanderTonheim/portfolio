import Image from 'next/image'
import image from '@/assets/heroImage.png'

export default function Header() {
	return (
		<section className=' text-6xl flex flex-col bg-[#010101] text-white'>
			<div className='px-4'>
				<h1 className=''>Sander</h1>
				<h1 className='flex justify-end'>Tonheim</h1>
			</div>
			<Image
				src={image}
				width={350}
			/>
		</section>
	)
}
