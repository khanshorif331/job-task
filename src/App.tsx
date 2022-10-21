import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Location from './Components/Location'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import { useAppSelector } from './Store/hooks'

function App() {
	const users = useAppSelector(state => state.users)
	return (
		<div>
			<Navbar></Navbar>
			<Routes>
				{users.loggedIn ? (
					<Route path="/" element={<Home></Home>}></Route>
				) : (
					<Route path="/login" element={<Login></Login>}></Route>
				)}

				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/register" element={<Register></Register>}></Route>
				<Route path="/location" element={<Location></Location>}></Route>
				<Route path="*" element={<Login></Login>}></Route>
			</Routes>
		</div>
	)
}

export default App
