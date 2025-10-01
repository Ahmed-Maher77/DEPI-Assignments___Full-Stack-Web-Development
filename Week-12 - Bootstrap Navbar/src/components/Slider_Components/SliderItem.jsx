const SliderItem = ({
    active = false,
    src,
    alt,
    children,
    imgClassName = "d-block h-100 w-100",
}) => {
    return (
        <div className={`carousel-item h-100 ${active ? "active" : ""}`}>
            <img src={src} className={imgClassName} alt={alt} />
            <div className="carousel-caption d-none d-md-block">{children}</div>
        </div>
    );
};

export default SliderItem;
