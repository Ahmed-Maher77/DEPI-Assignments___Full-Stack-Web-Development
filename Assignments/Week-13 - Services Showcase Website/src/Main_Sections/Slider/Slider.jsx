import React from "react";
import SliderImg from "../../assets/images/slider-bg.jpeg";
import SliderImg3 from "../../assets/images/slider-bg-3.jpeg";
import SliderIndicators from "../../components/Slider_Components/SliderIndicators";
import SliderItem from "../../components/Slider_Components/SliderItem";
import SliderControls from "../../components/Slider_Components/SliderControls";
import "./Slider.scss";

const Slider = () => {
    const slides = [
        {
            src: SliderImg3,
            alt: "Slide 1",
            title: (
                <h5 className="mb-3">
                    This is <b>Ahmed Maher</b>
                </h5>
            ),
            text: (
                <p>
                    A <b>Software Engineer</b> specialized in converting ideas
                    into functional, efficient, scalable, and user-friendly
                    websites.
                </p>
            ),
            imgClassName: "d-block h-100 w-100 slider-img",
        },
        {
            src: SliderImg,
            alt: "Slide 2",
            title: <h5 className="mb-3">A Full Stack Developer</h5>,
            text: (
                <p>
                    with a Bachelor's degree in Computer and Control Systems
                    Engineering. and +2 years of hands-on experience in the
                    field.
                </p>
            ),
        },
    ];
    return (
        <section
            id="slider"
            className="carousel slide"
            style={{ height: "450px", width: "100%" }}
            data-anim="fade-in"
        >
            <SliderIndicators targetId="slider" slides={slides} />

            <main
                className="carousel-inner h-100"
                data-anim="slide-up"
                data-anim-delay="150"
            >
                {slides.map((slide, idx) => (
                    <SliderItem
                        key={slide.alt ?? idx}
                        active={idx === 0}
                        src={slide.src}
                        alt={slide.alt}
                        imgClassName={slide.imgClassName}
                    >
                        {slide.title}
                        {slide.text}
                    </SliderItem>
                ))}
            </main>

            <SliderControls targetId="slider" />
        </section>
    );
};

export default Slider;
