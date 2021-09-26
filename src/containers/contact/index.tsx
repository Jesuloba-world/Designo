import { FormEvent, SyntheticEvent, useState } from "react";
// import { useForm } from "react-hook-form";
import { Contact } from "../../components";

export const ContactContainer = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const resetAll = () => {
		setName("");
		setEmail("");
		setPhone("");
		setMessage("");
	};

	const submitForm = (event: SyntheticEvent) => {
		event.preventDefault();
		resetAll();
	};

	return (
		<Contact>
			<Contact.Info>
				<Contact.Title>Contact Us</Contact.Title>
				<Contact.SubTitle>
					Ready to take it to the next level? Let’s talk about your
					project or idea and find out how we can help your business
					grow. If you are looking for unique digital experiences
					that’s relatable to your users, drop us a line.
				</Contact.SubTitle>
			</Contact.Info>
			<Contact.Form onSubmit={(event) => submitForm(event)}>
				<Contact.Input
					id={"name"}
					type={"text"}
					name={"name"}
					placeholder={"name*"}
					value={name}
					onChange={(event: FormEvent<HTMLInputElement>) =>
						setName(event.currentTarget.value)
					}
				/>
				<Contact.Input
					id={"email"}
					type={"email"}
					name={"email_address"}
					placeholder={"email address*"}
					value={email}
					onChange={(event: FormEvent<HTMLInputElement>) =>
						setEmail(event.currentTarget.value)
					}
				/>
				<Contact.Input
					id={"phone"}
					type={"text"}
					name={"phone"}
					placeholder={"phone"}
					value={phone}
					onChange={(event: FormEvent<HTMLInputElement>) =>
						setPhone(event.currentTarget.value)
					}
				/>
				<Contact.TextArea
					id={"message"}
					name={"message"}
					placeholder={"Your Message*"}
					value={message}
					onChange={(event: FormEvent<HTMLTextAreaElement>) =>
						setMessage(event.currentTarget.value)
					}
				/>
				<Contact.Button>submit</Contact.Button>
			</Contact.Form>
		</Contact>
	);
};
