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
			<StyledCard Title='Test' Text='lorum test' Image={CardPic1}  />
		</StyledContainer>
	)
}
