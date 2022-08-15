import {
	StyledHeroImg,
	StyledContainer,
	StyledCard,
} from './landingpage/Styles'

import PokemonPic from './../images/PokemonPic.jpg'
import ToDo from './../images/ToDo.png'
import tipCalc from './../images/TipCalc.png'
import FigmaLogo from './../images/FigmaLogo.png'

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
			<StyledCard
				Title='Fritids prosjekt'
				Text='På fritiden min liker jeg å holde på med egene prosjekter. For tiden holder jeg på å designet og lage en time prosent app for min fetter. Følg linken for å se designet i Figma.'
				LinkText='Figma Design'
				Link='https://www.figma.com/proto/tCr9iEYObvQSjhsoZzfuUG/Utkast-Foks-AS?node-id=526%3A109&scaling=scale-down&page-id=390%3A137&starting-point-node-id=526%3A109'
				Image={FigmaLogo}
			/>
		</StyledContainer>
	)
}
