import Image from 'next/image'
import bfnr from '@/assets/bfnr.svg'
import foks from '@/assets/foks.svg'
import Link from 'next/link'
import hawii from '@/assets/Hawii.webp'
import jobbjakt from '@/assets/jobbjakt.svg'

export default function Projects() {
	return (
		<section className='bg-[#101010] py-10 px-4 flex flex-col gap-6'>
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
			<Card
				image={hawii}
				link={'https://www.hawii.no/bedrift'}
				projectName={'Hawii Analyse'}
				projectFor={'Kodeverket'}
			/>
			<Card
				image={jobbjakt}
				link={'https://www.jobbjakt.no/'}
				projectName={'Jobbjakt hjemmeside'}
				projectFor={'Kodeverket'}
			/>
		</section>
	)
}

export const Card = ({ image, link, projectName, projectFor }) => {
	return (
		<div className='w-full bg-[#ffffff]'>
			<Link href={link}>
				<div className='h-60 flex justify-center items-center p-7'>
					<Image
						src={image}
						className=' m-auto'
					/>
				</div>
				<div className='bg-[#1a1a1a] h-20 px-3  flex flex-col justify-center '>
					<p className='text-white'>{projectName}</p>
					<p className='text-white opacity-50'>{projectFor}</p>
				</div>
			</Link>
		</div>
	)
}
