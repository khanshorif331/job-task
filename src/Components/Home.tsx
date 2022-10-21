import React from 'react'
import { useAppSelector } from '../Store/hooks'

const Home = () => {
	const images = [
		'https://i.ibb.co/dP1PbxL/korat-1.png',
		'https://i.ibb.co/NttxFwS/knife-1.png',
		'https://i.ibb.co/Pg5mbSd/drill-1.png',
		'https://i.ibb.co/dP1PbxL/korat-1.png',
		'https://i.ibb.co/dP1PbxL/korat-1.png',
		'https://i.ibb.co/dP1PbxL/korat-1.png',
		'https://i.ibb.co/dP1PbxL/korat-1.png',
		'https://i.ibb.co/NttxFwS/knife-1.png',
	]
	const { location, currentUser } = useAppSelector(state => state.users)

	return (
		<div>
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mx-auto p-4">
					{images.map(image => {
						return (
							<div className="bg-red-500 w-full h-full">
								<img src={image} alt="" />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Home
