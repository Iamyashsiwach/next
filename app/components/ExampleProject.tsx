import React from 'react';


interface ExampleProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  isReversed: boolean;
}

const ExampleProject: React.FC<ExampleProjectProps> = ({ title, description, imageSrc, isReversed }) => {
  const contentOrder = isReversed ? 'order-2' : 'order-1';
  const imageOrder = isReversed ? 'order-1' : 'order-2';

  return (
    
    <div className="mt-52 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div data-layername="column" className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full ${contentOrder}`}>
          <div className={`flex flex-col ${isReversed ? 'items-end' : 'items-start'} mt-7 w-full max-md:max-w-full`}>
            <h3 data-layername="exampleProject" className="text-4xl font-semibold tracking-wider text-indigo-200">
              {title}
            </h3>
            <div className="flex relative flex-col self-stretch px-9 py-7 mt-7 w-full text-lg font-medium text-indigo-200 rounded-2xl min-h-[165px] max-md:px-5 max-md:max-w-full">
              <img loading="lazy" src={isReversed ? "https://cdn.builder.io/api/v1/image/assets/TEMP/621a2415900741451bf8a3a21c6ca5a112ff434ea7093f3aff43296d80f00bcc?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d" : "https://cdn.builder.io/api/v1/image/assets/TEMP/0195dc6425d2686488d86486c9fe9b7c54df467b5c55b85ed2982074ae09841e?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d"} alt="" className="object-cover absolute inset-0 size-full" />
              <p>{description}</p>
            </div>
            <div className={`flex gap-4 items-start mt-9 ${isReversed ? 'mr-11 max-md:mr-2.5' : 'ml-7 max-md:ml-2.5'}`}>
              <img loading="lazy" src={isReversed ? "https://cdn.builder.io/api/v1/image/assets/TEMP/7a686db5677964d6840a806ef26389ecddc6f97f0c0cd4332097766b6fd44e69?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d" : "https://cdn.builder.io/api/v1/image/assets/TEMP/5627016ca8966932ba947fe538bc3efd940edeae03226df23365b88dea386db5?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d"} alt="" className="object-contain shrink-0 aspect-square w-[31px]" />
              <div className="flex overflow-hidden relative flex-col aspect-square w-[31px]">
                <img loading="lazy" src={isReversed ? "https://cdn.builder.io/api/v1/image/assets/TEMP/da7a32d862169dbd3d2d7f7e5ea6a32fdf3a62070569e1ec97afe8ac14565359?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d" : "https://cdn.builder.io/api/v1/image/assets/TEMP/25b2480a8e2106fa168a4f2d7b082e8e08f92f6e55b967c8df917b184e891a15?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d"} alt="" className="object-cover absolute inset-0 size-full" />
                <img loading="lazy" src={isReversed ? "https://cdn.builder.io/api/v1/image/assets/TEMP/f95ff9c2cf5b4c6e8b44bd5cc3e4e5b7acea9ef3f7f07756e05aba052c668ccf?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d" : "https://cdn.builder.io/api/v1/image/assets/TEMP/254b7b3a6f956ea8c1da3c10cac823dbc57e97fa02ca2c3faaa2bcf8b9d1cf39?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d"} alt="" className="object-contain w-full aspect-square" />
              </div>
            </div>
          </div>
        </div>
        <div data-layername="column" className={`flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full ${imageOrder}`}>
          <img loading="lazy" src={imageSrc} alt={title} className="object-contain w-full rounded-none aspect-[1.71] max-md:max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default ExampleProject;