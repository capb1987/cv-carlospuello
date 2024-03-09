import { useState, useEffect } from "react";
import { Icon } from "@iconify-icon/react";

import { misRedesIconos } from "@/utils";
const IconoRedes = ({ profile, index }) => {
  const [colorIcon, setColorIcon] = useState("");

  useEffect(() => {
    const red = misRedesIconos(profile.network);
    if (red.length > 0) {
      setColorIcon(red);

      return;
    }
  }, [colorIcon]);

  return (
    <li key={index}>
      <a
        className="flex flex-col items-center transition-colors duration-500  ease-in hover:text-gray-100"
        href={profile.url}
        target="_blank"
      >
        <Icon className="text-3xl md:text-5xl" icon={`bi:${colorIcon}`} />
        <span className="text-base sm:text-lg md:text-xl font-semibold">
          {profile.network}
        </span>
      </a>
    </li>
  );
};

export default IconoRedes;
