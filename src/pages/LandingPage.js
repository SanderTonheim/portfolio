import {
	StyledHeroImg,
	StyledContainer,
	StyledCard,
} from './landingpage/Styles'

import CardPic1 from './../images/Man.jpg'

export const LandingPage = () => {
	return (
		<StyledContainer>
			<StyledHeroImg />
			<StyledCard Title='Prosjekt 1' Text='Prosjekt 1' Image={CardPic1} />
			<StyledCard Title='Prosjekt 1' Text='Prosjekt 2' Image={CardPic1}  />
			
		</StyledContainer>
	)
}
