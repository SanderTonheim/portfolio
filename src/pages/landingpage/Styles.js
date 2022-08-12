import styled from 'styled-components'
import { btn, heroImg } from './Components'

export const StyledContainer = styled.div`
	width: 100%;
	height: 100%;
	margin: 0px;
`

export const StyledHeroImg = styled(heroImg)`
	display: flex;
	flex-direction: row-reverse;
	margin: 0%;
	width: 100%;
	justify-content: space-between;
	max-height: 92vh;

	img {
		width: 50%;
		max-height: 100%;
	}

	p {
		font-size: x-large;
		text-align: center;
		padding: 3em 3em;
	}
`

// export const StyledBtn = styled(btn)`
// 	background-color: blue;
// 	width: 90px;
// 	height: 100px;
// `
