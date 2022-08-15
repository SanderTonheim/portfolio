import styled from 'styled-components'
import { heroImg, card } from './Components'

export const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0px;
`

export const StyledHeroImg = styled(heroImg)`
	width: 100%;
	height: 93rem;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;

	img {
		min-width: 50%;
		height: 93vh;
	}

	.HeroText {
		min-width: 50%;
		height: auto;
		background-color: #4e4e4e;
		font-size: x-large;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	h1 {
		color: white;
	}
	p {
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
