import React from "react";
import styles from "./ServiceIcon.module.scss";

interface ServiceIconProps {
  source: string;
  text: string;
}

function ServiceIcon({ source, text }: ServiceIconProps): React.ReactElement {
  return (
    <div className={styles.icon}>
      <img src={source} width={"48px"} height={"48px"} alt={text} />
      <span>{text}</span>
    </div>
  );
}

export default ServiceIcon;
