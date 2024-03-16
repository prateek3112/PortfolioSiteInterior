// pages/projects.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 3,
            name: 'Perfect living room for family time',
            description: 'Drawing room with a clean and comfortable design for your family. Charming with a modern design.',
            images: ['/image/gallery7.jpg', '/image/gallery8.jpg', '/image/gallery9.jpg'],
        },{
            id: 1,
            name: 'Drowing room for family time',
            description: 'Bedroom with a clean and comfortable design for your family. Charming with a modern design.',
            images: ['/image/gallery4.jpg', '/image/gallery2.jpg', '/image/gallery3.jpg'],
        },
        {
            id: 2,
            name: 'Kitchen look modern and clean',
            description: 'Kitchen looks modern and clean. Charming with a modern design.',
            images: ['/image/gallery1.jpg','/image/6ec584dc-a973-48e3-a7e1-e7d374ed396f.JPG', '/image/gallery10.jpg', '/image/gallery6.jpg'],
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="">
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white ">OUR PROJECTS</h1>
            </div>
            <div className="container grid grid-cols-2 gap-8 py-8">
                {projects.map((project) => (
                    <div key={project.id} className="relative overflow-hidden rounded-xl group cursor-pointer" onClick={() => openModal(project)}>
                        <div>
                            <Image src={project.images[0]} width={480} height={380} alt="" className="w-full" />
                        </div>
                        <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                            <h1 className="text-2xl font-semibold">{project.name}</h1>
                            <p className="py-4">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="bg-white p-8 max-w-lg rounded-lg shadow-lg z-10">
                        <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 hover:text-black">&times;</button>
                        <h2 className="text-2xl font-semibold mb-4">{selectedProject.name}</h2>
                        <Carousel
                            showThumbs={false}
                            showArrows={true}
                            swipeable={true}
                            infiniteLoop={true}
                            className="carousel-container"
                            style={{ width: '500px', height: '375px' }}
                        >
                            {selectedProject.images.map((image, index) => (
                                <div key={index} className="carousel-image-wrapper">
                                    <div className="carousel-image-container">
                                        <Image src={image} layout="fill" objectFit="cover" alt="" />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
            <style jsx>{`
                .carousel-image-wrapper {
                    position: relative;
                    width: 500px; /* Adjust width as needed */
                    height: 375px; /* Adjust height as needed */
                }
                .carousel-image-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    );
}
