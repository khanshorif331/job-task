import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Location from './Components/Location'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Login></Login>}></Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/register" element={<Register></Register>}></Route>
				<Route path="/location" element={<Location></Location>}></Route>
				<Route path="*" element={<Login></Login>}></Route>
			</Routes>
		</div>
	)
}

export default App
