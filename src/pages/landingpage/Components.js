import { Headline1 } from '../../components/GlobalStyles'
import HeroImg from './../../images/Man.jpg'

export const heroImg = ({ className }) => {
	return (
		<div className={className}>
			<img src={HeroImg}></img>
			<div>
				<Headline1>Sander Tonheim</Headline1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
					voluptatem cum ad non, neque officia velit fuga omnis autem, eum
					optio. Magnam quaerat ullam aliquid perspiciatis, alias commodi
					voluptatibus placeat.
				</p>
			</div>
		</div>
	)
}

// export const btn = ({className, Text}) => {
// 	return (
// 		<button className={className}>{Text}</button>
// 	)
// }
