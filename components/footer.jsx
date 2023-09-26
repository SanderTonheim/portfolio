import github from '@/assets/footer/github.svg'
import Image from 'next/image'
export default function Footer() {
	return (
		<section className=' bg-slate-700 h-20 flex px-5 lg:justify-center'>
			<div className=' w-full flex justify-between items-center lg:max-w-7xl '>
				<p>Sander Tonheim</p>
				<Image
					src={github}
					height={40}
					width={40}
				/>
			</div>
		</section>
	)
}
