import React from 'react';

function List() {
    const servicesData = [
        {
            title: "Website Design & Development",
            description: "We deal with actuating inventive thoughts into our website compositions to upgrade the uniqueness of the item and building up its image esteem.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WdmRyVf94R9wTk65uzQinXsHk5bnieCnnw&usqp=CAU",
            linkUrl: "website-design-development.html",
            animationDuration: "0.5s",
        },
        {
            title: "Mobile App Development",
            description: "We use most recent advances to build up the apps that are exceptionally ideal in the present situation.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6uW48-tcKCfbijPdBCVTUG2aYm39SScgIQ&usqp=CAU",
            linkUrl: "mobile-app-development.html",
            animationDuration: "1s",
        },
        {
            title: "Content Writing",
            description: "We give pretty much every sort of Content writing administration as we have a committed group of content scholars for each class.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3KxaZUwMeACgb-z5GRLa6mGTu3OVV8dw3Q&usqp=CAU",
            linkUrl: "content-writing.html",
            animationDuration: "1.5s",
        },
        // Add more services as needed
    ];

    return (
        <section className="service-provide Service-shap pt-0" id="custom_form_sec">
            <div className="container mx-auto">
                <div className="title-box text-center mb-4">
                    <h2 className="mb-2 text-4xl sm:text-3xl p-2 text-center">Service Provided</h2>
                    <p className="text-sm sm:text-4xl m-2 p-2 text-gray-700 text-center dark:text-white">Creating a window to let the world get to know you better.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                    {servicesData.map((service, index) => (
                        <div className="col" key={index}>
                            <div className="rplr-30">
                                <div className="future-services services text-center animate-slideInUp" style={{ animationDuration: service.animationDuration }}>
                                    <div className="future-img mb-4 mx-auto" style={{ width: "fit-content" }}>
                                        <a href={service.linkUrl}>
                                            <img alt="itcompany" className="img-fluid" src={service.imageUrl} />
                                        </a>
                                    </div>
                                    <a href={service.linkUrl}>
                                        <h4 className="mb-1 text-xl sm:text-2xl p-2 text-center  ">{service.title}</h4>
                                    </a>
                                    <p className="text-sm sm:text-base text-justify m-2 mt-2 p-3">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default List;
