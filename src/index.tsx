import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './Store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>
)

reportWebVitals()
