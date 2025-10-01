const ServiceDetails = ({ service }) => {
    if (!service) return null;

    return (
        <div className="service-details">
            <div className="service-details__icon my-4 text-center">
                <i className={`${service.icon} fs-1`}></i>
            </div>
            <div className="service-details__content">
                <h4 className="mb-3 text-center">{service.title}</h4>
                <p className="service-details__description mb-4">
                    {service.desc}
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
    );
};

export default ServiceDetails;
