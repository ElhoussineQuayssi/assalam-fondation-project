// pages/contact.js
import ContactForm from "../components/ContactForm";
import FlipCard from "../components/FlipCard";

import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout id={4}> {/* Using id 4 to match the menu item */}
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Contact Form */}
        <ContactForm />

        {/* Right Section: Flip Card with Slogan and Contact Info */}
        <FlipCard />
      </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
