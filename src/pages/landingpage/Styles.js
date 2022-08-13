import styled from 'styled-components'
import { heroImg, card } from './Components'

export const StyledContainer = styled.div`
	width: 100vw;
	height: 100%;
	margin: 0px;
`

export const StyledHeroImg = styled(heroImg)`
	width: 100%;
	height: 93vh;
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
	background-color: #4e4e4e;
	height: 20rem;
	max-width: 80%;
	margin: 4rem auto;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	gap: 12rem;

	.Text {
		display: flex;
		flex-direction: column;
		width: 30rem;
	}

	img {
		width: 10rem;
		height: 20rem;
	}
`
