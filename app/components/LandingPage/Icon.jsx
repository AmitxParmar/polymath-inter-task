"use client";
import Image from "next/image";

const Icon = ({ src }) => {
  return (
    <div className="md:w-[100px] md:h-[100px] sm:h-16 sm:w-16 md:min-h-[100px]  p-12 border border-[#d7d7d7] rounded-[0.75rem] justify-center items-center flex relative shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)]">
      <Image
        priority={true}
        alt={"company icon"}
        fill
        src={src}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-scale-down h-20 w-20 lg:h-[250px] lg:w-[250px] "
      />
    </div>
  );
};

export default Icon;
