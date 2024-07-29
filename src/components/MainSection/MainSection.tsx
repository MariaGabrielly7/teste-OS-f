import React from 'react';

const MainSection = () => {
    return (
        <section className="relative bg-cover bg-center py-40 px-4 sm:px-6 lg:px-8"
            style={{ backgroundImage: "url('/images/Main-background.png')", backgroundSize: "cover" }}>
            <div className="absolute inset-0 bg-white opacity-30"></div>
            <div className="relative text-center max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                    Why serve in the armed forces?
                </h1>
                <p className="mt-10 text-lg sm:text-xl lg:text-2xl font-bold text-black">
                    Serving in the U.S. Armed Forces is a way to protect the nation's freedoms and values. It offers personal growth, leadership skills, and a sense of camaraderie. Additionally, it provides education, career training, and healthcare, making it a rewarding and honorable career choice.
                </p>
            </div>
        </section>
    );
};

export default MainSection;
