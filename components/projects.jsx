import Image from 'next/image'
import Link from 'next/link'
import bfnr from '@/assets/bfnr.png'
import foks from '@/assets/foks.svg'
import hawii from '@/assets/Hawii.svg'
import jobbjakt from '@/assets/jobbjakt.svg'

export default function Projects() {
	return (
		<section className='CONTAINER bg-[url("../assets/bg.jpg")] '>
			<div className='CONTENT py-10 px-4 flex flex-col gap-6 md:items-center '>
				<h2 className='text-[#8a8a8a] md:max-w-2xl md:w-full xl:max-w-7xl'>Prosjekter</h2>
				<div className='CARDS flex flex-wrap gap-8 justify-center xl:max-w-7xl xl:justify-start'>
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
				</div>
			</div>
		</section>
	)
}

export const Card = ({ image, link, projectName, projectFor }) => {
	return (
		<div className=' min-w-[250px] max-w-[288px]   '>
			<Link href={link}>
				<div className='h-60 flex justify-center items-center p-7 bg-neutral-500/5 backdrop-blur-md'>
					<Image
						src={image}
						className=' m-auto'
						alt='logo'
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
