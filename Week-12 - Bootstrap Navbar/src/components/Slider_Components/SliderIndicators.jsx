const SliderIndicators = ({ targetId, slides }) => {
    return (
        <ul className="carousel-indicators" style={{ listStyle: "none" }}>
            {slides.map((_, idx) => (
                <li
                    key={idx}
                    data-bs-target={`#${targetId}`}
                    data-bs-slide-to={idx}
                    className={idx === 0 ? "active" : ""}
                    aria-current={idx === 0 ? "true" : undefined}
                    aria-label={`Slide ${idx + 1}`}
                ></li>
            ))}
        </ul>
    );
};

export default SliderIndicators;
