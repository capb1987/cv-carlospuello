import { useState, useEffect } from "react";
import { Icon } from "@iconify-icon/react";

import { iconosTech, iconosTechColor } from "@/utils";

const TechIcons = ({ tecnologia }) => {
  const [iconName, setIconName] = useState("");
  const [iconColorName, setIconColorName] = useState("");

  useEffect(() => {
    const red = iconosTech(tecnologia);

    if (red.length > 0) {
      setIconName(red);
      return;
    }
  }, [iconName]);

  useEffect(() => {
    const color = iconosTechColor(iconName);

    if (color.length > 0) {
      setIconColorName(color);
    }
  }, [iconName]);

  return (
    <li
      className={`font-semibold flex justify-center items-center ${iconColorName} p-3  text-sm text-center`}
    >
      <Icon
        className="text-2xl md:text-3xl lg:text-4xl"
        icon={`mdi:${iconName}`}
      />
    </li>
  );
};

export default TechIcons;
