import styled from 'styled-components'
import { heroImg, card } from './Components'

export const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0px;
`

export const StyledHeroImg = styled(heroImg)`
	display: flex;
	flex-direction: row-reverse;
	max
	-width: 100vw;
	justify-content: space-between;
	height: auto;
	background-color: lightgray;

	img {
		max-width: 50%;
		min-height: auto;
		object-fit: fill;
	}

	p {
		background-color: #d4d3d3;
		font-size: x-large;
		text-align: center;
		padding: 3rem 4rem;
	}
	.HeroText {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 8rem;
	}
`

export const StyledCard = styled(card)`
	background-color: lightgrey;
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
// export const StyledBtn = styled(btn)`
// 	background-color: blue;
// 	width: 90px;
// 	height: 100px;
// `
