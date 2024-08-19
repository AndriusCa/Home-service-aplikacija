import ServiceIcon from "./ServiceIcon";
import { useState, useEffect, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

function ServiceIconList(): React.ReactElement {
  // const location = useLocation();
  const navigate = useNavigate();
  const isSearchPage = !location.pathname.includes("/search");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1100);

  const handleIconClick = (text: string) => {
    navigate(`/search/${text}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles: CSSProperties = isSearchPage
    ? {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row",
        gap: "1em",
      }
    : {};

  return (
    <div style={styles}>
      <ServiceIcon
        source="https://img.icons8.com/?size=100&id=9341&format=png&color=E23E40"
        text="Shifting"
        onClick={() => handleIconClick("Shifting")}
      />
      <ServiceIcon
        source="https://img.icons8.com/?size=100&id=59827&format=png&color=ECBB3A"
        text="Repair"
        onClick={() => handleIconClick("Repair")}
      />
      <ServiceIcon
        source="https://img.icons8.com/?size=100&id=24925&format=png&color=EA9319"
        text="Plumbing"
        onClick={() => handleIconClick("Plumbing")}
      />
      <ServiceIcon
        source="https://img.icons8.com/?size=100&id=8088&format=png&color=B12FDE"
        text="Cleaning"
        onClick={() => handleIconClick("Cleaning")}
      />
      <ServiceIcon
        source="https://img.icons8.com/?size=100&id=8141&format=png&color=059E96"
        text="Painting"
        onClick={() => handleIconClick("Painting")}
      />
      <ServiceIcon
        source="https://img.icons8.com/?size=100&id=9094&format=png&color=1F71C5"
        text="Electric"
        onClick={() => handleIconClick("Electric")}
      />
    </div>
  );
}

export default ServiceIconList;
