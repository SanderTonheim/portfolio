import styled, { createGlobalStyle } from 'styled-components'
import { Footer } from './Footer'

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0px;
  margin: 0px;
	height: auto;
	width: 100%;
}

body {
	height: auto;
  max-width: 100%;
	margin: 0 auto;
	background-color: #4e4e4e;
	font-family:  serif, Arial, Helvetica, sans-serif;

}

.nav > * {
  background-color: #1b1b1e;
	color: #fff;
	max-width: 100%;
	height: 5rem;
	padding: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style-type: none;
	justify-content: space-around;
	ul {
		padding: 0px;
		height: 5rem;
		
	}
	li {
	flex-basis: 01rem;
	text-align: center;
	
	}
  a {
    color:#fff;
    text-decoration: none;
		padding: 4px 20px;
  }

	a:hover {
		border: solid white 4px;
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
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;

	/* background-color: #333;
	color: #fff;
	max-width: fit-content;
	height: 7rem;
	display: flex;
	justify-content: center;
	justify-content: space-around; */

	/* h4,
	p {
		align-self: center;
	} */
`
