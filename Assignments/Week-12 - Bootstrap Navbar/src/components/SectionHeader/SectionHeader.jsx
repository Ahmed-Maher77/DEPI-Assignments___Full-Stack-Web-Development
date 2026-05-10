const SectionHeader = ({ title }) => {
    return (
        <h2
            className="text-center white-c fw-bold gray-c fs-1 mb-4"
            data-anim="slide-up"
        >
            {title}
        </h2>
    );
};

export default SectionHeader;
