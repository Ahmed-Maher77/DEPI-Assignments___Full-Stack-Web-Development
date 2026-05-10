import { useState } from "react";

export const useServiceModal = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return {
        selectedService,
        isModalOpen,
        handleServiceClick,
        handleCloseModal,
    };
};
