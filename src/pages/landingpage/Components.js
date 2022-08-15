import { Headline1, Headline2 } from '../../components/GlobalStyles'
import HeroImg from './../../images/PortfolioPic1.jpg'

export const heroImg = ({ className }) => {
	return (
		<div className={className}>
			<img src={HeroImg} alt='Pic' />
			<div className='HeroText'>
				<Headline1>Sander Tonheim</Headline1>
				<p>
					Jeg er Sander og er soon to be frontend utvikler. Jeg er 24 år, har
					fagbrev i IKT service faget og studerer ved Kodehode Bergen Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil
					quos autem harum rem fuga voluptatem, doloribus, perferendis nam quasi
					expedita quaerat optio dolore consequuntur est facilis fugiat dicta
					eos.
				</p>
			</div>
		</div>
	)
}
export const card = ({ className, Title, Text, Image, Link, LinkText }) => {
	return (
		<div className={className}>
			<div className='Text'>
				<h2>{Title}</h2>
				<p>{Text}</p>
				<a href={Link}>{LinkText}</a>
			</div>
			<div className='CardPic'>
				<img src={Image} alt='' />
			</div>
		</div>
	)
}

export const experienceContainer = ({ className }) => {
	return (
		<div className={className}>
			<Headline2>Tidligere erfaring</Headline2>
			<p>Jeg har vært utplassert i forbindelse med skole på blant annet Os ungdomskole, Storetveit ungdomskole og Bergen tekniske faghøyskole. Etter jeg tok fagbrevet i IKT servicefaget i 2019 har jeg vært i arbeidstrenig hos Helse vest IKT. Der jeg gjorde mye forskjellig. Jeg var med teknikere rundt på Haukeland sykehus for å fikse opp i tekniske problemer, samt vært IT hjelp på korona telefonen under pandemien.</p>
		</div>
	)
}

// export const btn = ({className, Text}) => {
// 	return (
// 		<button className={className}>{Text}</button>
// 	)
// }

// // export const StyledBtn = styled(btn)`
// 	background-color: blue;
// 	width: 90px;
// 	height: 100px;`
