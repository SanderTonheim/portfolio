import Image from 'next/image'
import bfnr from '@/assets/bfnr.svg'
import foks from '@/assets/foks.svg'
import Link from 'next/link'

export default function Projects() {
	return (
		<section className='bg-[#101010] py-10 px-4'>
			<h2 className='text-[#8a8a8a]'>Prosjekter</h2>
			<Card
				image={bfnr}
				link={'https://medlemsliste.bfnr.no/'}
				projectName={'Bedriftregister'}
				projectFor={'Bjørnafjorden Næringsråd'}
			/>
			<Card
				image={foks}
				link={'https://www.obligatorisk.no/'}
				projectName={'Oppmøteprosent kalkulator'}
				projectFor={'Foks AS'}
			/>
		</section>
	)
}

export const Card = ({ image, link, projectName, projectFor }) => {
	return (
		<div className='w-full bg-[#ffffff]'>
			<Link href={link}>
				<Image
					src={image}
					className=' h-60 mx-auto'
				/>
				<div className='bg-[#1a1a1a] h-20 px-3  flex flex-col justify-center '>
					<p className='text-white'>{projectName}</p>
					<p className='text-white opacity-50'>{projectFor}</p>
				</div>
			</Link>
		</div>
	)
}
