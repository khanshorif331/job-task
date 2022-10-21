import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../Store/hooks'
import { login as LoggingIn } from '../Store/user/UserSlice'

const Login = () => {
	const [showPassword, setShowPassword] = React.useState(false)
	const dispatch = useAppDispatch()
	const users = useAppSelector(state => state.users)

	type User = {
		name: null
		email: string
		password: string
		currentUser: string
	}

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<User>()
	const navigate = useNavigate()

	const handleLogin = (data: User) => {
		dispatch(
			LoggingIn({
				...data,
				currentUser: data.email,
			})
		)
		const matched = users.users.find(
			user => user.email === data.email && user.password === data.password
		)
		console.log(matched?.name, 'mathced', data)
		if (matched?.name) {
			navigate('/location')
		} else {
			alert('Invalid Credentials')
		}

		reset()
	}

	return (
		<section className="">
			<div className="bg-white font-family-karla">
				<div className="w-full flex flex-wrap flex-row-reverse">
					<div className="w-full md:w-1/2 flex flex-col border-l-2 border-l-gray-500">
						<div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
							<p className="text-center text-3xl">Login Here!</p>
							{/* ------------------form starts here-------------------- */}
							<form
								onSubmit={handleSubmit(handleLogin)}
								className="flex flex-col pt-3 md:pt-8"
							>
								<div className="flex flex-col pt-4">
									<label htmlFor="email" className="text-lg">
										Email
									</label>
									<input
										{...register('email', {
											required: {
												value: true,
												message: 'Email is Required',
											},
											pattern: {
												value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
												message: 'Provide a valid email',
											},
										})}
										type="email"
										id="email"
										placeholder="your@email.com"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
									/>
									<label>
										{errors.email?.type === 'required' && (
											<p className="text-red-600 text-sm font-semibold">
												{errors.email.message}
											</p>
										)}
										{errors.email?.type === 'pattern' && (
											<p className="text-red-600 text-sm font-semibold">
												{errors.email.message}
											</p>
										)}
									</label>
								</div>

								<div className="flex flex-col pt-4 relative">
									<label htmlFor="password" className="text-lg">
										Password
									</label>
									<input
										{...register('password', {
											required: {
												value: true,
												message: 'Password is Required',
											},
											minLength: {
												value: 6,
												message: 'Must be 6 character or longer',
											},
											pattern: {
												value: /(?=.*?[A-Z])/,
												message: 'At least One Uppercase',
											},
										})}
										type={showPassword ? 'text' : 'password'}
										id="password"
										placeholder="Password"
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
									/>
									{showPassword ? (
										<MdOutlineVisibilityOff
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-0 top-[54px] mr-4 cursor-pointer"
											size={28}
										/>
									) : (
										<MdOutlineVisibility
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-0 top-[54px] mr-4 cursor-pointer"
											size={28}
										/>
									)}
									<label>
										{errors.password?.type === 'required' && (
											<p className="text-red-600 text-sm font-semibold">
												{errors.password.message}
											</p>
										)}
										{errors.password?.type === 'pattern' && (
											<p className="text-red-600 text-sm font-semibold">
												{errors.password.message}
											</p>
										)}
										{errors.password?.type === 'minLength' && (
											<p className="text-red-600 text-sm font-semibold">
												{errors.password.message}
											</p>
										)}
									</label>
								</div>

								<input
									type="submit"
									value="Login"
									className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer"
								/>
							</form>

							{/* --------form ends here----------- */}

							<div className="flex">
								<div className="w-[40%] flex m-auto border-b-2 border-b-gray-500" />
								<div>or</div>
								<div className="w-[40%] flex m-auto border-b-2 border-b-gray-500" />
							</div>
							<div className="text-center py-5">
								<p>
									Already have an account?{' '}
									<Link
										to="/register"
										className="underline font-semibold"
									>
										Register here.
									</Link>
								</p>
							</div>
						</div>
					</div>

					{/* -------------left section------------- */}

					<div className="w-1/2">
						<img
							className="object-cover w-full hidden md:block"
							src="https://www.hamyarit.com/wp-content/uploads/2019/02/programmers-1.gif-hamyarit.com-programmers-1.gif"
							alt="Background"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
