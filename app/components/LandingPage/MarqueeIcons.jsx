
import dynamic from "next/dynamic";
const Marquee = dynamic(() => import("react-fast-marquee"));
const Icon = dynamic(() => import("./Icon"));

const MarqueeIcons = () => {
  const rowOne = [
    "/Icons/GoogleIcon.png",
    "/Icons/MetaIcon.png",
    "/Icons/MicrosoftIcon.png",
    "/Icons/GoogleIcon.png",
    "/Icons/MetaIcon.png",
    "/Icons/MicrosoftIcon.png",
  ];

  const rowTwo = [
    "/Icons/AmazonIcon.png",
    "/Icons/NetflixIcon.png",
    "/Icons/AppleIcon.png",
    "/Icons/AmazonIcon.png",
    "/Icons/NetflixIcon.png",
    "/Icons/AppleIcon.png",
  ];

  const rowThree = [
    "/Icons/TeslaIcon.png",
    "/Icons/IonIcon.png",
    "/Icons/CoinIcon.png",
    "/Icons/TeslaIcon.png",
    "/Icons/IonIcon.png",
    "/Icons/CoinIcon.png",
  ];

  return (
    <>
      <Marquee>
        <div className="!my-auto grid grid-cols-6 last:mr-8 lg:mb-4 gap-x-7 md:gap-[50px] md:last:mr-[39px]">
          {rowOne?.map((item, index) => (
            <Icon key={index} src={item} />
          ))}
        </div>
      </Marquee>
      <Marquee direction="right">
        <div className="!my-auto grid grid-cols-6 last:mr-8 lg:mb-4 gap-x-7 md:gap-[50px] md:last:mr-[39px]">
          {rowTwo?.map((item, index) => (
            <Icon key={index} src={item} />
          ))}
        </div>
      </Marquee>
      <Marquee>
        <div className="!my-auto grid grid-cols-6 last:mr-8 lg:mb-4 gap-x-7 md:gap-[50px] md:last:mr-[39px]">
          {rowThree?.map((item, index) => (
            <Icon key={index} src={item} />
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default MarqueeIcons;
