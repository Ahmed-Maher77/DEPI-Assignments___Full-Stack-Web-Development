import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

const ServicesGrid = ({ onServiceClick }) => {
    return (
        <div
            className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4 mt-3"
            data-anim-stagger="200"
            role="grid"
            aria-label="Services grid"
        >
            {services.map((service) => (
                <ServiceCard
                    key={service.title}
                    service={service}
                    onServiceClick={onServiceClick}
                />
            ))}
        </div>
    );
};

export default ServicesGrid;
