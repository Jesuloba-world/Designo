import { Switch, Route } from "react-router-dom";
import {
	Home,
	Shared,
	About,
	Contact,
	Location,
	AppDesign,
	GraphicDesign,
	WebDesign,
} from "./pages";

function App() {
	return (
		<Shared>
			<Switch>
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/locations" component={Location} />
				<Route exact path="/app-design" component={AppDesign} />
				<Route exact path="/graphic-design" component={GraphicDesign} />
				<Route exact path="/web-design" component={WebDesign} />
				<Route exact path="/" component={Home} />
			</Switch>
		</Shared>
	);
}

export default App;
