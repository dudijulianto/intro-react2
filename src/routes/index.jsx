import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Detail from '../pages/detail';
import Home from '../pages/home';

const RouterComponent = () => {

	return (
		<Router>
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/detail/:id' element={ <Detail /> } />
			</Routes>
		</Router>
	);
};

export default RouterComponent;