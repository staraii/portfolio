import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
	// Lagrar och uppdaterar useState med formulärets indata
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	// Referens för formuläret.
	const form = useRef();
	// Funktion för att skicka email, använder Emailjs API.
	const sendEmail = (e) => {
		// Förhindrar default beteendet att skicka användaren vidare vid submit.
		e.preventDefault();
		//
		emailjs
			.sendForm("service_2x9hf5h", "template_cyqoouj", form.current, {
				publicKey: "f-Moa7FppX-SHciDQ",
			})
			.then(
				() => {
					console.log("Success!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};
	return (
		<form ref={form} onSubmit={sendEmail} className="contact-form">
			<div className="input-container">
				<input
					onChange={(e) =>
						setFormData({ ...formData, name: e.target.value })
					}
					value={formData.title}
					type="text"
					name="user_name"
					id="name"
					className="form-input"
					autoComplete="name"
					required
				/>
				<label htmlFor="name" className="form-label">
					Name
				</label>
			</div>

			<div className="input-container">
				<input
					onChange={(e) =>
						setFormData({ ...formData, email: e.target.value })
					}
					value={formData.email}
					type="text"
					name="user_email"
					id="email"
					className="form-input"
					autoComplete="email"
					required
				/>
				<label htmlFor="email" className="form-label">
					Email
				</label>
			</div>

			<div className="input-container">
				<textarea
					onChange={(e) =>
						setFormData({ ...formData, message: e.target.value })
					}
					value={formData.message}
					required
					name="message"
					id="message"
					className="form-input"
				></textarea>
				<label htmlFor="message" className="form-label">
					Message
				</label>
			</div>

			<input type="submit" value="Send" className="form-submit" />
		</form>
	);
}

export default ContactForm;
