import React from 'react';

interface SectionProps {
  imageSrc: string;
  title: string;
  description: string;
  backgroundImage: string;
  overlayGradient?: string; 
  reverse?: boolean;
  url: string;
}

const Section: React.FC<SectionProps> = ({
  imageSrc,
  title,
  description,
  backgroundImage,
  overlayGradient = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))', 
  reverse = false,
  url,
}) => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center w-full py-16"
      style={{ backgroundImage: `${overlayGradient}, url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className={`relative flex flex-col md:flex-row items-center justify-center p-4 rounded-md space-y-4 ${reverse ? 'md:flex-row-reverse md:space-x-reverse' : 'md:space-x-8'} max-w-4xl mx-auto z-10`}>
        <img src={imageSrc} alt={title} className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
        <div className="flex flex-col items-center md:items-start text-white text-center md:text-left space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">{title}</h2>
          <p className="max-w-md">{description}</p>
          <a
            href={url}
            className="inline-block px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
