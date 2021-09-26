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
	value?: string;
	onChange?: (event: FormEvent<Type>) => void;
	id: string;
	refs: any;
	err: any;
}

interface input<Type> extends textArea<Type> {
	type: string;
	onChange?: (event: FormEvent<Type>) => void;
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

Contact.Input = ({ id, name, err, refs, ...props }) => {
	return (
		<InputContainer>
			{err[name] ? (
				<Label htmlFor={id}>
					<ErrorMessage>{err[name].message}</ErrorMessage>{" "}
					<ErrorIcon />
				</Label>
			) : null}

			<Input id={id} name={name} {...refs(name)} {...props} />
		</InputContainer>
	);
};

Contact.TextArea = ({ id, name, err, refs, ...props }) => {
	return (
		<InputContainer>
			{err[name] ? (
				<Label htmlFor={id}>
					<ErrorMessage>{err[name].message}</ErrorMessage>{" "}
					<ErrorIcon />
				</Label>
			) : null}

			<TextArea id={id} name={name} {...refs(name)} {...props} />
		</InputContainer>
	);
};

Contact.Button = ({ children }) => {
	return <Button.Light>{children}</Button.Light>;
};
