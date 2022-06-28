import { Contact } from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import email from "@emailjs/browser";
import { Loading } from "notiflix";

const schema = yup.object().shape({
	name: yup.string().required("Can't be empty"),
	email: yup
		.string()
		.email("Please use a valid email address")
		.required("Can't be empty"),
	phone: yup.string().min(9).notRequired(),
	message: yup.string().required("Can't be empty"),
});

export const ContactContainer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submitForm = async (data: any) => {
		Loading.standard("Sending Email", {
			clickToClose: true,
			svgColor: "#FFAD9B",
		});
		await email.send(
			process.env.REACT_APP_EMAIL_SERVICE_ID!,
			process.env.REACT_APP_EMAIL_TEMPLATE_ID!,
			data,
			process.env.REACT_APP_EMAIL_PUBLIC_KEY!
		);
		Loading.remove();
		reset();
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
			<Contact.Form onSubmit={handleSubmit(submitForm)}>
				<Contact.Input
					id={"name"}
					type={"text"}
					name={"name"}
					placeholder={"name*"}
					refs={register}
					err={errors}
				/>
				<Contact.Input
					id={"email"}
					type={"email"}
					name={"email"}
					placeholder={"email address*"}
					refs={register}
					err={errors}
				/>
				<Contact.Input
					id={"phone"}
					type={"text"}
					name={"phone"}
					placeholder={"phone"}
					refs={register}
					err={errors}
				/>
				<Contact.TextArea
					id={"message"}
					name={"message"}
					placeholder={"Your Message*"}
					refs={register}
					err={errors}
				/>
				<Contact.Button>submit</Contact.Button>
			</Contact.Form>
		</Contact>
	);
};
