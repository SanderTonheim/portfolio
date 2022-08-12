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
	width: 100%;
	justify-content: space-between;
	height: 52rem;
	/* background-color: lightgray; */
	margin: 0 auto;

	img {
		max-width: 50%;
		min-height: 100%;
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
	height: 300px;
	width: 400px;

	p {
		color: green;
	}

	img {
		width: 200px;
		height: 200px;
	}
`
// export const StyledBtn = styled(btn)`
// 	background-color: blue;
// 	width: 90px;
// 	height: 100px;
// `
