import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "../../store/store";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Results from "../Results/Results";
import Answers from "../Answers/Answers";
import Footer from "../Footer/Footer";

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/results" element={<Results />} />
				"/right-answers"
				<Route path="/:answersType" element={<Answers />} />
			</Routes>
			<Footer />
		</Provider>
	);
}

export default App;
