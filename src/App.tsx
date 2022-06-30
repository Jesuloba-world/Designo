import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Shared } from "./pages/shared";
import { Typo } from "./components";
import "./App.css";

const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Location = lazy(() => import("./pages/location"));
const AppDesign = lazy(() => import("./pages/appDesign"));
const GraphicDesign = lazy(() => import("./pages/graphicDesign"));
const WebDesign = lazy(() => import("./pages/webDesign"));
const Home = lazy(() => import("./pages/home"));

function App() {
	return (
		<Shared>
			<Suspense fallback={<Typo.H1>Loading...</Typo.H1>}>
				<Switch>
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/locations" component={Location} />
					<Route exact path="/app-design" component={AppDesign} />
					<Route
						exact
						path="/graphic-design"
						component={GraphicDesign}
					/>
					<Route exact path="/web-design" component={WebDesign} />
					<Route exact path="/" component={Home} />
				</Switch>
			</Suspense>
		</Shared>
	);
}

export default App;
