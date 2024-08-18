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
      <img src={source} alt={text} />
      <span>{text}</span>
    </div>
  );
}

export default ServiceIcon;

// Truck
// https://img.icons8.com/?size=100&id=9341&format=png&color=000000

// Repair
// https://img.icons8.com/?size=100&id=59827&format=png&color=000000

// Plumbing
// https://img.icons8.com/?size=100&id=24925&format=png&color=000000

// Cleaning
// https://img.icons8.com/?size=100&id=8088&format=png&color=000000

// Painting
// https://img.icons8.com/?size=100&id=8141&format=png&color=000000

// Electric
// https://img.icons8.com/?size=100&id=9094&format=png&color
