import { Switch, Route } from "react-router-dom";
import { Home, Shared, About, Contact, Location } from "./pages";
import { Typo } from "./components";

function App() {
	return (
		<Shared>
			<Switch>
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/locations" component={Location} />
				<Route
					exact
					path="/facebook"
					component={() => {
						window.location.href = "https://www.facebook.com";
						return <Typo.H2>Redirecting...</Typo.H2>;
					}}
				/>
				<Route
					exact
					path="/instagram"
					component={() => {
						window.location.href = "https://www.instagram.com";
						return <Typo.H2>Redirecting...</Typo.H2>;
					}}
				/>
				<Route
					exact
					path="/pinterest"
					component={() => {
						window.location.href = "https://www.pinterest.com";
						return <Typo.H2>Redirecting...</Typo.H2>;
					}}
				/>
				<Route
					exact
					path="/twitter"
					component={() => {
						window.location.href = "https://www.twitter.com";
						return <Typo.H2>Redirecting...</Typo.H2>;
					}}
				/>
				<Route
					exact
					path="/youtube"
					component={() => {
						window.location.href = "https://www.youtube.com";
						return <Typo.H2>Redirecting...</Typo.H2>;
					}}
				/>
				<Route exact path="/" component={Home} />
			</Switch>
		</Shared>
	);
}

export default App;
