import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ContactIcons from "../../components/About_Components/ContactIcons";
import ContactFooter from "../../components/About_Components/ContactFooter";
import "./Contact.scss";

const Contact = () => {
    return (
        <section id="Contact" className="py-5" data-anim="fade-in">
            <SectionHeader title="Contact Me" />

            {/* Content */}
            <div
                className="container mt-4"
                data-anim="slide-up"
                data-anim-delay="150"
            >
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 d-flex flex-column align-items-center">
                        <ContactIcons />
                        <ContactFooter />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
