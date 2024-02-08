import ContentHeader from "../components/ContentHeader.jsx";
import ContactForm from "../components/ContactForm.jsx";
import "./views.css";

function Contact() {
	return (
		<main className="view-main contact-main">
			<ContentHeader title="<Contact>" subtitle="get in touch with me" />
			<section className="view-content-section contact-section">
				<ContactForm />
			</section>
		</main>
	);
}

export default Contact;
