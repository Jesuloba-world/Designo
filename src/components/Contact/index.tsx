import { FC, FormEvent, SyntheticEvent } from "react";
import {
	Container,
	Mask,
	Info,
	Form,
	Title,
	SubTitle,
	Input,
	TextArea,
	Label,
	InputContainer,
	ErrorMessage,
} from "./style/contact";
import { ReactComponent as ContactHeroSvg } from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";
import { ReactComponent as ErrorIcon } from "../../assets/contact/desktop/icon-error.svg";
import { Button } from "../../components";

interface textArea<Type> {
	name: string;
	placeholder: string;
	value: string;
	onChange: (event: FormEvent<Type>) => void;
	id: string;
}

interface input<Type> extends textArea<Type> {
	type: string;
	onChange: (event: FormEvent<Type>) => void;
}

interface form {
	onSubmit: (event: SyntheticEvent) => void;
}

interface composition {
	Info: FC;
	Form: FC<form>;
	Title: FC;
	SubTitle: FC;
	Input: FC<input<HTMLInputElement>>;
	TextArea: FC<textArea<HTMLTextAreaElement>>;
	Button: FC;
}

export const Contact: FC & composition = ({ children }) => {
	return (
		<Container>
			<ContactHeroSvg />
			<Mask>{children}</Mask>
		</Container>
	);
};

Contact.Info = ({ children }) => {
	return <Info>{children}</Info>;
};

Contact.Form = ({ children, ...props }) => {
	return <Form {...props}>{children}</Form>;
};

Contact.Title = ({ children }) => {
	return <Title>{children}</Title>;
};

Contact.SubTitle = ({ children }) => {
	return <SubTitle>{children}</SubTitle>;
};

Contact.Input = ({ id, ...props }) => {
	return (
		<InputContainer>
			<Label htmlFor={id}>
				<ErrorMessage>can't be empty</ErrorMessage> <ErrorIcon />
			</Label>
			<Input id={id} {...props} />
		</InputContainer>
	);
};

Contact.TextArea = ({ id, ...props }) => {
	return (
		<InputContainer>
			<Label htmlFor={id}>
				<ErrorMessage>can't be empty</ErrorMessage> <ErrorIcon />
			</Label>
			<TextArea id={id} {...props} />
		</InputContainer>
	);
};

Contact.Button = ({ children }) => {
	return <Button.Light>{children}</Button.Light>;
};
