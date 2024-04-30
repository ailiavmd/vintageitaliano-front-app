import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Footer, Navbar } from './components/layout';
import { Home } from './features';

import './App.scss';

export const App = () => {
	return (
		<div className="site-wrapper">
			<Navbar />

			<main className="site-main">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
			
			<Footer />
		</div>
	);
};
