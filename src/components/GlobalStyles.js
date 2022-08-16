import styled, { createGlobalStyle } from 'styled-components'
import { Footer } from './Footer'

export const GlobalStyles = createGlobalStyle`



html > *  {
	width: 100%;
	max-height: 100%;
	padding: 0%;
	font-family:  serif, Arial, Helvetica, sans-serif;
}

body {
	margin: 0px;
	background-color: #4e4e4e;
}

img {
	max-width: 100%;
	height: auto;
}

.nav > ul {
  background-color: #1b1b1e;
	color: #fff;
	max-width: 100%;
	min-height: 5rem;
	padding: 0px;
	margin: 0%;
	display: flex;
	list-style-type: none;
	align-items: center;
	justify-content: space-evenly;
	
	li {
		justify-content:center;
		text-align: center;
		width: 8rem;

	
	}
  a {
    color:#fff;
    text-decoration: none;
		padding: 1rem 2rem;
  }

	a:hover {
		border: 1px solid white;
	}
}
`
export const Headline1 = styled.h1`
	font-size: 4rem;
	color: black;
	text-align: center;
`
export const Headline2 = styled.h2`
	font-size: 3rem;
	color: black;
	text-align: center;
`
export const StyledFooter = styled(Footer)`
	background-color: #1b1b1e;
	color: #fff;
	max-width: 100%;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-around;

	h4,
	p {
		flex-basis: content;
	}
`
