import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer className="mt-60 max-md:mt-10">
      <h2 data-layername="contact" className="text-2xl tracking-wide text-white">
        Contact
      </h2>
      <p data-layername="imCurrentlyLookingToJoinACrossFunctionalTeamThatValuesImprovingPeoplesLivesThroughAccessibleDesignOrHaveAProjectInMindLetsConnectIbrhaimmemon930GmailCom" className="mt-20 text-base tracking-wide text-white max-md:mt-10 max-md:max-w-full">
        I'm currently looking to join a cross-functional team that values improving people's lives <br />
        through accessible design. or have a project in mind? Let's connect. <br />
        <br />
        <a href="mailto:iamyashsiwach@gmail.com">iamyashsiwach@gmail.com</a>
      </p>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/255aa232f473a577fa25343b04431be88ec794f1f68079c4670ae8a1e978bea3?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d" alt="Social media icons" className="object-contain mt-10 max-w-full aspect-[6.06] w-[109px]" />
    </footer>
  );
};

export default Contact;