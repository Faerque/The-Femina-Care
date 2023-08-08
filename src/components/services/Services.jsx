import { useState } from "react";
import Navbar from "../global/Navbar/Navbar"
import servicesData from "./servicesData.json"

import ServiceModal from "./ServiceModal";


// Modal.setAppElement("#root");

function Services() {
    const [selectedDisease, setSelectedDisease] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (disease) => {
        setSelectedDisease(disease);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedDisease(null);

        setIsModalOpen(false);
    };

    function truncateDescription(description, maxWords) {
        const words = description.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...More';
        }
        return description;
    }



    return (
        <div>
            <Navbar />
            <div className="flex justify-center mb-5">
                <div className="max-w-auto border border-sm px-8 py-4  rounded-md  informationDiv">
                    <div className="">
                        <h1 className="text-3xl font-bold text-gray-700 ">We have the best doctors to take care you off!</h1>
                        <p className="mt-2 text-gray-600 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex mt-10 flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {servicesData.map((item, index) => (
                        <div key={index} className="card w-full sm:w-80 h-72 bg-pink-100 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{truncateDescription(item.description, 15)}</p>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() => openModal(item)}
                                        className="btn rounded-md">Know details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ServiceModal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedDisease={selectedDisease}

            />
        </div>
    )
}

export default Services