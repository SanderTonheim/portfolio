import {
	StyledHeroImg,
	StyledContainer,
	StyledCard,
} from './landingpage/Styles'

import PokemonPic from './../images/PokemonPic.jpg'
import ToDo from './../images/ToDo.png'
import tipCalc from './../images/TipCalc.png'

export const LandingPage = () => {
	return (
		<StyledContainer>
			<StyledHeroImg />

			<StyledCard
				Title='Pokèmon Fetch'
				Text='App hvor man kan søke opp forksjellige Pokèmon'
				Image={PokemonPic}
			/>

			<StyledCard
				Title='ToDo Liste'
				Text='Todo list var ett av de førse prosjektene hjvor jeg kombinerte alt. Det er optimaliser for mobil.'
				Image={ToDo}
			/>
			<StyledCard
				Title='Tip kalkulator'
				Text='Tip kalkulator er et nyttig verktøy for å renge ut tips når det du er ute å spiser med venner eller familie '
				Image={tipCalc}
			/>
		</StyledContainer>
	)
}
