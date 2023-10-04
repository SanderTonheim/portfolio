import Image from 'next/image'
import image from '@/assets/heroImage.png'

export default function Header() {
	return (
		<section className='text-6xl flex flex-col bg-[#010101] text-white md:flex-row-reverse md:justify-between '>
			<div className='px-4 md:max-w-sm md:flex md:flex-wrap md:w-full md:self-start md:px-0 md:pr-8 md:flex-1'>
				<h1 className=''>Sander</h1>
				<h1 className='flex justify-end md:w-full'>Tonheim</h1>
			</div>

			<Image
				src={image}
				width={350}
				className=''
			/>
		</section>
	)
}
