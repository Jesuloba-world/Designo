import { Light, Dark } from "./style/button";

interface composition {
	Light: React.FC;
	Dark: React.FC;
}

export const Button: React.FC & composition = () => {
	return <button>Something</button>;
};

Button.Light = ({ children, ...restProps }) => {
	return <Light {...restProps}>{children}</Light>;
};

Button.Dark = ({ children, ...restProps }) => {
	return <Dark {...restProps}>{children}</Dark>;
};
