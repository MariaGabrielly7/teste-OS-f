import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import MainSection from "@/components/MainSection/MainSection";
import FormSection from "@/components/Form/Form";

export default function Home() {
  return (
    <><>
    <Header />
    <main>
      <MainSection/>
      <Section
        imageSrc="images/Army-emblem.png"
        title="The U.S. Army: A Path to Excellence"
        description="Join the U.S. Army to develop leadership skills, receive top-tier education and training, and serve the nation with pride. Enjoy career growth, comprehensive benefits, and the opportunity to make a difference. Start your journey towards a rewarding future today."
        backgroundImage="images/Army-background.png"
        overlayGradient="linear-gradient(rgba(30, 57, 6, 0.8), rgba(255, 255, 255, 0.81))"
        url="https://www.usar.army.mil/"
      />
      <Section
        imageSrc="images/Navy-emblem.png"
        title="The Navy Reserve: A Commitment to Service"
        description="Join the Navy Reserve to balance a civilian career with meaningful military service. Gain valuable skills, enjoy excellent benefits, and contribute to national security. Serve part-time while making a full-time impact." 
        backgroundImage="images/Navy-background.png"
        overlayGradient="linear-gradient(rgba(255, 255, 255, 0.81), rgba(2, 7, 38, 1))"
        url="https://www.navyreserve.navy.mil/"
        reverse={true}
      />
      <Section
        imageSrc="images/Marines-emblem.png"
        title="The U.S. Marines: The Few, The Proud"
        description="Join the U.S. Marines to challenge yourself, develop elite skills, and serve with honor. Experience unmatched camaraderie, exceptional training, and the pride of being part of an elite force. Commit to excellence and make a lasting impact."
        backgroundImage="images/Marines-background.png"
        overlayGradient="linear-gradient(rgba(19, 36, 4, 0.82), rgba(255, 255, 255, 0.81))"
        url="https://www.marforres.marines.mil/"
      />
      <Section
        imageSrc="images/Air-Force-emblem.png"
        title="The U.S. Air Force: Aim High"
        description="Join the U.S. Air Force to achieve excellence, receive advanced training, and protect the skies. Benefit from career opportunities, educational programs, and comprehensive support. Elevate your future and serve with pride." 
        backgroundImage="images/Air-Force-background.png"
        overlayGradient="linear-gradient(rgba(255, 255, 255, 0.80), rgba(2, 7, 38, 1))"
        url="https://www.airforce.com/ways-to-serve/air-force-reserve"
        reverse={true}
      />
      <Section
        imageSrc="images/Coast-Guard-emblem.png"
        title="The U.S. Coast Guard: Always Ready"
        description="Join the U.S. Coast Guard to safeguard our nation's waters, receive exceptional training, and serve with dedication. Enjoy diverse career paths, educational benefits, and a strong sense of mission. Protect and serve while making a difference."
        backgroundImage="images/Coast-Guard-background.png"
        overlayGradient="linear-gradient(rgba(9, 77, 90, 1), rgba(255, 255, 255, 0.81))"
        url="https://www.uscg.mil/"
      />
      <Section
        imageSrc="images/Space-Force-emblem.png"
        title="The U.S. Space Force: Semper Supra"
        description="Join the U.S. Space Force to pioneer space operations, receive cutting-edge training, and protect our space assets. Enjoy innovative career opportunities, advanced education, and a vital mission. Lead the way in space defense and exploration." 
        backgroundImage="images/Space-Force-background.png"
        overlayGradient="linear-gradient(rgba(9, 20, 90, 0.75), rgba(2, 5, 26, 1))"
        url="https://www.spaceforce.com/"
        reverse={true}
      />
      <FormSection/>
    </main>
    <Footer /></></>
  );
}
