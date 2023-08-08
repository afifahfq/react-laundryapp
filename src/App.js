import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar } from './components';
import { Home, MobileHome, Products, Login, Sales, Settings } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import { useLoginMutation } from './services/serviceApi';
// import LaundryApp from './pages/LaundryApp';

const App = () => {
	const { activeMenu } = useStateContext();
	const state = {
		authedUser: null,
		initializing: false,
	};

	const [updateLogin, result] = useLoginMutation({
		fixedCacheKey: 'shared-update-login',
	  })

	const loginInfo = {
    "email"    : "ovickbs@gmail.com",
    "password" : "qwerpilkopi"
	};

  // useEffect(() => {
  //   const currentThemeColor = localStorage.getItem('colorMode');
  //   const currentThemeMode = localStorage.getItem('themeMode');
  //   if (currentThemeColor && currentThemeMode) {
  //     setCurrentColor(currentThemeColor);
  //     setCurrentMode(currentThemeMode);
  //   }
  // }, []);
	}
	if (state.authedUser === null) {
			return(
				// <div className="app-container">
				// 		<Routes>
				// 				<Route path="/*" element={<Login />} />
				// 				{/* <Route path="/register" element={<Register />} /> */}
				// 		</Routes>
				// </div>
				<p >{
					// Execute the trigger with the `id` and updated `name`
					updateLogin({ loginInfo })
					}
				</p>
			)
	}

	return (
		// <LaundryApp />

		<div className={''}>
			<div className="flex relative dark:bg-main-dark-bg">
				<div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
					<TooltipComponent
					content="Settings"
					position="Top"
					>
					<button
						type="button"
						onClick={() => setThemeSettings(true)}
						// style={{ background: currentColor, borderRadius: '50%' }}
						className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
					>
						<FiSettings />
					</button>

					</TooltipComponent>
				</div>
				{activeMenu ? (
					<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
					<Sidebar />
					</div>
				) : (
					<div className="w-0 dark:bg-secondary-dark-bg">
					<Sidebar />
					</div>
				)}
				<div
					className={
					`bg-light-blue dark:bg-main-dark-bg  w-full min-h-screen ${activeMenu ? 'md:ml-72' : 'flex-2'}`
					}
				>
					<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
						<Navbar />	
					</div>
					<div>
						<Routes>
							<Route path='/' element={ <Home /> } />
							<Route path="/home" element={(<Home />)} />
							<Route path='/products' element={ <Products /> } />
							<Route path='/sales' element={ <Sales /> } />
							<Route path='/settings' element={ <MobileHome /> } />
						</Routes>
					</div>
					<div>
					{/* {themeSettings && (<ThemeSettings />)} */}

					</div>
				</div>
			</div>

		</div>
  )
}

export default App