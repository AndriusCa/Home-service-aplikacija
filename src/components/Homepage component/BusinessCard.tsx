import styles from "./BusinessCard.module.scss";

export interface Business {
  source?: string;
  alt?: string;
  title?: string;
  name?: string;
  address?: string;
  btnText?: string;
}

export interface BusinessCardProps extends Business {
  service?: string;
}

function BusinessCard({
  source,
  alt,
  service,
  title,
  name,
  address,
  btnText,
}: BusinessCardProps): React.ReactElement {
  return (
    <div className={styles.icon}>
      <img className={styles.images} src={source} alt={alt} />
      <div className={styles.infoContainer}>
        <div className={styles.service}>{service}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.address}>{address}</div>
        <button className={styles.btn}>{btnText}</button>
      </div>
    </div>
  );
}

export default BusinessCard;
