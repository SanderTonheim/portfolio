import styled from 'styled-components'
import { heroImg, card, experienceContainer } from './Components'

export const StyledContainer = styled.div`
	width: 100%;
	height: 10%;
	margin: 0px;
`

export const StyledHeroImg = styled(heroImg)`
	width: 100%;
	height: 93vh;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;

	img {
		max-width: 40%;
		height: 93vh;
	}

	.HeroText {
		max-width: 100%;
		height: 100%;
		background-color: #4e4e4e;
		font-size: x-large;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	h1,
	p {
		display: flex;
		flex-basis: content;

		color: white;
	}
`

export const StyledCard = styled(card)`
	display: flex;
	margin: 4rem auto;
	padding: 2rem;
	background-color: #4e4e4e;
	height: 20rem;
	max-width: 80%;
	justify-content: space-evenly;
	gap: 2rem;

	.Text {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		max-width: 50%;
		flex-basis: 50%;
		background-color: #fff;
		text-align: center;
		padding: 0 1rem;
	}

	p {
		max-width: 25rem;
		display: flex;
		font-size: larger;
		align-self: center;
	}

	a {
		color: black;
	}

	.CardPic {
		max-width: 50%;
		max-height: 100%;
		object-fit: fill;
	}

	img {
		max-width: 100%;
		min-height: 100%;
		max-height: 100%;
	}
`

export const StyledExperienceContainer = styled(experienceContainer)`
	max-width: 80%;
	max-height: fit-content;
	background-color: #fff;
	margin: 4rem auto;
`
