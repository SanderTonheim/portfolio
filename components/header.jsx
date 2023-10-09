import Image from 'next/image'
import image from '@/assets/heroImage.png'

export default function Header() {
	return (
		<section className='CONTAINER text-6xl flex flex-col text-white md:flex-row-reverse md:justify-between lg:w-full lg:max-w-4xl lg:self-center xl:max-w-6xl xl:flex-col xl:items-center '>
			<div className='TEXT bg-gradient-to-t from-white/0 to-slate-100/90 bg-clip-text text-transparent self-center max-w-sm flex flex-wrap w-full p-5 md:self-start md:pl-0 md:text-[4.3rem] xl:text-9xl xl:max-w-4xl xl:self-center xl:p-0'>
				<h1 className=''>Sander</h1>
				<h1 className='flex justify-end w-full xl:-mt-5 xl:-ml-20'>Tonheim</h1>
			</div>

			<Image
				src={image}
				className='xl:-mt-20 w-80'
			/>
		</section>
	)
}
