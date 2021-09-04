import { Switch, Route } from "react-router-dom";
import { Home, Shared, About, Contact, Location } from "./pages";

function App() {
	return (
		<Shared>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/locations" component={Location} />
			</Switch>
		</Shared>
	);
}

export default App;
