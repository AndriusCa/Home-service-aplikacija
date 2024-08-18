import React from "react";
import styles from "./ServiceIcon.module.scss";

// ServiceIcons Component
// const ServiceIcons: React.FC = () => (
//   <div className="service-icons">
//     <ServiceIcon icon="shifting-icon.png" label="Shifting" />
//     <ServiceIcon icon="repair-icon.png" label="Repair" />
//     <ServiceIcon icon="plumbing-icon.png" label="Plumbing" />
//     <ServiceIcon icon="cleaning-icon.png" label="Cleaning" />
//     <ServiceIcon icon="painting-icon.png" label="Painting" />
//     <ServiceIcon icon="electric-icon.png" label="Electric" />
//   </div>
// );

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
