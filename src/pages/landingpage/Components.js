import { Headline1, Headline2 } from '../../components/GlobalStyles'
import HeroImg from './../../images/PortfolioPic1 (1).jpg'

export const heroImg = ({ className }) => {
	return (
		<div className={className}>
			<img src={HeroImg}></img>
			<div className='HeroText'>
				<Headline1>Sander Tonheim</Headline1>
				<p>
					Jeg er Sander og er soon to be frontend utvikler. Jeg er 24 år, har
					fagbrev i IKT service faget og studerer ved Kodehode Bergen
				</p>
			</div>
		</div>
	)
}

export const card = ({ className, Title, Text, Image }) => {
	return (
		<div className={className}>
			<Headline2>{Title}</Headline2>
			<p>{Text}</p>
			<img src={Image} alt='' />
		</div>
	)
}
// export const btn = ({className, Text}) => {
// 	return (
// 		<button className={className}>{Text}</button>
// 	)
// }
