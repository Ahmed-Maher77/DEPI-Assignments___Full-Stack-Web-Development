import { truncateText } from "../../utils/functions/truncateText";

const ServiceCard = ({ service, onServiceClick }) => {
    const { icon, title, desc } = service;

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onServiceClick(service);
        }
    };

    return (
        <div>
            <article
                className="service-card h-100 position-relative rotated-view-icon cursor-pointer"
                onClick={() => onServiceClick(service)}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${title} service`}
                aria-describedby={`service-${title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-desc`}
            >
                <i
                    className="bx bx-down-arrow-circle fs-2 position-absolute gray-c accept-hover"
                    style={{ top: "10px", right: "10px" }}
                    aria-hidden="true"
                ></i>
                <div className="service-card__icon" aria-hidden="true">
                    <i className={icon}></i>
                </div>
                <h3 className="service-card__title">{title}</h3>
                <p
                    className="service-card__desc"
                    id={`service-${title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}-desc`}
                >
                    {truncateText(desc, 70)}
                </p>
            </article>
        </div>
    );
};

export default ServiceCard;
