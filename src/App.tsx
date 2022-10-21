import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'

function App() {
	return (
		<div>
			{/* <h1 className="text-center">Hey ami shoorif</h1> */}
			<Routes>
				<Route path="/" element={<Login></Login>}></Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/register" element={<Login></Login>}></Route>
				<Route path="*" element={<Login></Login>}></Route>
			</Routes>
		</div>
	)
}

export default App
