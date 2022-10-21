import React from 'react'
import { useAppSelector } from '../Store/hooks'

const Navbar = () => {
	const { location } = useAppSelector(state => state.users)
	return (
		<div className="h-[80px] bg-indigo-600">
			<div className="w-full flex justify-center items-center">
				<div className="text-center text-white text-2xl font-bold">
					Your Location : {location}
				</div>
			</div>
		</div>
	)
}

export default Navbar
