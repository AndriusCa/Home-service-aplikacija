import React, { CSSProperties } from "react";
// import stylesSearch from "./ServiceIconSearch.module.scss";
import stylesHome from "./ServiceIconHome.module.scss";

interface ServiceIconProps {
  source: string;
  text: string;
  onClick: () => void;
}

function ServiceIcon({
  source,
  text,
  onClick,
}: ServiceIconProps): React.ReactElement {
  // const isSearchPage = window.location.href.includes("/search");

  // const styles: CSSProperties = isSearchPage
  // ? stylesHome
  // : {
  //     display: " flex",
  //     alignItems: "center",
  //     gap: "0.5rem",
  //     padding: "1rem",
  //     border: "2px solid #e6e6e6",
  //     borderRadius: "1rem",
  //     marginBottom: "1rem",
  //     cursor: "pointer",
  //     fontSize: "1.2rem",
  //     textTransform: "capitalize",
  //     fontWeight: " 500",
  //   };

  return (
    <div onClick={onClick} className={stylesHome.icon}>
      <img src={source} width={"48px"} height={"48px"} alt={text} />
      <span>{text}</span>
    </div>
  );
}

export default ServiceIcon;
