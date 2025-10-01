import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServicesGrid from "../../components/Services_Components/ServicesGrid";
import { useServiceModal } from "../../components/Services_Components/useServiceModal";
import Modal from "../../common/Modal/Modal";
import "./Services.scss";

const Services = () => {
    const {
        selectedService,
        isModalOpen,
        handleServiceClick,
        handleCloseModal,
    } = useServiceModal();

    return (
        <>
            <section id="Services" className="py-5" data-anim="fade-in">
                <div
                    className="container"
                    data-anim="slide-up"
                    data-anim-delay="150"
                >
                    <SectionHeader title="Services I Offer" />

                    {/* Content */}
                    <ServicesGrid onServiceClick={handleServiceClick} />
                </div>
            </section>

            {/* Service Details Modal */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedService && (
                    <div className="service-details">
                        <div className="service-details__icon my-4 text-center">
                            <i className={`${selectedService.icon} fs-1`}></i>
                        </div>
                        <div className="service-details__content">
                            <h4 className="mb-3 text-center">
                                {selectedService.title}
                            </h4>
                            <p className="service-details__description mb-4">
                                {selectedService.desc}
                            </p>
                            <div className="service-details__features">
                                <h5 className="mb-3">Key Features:</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <i className="bx bx-check-circle text-success me-2"></i>
                                        Modern technology stack
                                    </li>
                                    <li className="mb-2">
                                        <i className="bx bx-check-circle text-success me-2"></i>
                                        Responsive design principles
                                    </li>
                                    <li className="mb-2">
                                        <i className="bx bx-check-circle text-success me-2"></i>
                                        Performance optimization
                                    </li>
                                    <li className="mb-2">
                                        <i className="bx bx-check-circle text-success me-2"></i>
                                        Best practices implementation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default Services;
