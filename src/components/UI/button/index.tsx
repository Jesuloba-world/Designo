import { Light, Dark } from "./style/button";

interface button {
	onClick?: () => void;
}

interface composition {
	Light: React.FC<button>;
	Dark: React.FC<button>;
}

export const Button: React.FC & composition = () => {
	return <button>Something</button>;
};

Button.Light = ({ children, onClick }) => {
	return <Light onClick={onClick}>{children}</Light>;
};

Button.Dark = ({ children, onClick }) => {
	return <Dark onClick={onClick}>{children}</Dark>;
};
