import { Headline1, Headline2 } from '../../components/GlobalStyles'
import HeroImg from './../../images/PortfolioPic1.jpg'

export const heroImg = ({ className }) => {
	return (
		<div className={className}>
			<img src={HeroImg}></img>
			<div className='HeroText'>
				<Headline1>Sander Tonheim</Headline1>
				<p>
					Jeg er Sander og er soon to be frontend utvikler. Jeg er 24 år, har
					fagbrev i IKT service faget og studerer ved Kodehode Bergen Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil quos autem harum rem fuga voluptatem, doloribus, perferendis nam quasi expedita quaerat optio dolore consequuntur est facilis fugiat dicta eos.
				</p>
			</div>
		</div>
	)
}
export const card = ({ className, Title, Text, Image }) => {
	return (
		<div className={className}>
			<div className='Text'>
				<Headline2>{Title}</Headline2>
				<p>{Text}</p>
			</div>
			<img src={Image} alt='' />
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