import React from 'react';

const Background: React.FC = () => {
  return (
    <section
      data-layername="background"
      className="flex flex-col justify-center items-center min-h-screen px-10 py-16 w-full bg-slate-950 max-md:px-5 max-md:py-12"
    >
      <div className="flex flex-col mb-0 ml-16 w-full max-w-4xl max-md:mb-2.5">
        <h1
          data-layername="helloIAmYashSiwach"
          className="text-center text-2xl tracking-tight leading-5 text-white max-md:text-lg"
        >
          Hello! I Am <span className="text-purple-800">Yash Siwach</span>
        </h1>
        <div className="flex flex-col items-center px-2 mt-8 w-full max-md:mt-8">
          <div className="max-w-full w-[652px]">
            <div className="flex gap-5 max-md:flex-col justify-center items-center">
              <div
                data-layername="column"
                className="flex flex-col w-2/5 max-md:w-full justify-center items-center"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f032dae712a2e26808e015cd683748fa551018ed58213a89f798e6aa49370c?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d"
                  alt="Ibrahim Memon"
                  className="object-contain grow w-full aspect-square max-md:mt-2"
                />
              </div>
              <div
                data-layername="column"
                className="flex flex-col ml-5 w-3/5 max-md:w-full justify-center items-center"
              >
                <div className="flex flex-col text-center my-auto text-white max-md:mt-4">
                  <h2
                    data-layername="judgesABookByItsCover"
                    className="text-4xl tracking-wider leading-[50px] max-md:text-3xl max-md:leading-[40px]"
                  >
                    Judges a book <br /> by its <span className="text-purple-800">cover</span>...
                  </h2>
                  <p
                    data-layername="becauseIfTheCoverDoesNotImpressYouWhatElseCan"
                    className="text-xs tracking-wide text-center max-md:text-sm"
                  >
                    Because if the cover does not impress you what else can?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2
            data-layername="imASoftwareDeveloper"
            className="mt-16 text-center text-4xl tracking-wider text-white max-md:mt-8 max-md:text-3xl"
          >
            I'm a Software Developer.|{" "}
          </h2>
          <br />
          <p
            data-layername="currentlyImAFinalYearStudentAtChandiguarhUniversity"
            className="z-10 -mt-3.5 text-center text-xl tracking-wide text-white max-md:text-lg"
          >
            Currently, I'm a Final Year Student at{" "}
            <span className="text-blue-600">Chandigurh University</span>,
          </p>
          <p
            data-layername="aSelfTaughtUiUxDesignerFunctioningInTheIndustryFor3YearsNowIMakeMeaningfulAndDelightfulDigitalProductsThatCreateAnEquilibriumBetweenUserNeedsAndBusinessGoals"
            className="mt-16 text-center text-xl tracking-wide text-white max-md:text-lg"
          >
            A self-taught UI/UX designer, functioning in the industry for 3+ years now. <br />I make meaningful and delightful digital products that create an equilibrium <br /> between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Background;