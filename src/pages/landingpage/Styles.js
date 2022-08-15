import styled from 'styled-components'
import { heroImg, card, experienceContainer } from './Components'

export const StyledContainer = styled.div`
	width: 100%;
	height: auto;
`

export const StyledHeroImg = styled(heroImg)`
	max-width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column-reverse;

	.HeroText > * {
		max-width: fit-content;
		height: fit-content;
		margin: 3rem 1.5rem;
		background-color: #fff;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		/* color: white; */
	}

	img {
		max-width: min-content;
		height: fit-content;
	}
`
export const StyledExperienceContainer = styled(experienceContainer)`
	height: auto;
	display: flex;
	flex-wrap: wrap;
	max-width: fit-content;
	height: fit-content;
	margin: 3rem 0.5rem;
	text-align: center;
	background-color: #fff;

	p {
		margin: 3rem 0.5rem;
	}
`

export const StyledCard = styled(card)`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	flex-basis: content;
	background-color: #fff;
	max-width: fit-content;
	margin: 0 0.5rem;
	margin-bottom: 3rem;
	padding: 0;

	.Text {
		text-align: center;
		max-width: 100%;
		margin: 0rem 0.5rem;
		background-color: #fff;
	}
	p {
		margin-top: 1rem;
	}
	.CardPic {
		max-width: 100%;
		max-height: auto;
		padding: 1rem 0.5rem;
	}

	a {
		color: black;
	}
`
