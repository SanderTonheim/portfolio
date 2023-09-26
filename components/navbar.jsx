'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import menuIcon from '@/assets/menu.svg'
import logo from '@/assets/logo.svg'

export default function Navbar() {
	const [open, setOpen] = useState(false)
	const toggle = () => {
		{
			setOpen(!open)
		}
	}

	const refOne = useRef()
	const handleClickOutSide = (e) => {
		if (refOne.current.contains(e.target)) {
		} else {
			setOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutSide)
	}, [])

	return (
		<nav className=' h-fit sticky bg-[#010101]'>
			<div className='flex justify-between items-center px-3 py-4 max-w-7xl mx-auto'>
				<Image
					src={logo}
					className='w-9'
					alt='menu icon'
				/>
				<div
					ref={refOne}
					className='md:hidden'>
					<Image
						src={menuIcon}
						className='w-9'
						onClick={toggle}
						alt='menu icon'
					/>
				</div>

				<ul className='hidden md:flex md:items-start md:w-fit md:gap-4 md:py-2 '>
					<li>Hjem</li>
					<li>Forside</li>
					<li>Medlemsliste</li>
				</ul>
			</div>

			{open ? (
				<div className=' bg-white flex justify-center fixed w-full md:hidden'>
					<ul className='flex flex-col items-start w-fit gap-1 py-2 '>
						<li>Hjem</li>
						<li>Forside</li>
						<li>Medlemsliste</li>
					</ul>
				</div>
			) : null}
		</nav>
	)
}
