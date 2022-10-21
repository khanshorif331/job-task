import React from 'react'
import { useForm } from 'react-hook-form'
import { useAppSelector } from '../Store/hooks'

const Location = () => {
	const time = new Date().toLocaleTimeString()
	const { register, handleSubmit, reset } = useForm()
	const users = useAppSelector(state => state.users)

	const handleLocation = (data: any) => {
		reset()
		console.log(data)
	}
	return (
		<div className="flex flex-col items-center justify-center w-full h-screen">
			<p className="absolute top-0 text-2xl p-2">{time}</p>
			<div className="border-2 border-black p-10">
				<h1 className="text-center">Enter Your Current Location</h1>

				<form
					onSubmit={handleSubmit(handleLocation)}
					className=" pt-3 md:pt-8"
				>
					<div>
						<input
							{...register('location', { required: true })}
							type="text"
							id="location"
							placeholder="Enter your location"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
						/>

						<div className="text-center">
							<input
								type="submit"
								value="Submit"
								className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 mt-8 cursor-pointer w-full"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Location
