import React from "react";
import stylesSearch from "./ServiceIconSearch.module.scss";
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
  const isSearchPage = window.location.href.includes("/search");
  const styles = isSearchPage ? stylesSearch : stylesHome;
  return (
    <div onClick={onClick} className={styles.icon}>
      <img src={source} width={"48px"} height={"48px"} alt={text} />
      <span>{text}</span>
    </div>
  );
}

export default ServiceIcon;
