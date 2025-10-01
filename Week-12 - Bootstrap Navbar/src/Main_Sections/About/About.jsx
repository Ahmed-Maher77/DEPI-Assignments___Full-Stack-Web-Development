import MyPicture from "../../assets/images/My_Picture.jpg";
import "./About.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const About = () => {
    return (
        <section id="About" className="py-5" data-anim="fade-in">
            <div
                className="container"
                data-anim="slide-up"
                data-anim-delay="150"
            >
                {/* Title */}
                <SectionHeader title="About Me" />

                {/* Content */}
                <figure
                    className="content text-center d-flex flex-column align-items-center justify-content-center gap-3"
                    data-anim="zoom-in"
                    data-anim-delay="300"
                >
                    <img
                        src={MyPicture}
                        alt="About"
                        className="img-fluid img-thumbnail rounded-circle about-img"
                    />
                    <figcaption className="text-center">
                        <h3>Ahmed Maher</h3>
                        <span className="text-muted font-monospace fw-semibold fs-5">
                            Software Engineer | Full Stack Developer
                        </span>
                        <p className="text-muted description mt-3">
                            A Passionate Frontend Developer with a Bachelor's in
                            Computer and Control Systems Engineering.
                            Specialized in creating dynamic, responsive, and
                            accessible web applications that bring ideas to
                            life.
                        </p>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default About;
