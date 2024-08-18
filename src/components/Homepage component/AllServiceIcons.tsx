import ServiceIcon from "./ServiceIcon";
import styles from "./AllServiceIcons.module.scss";

function ServiceIconsCombined(): React.ReactElement {
  return (
    <div className={styles.icons}>
      <ServiceIcon
        source={
          "https://img.icons8.com/?size=100&id=9341&format=png&color=E23E40"
        }
        text={"Shifting"}
      />
      <ServiceIcon
        source={
          "https://img.icons8.com/?size=100&id=59827&format=png&color=ECBB3A"
        }
        text={"Repair"}
      />
      <ServiceIcon
        source={
          "https://img.icons8.com/?size=100&id=24925&format=png&color=EA9319"
        }
        text={"Plumbing"}
      />
      <ServiceIcon
        source={
          "https://img.icons8.com/?size=100&id=8088&format=png&color=B12FDE"
        }
        text={"Cleaning"}
      />
      <ServiceIcon
        source={
          "https://img.icons8.com/?size=100&id=8141&format=png&color=059E96"
        }
        text={"Painting"}
      />
      <ServiceIcon
        source={
          "https://img.icons8.com/?size=100&id=9094&format=png&color=1F71C5"
        }
        text={"Electric"}
      />
    </div>
  );
}

export default ServiceIconsCombined;
