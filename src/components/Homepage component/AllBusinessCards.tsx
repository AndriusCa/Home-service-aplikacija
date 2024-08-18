import BusinessCard from "./BusinessCard";
import styles from "./AllBusinessCards.module.scss";

function AllBusinessCards() {
  return (
    <>
      <div className={styles.disclaimer}>Popular businesses</div>
      <div className={styles.businessCards}>
        <BusinessCard
          source="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/08/featured_image_what_size_moving_truck_do_you_need.jpeg.jpg"
          alt="White truck"
          service="Shifting"
          title="Moki veži"
          name="Darius Standys"
          address="Žemaičių al. 27, Klaipėda"
          btnText="Book now"
        />
        <BusinessCard
          source="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg"
          alt="Smilling cleaning lady"
          service="Cleaning"
          title="Išsivalyk pats"
          name="Tadas Gedvilas"
          address="Kauno g. 27, Vilnius"
          btnText="Book now"
        />
        <BusinessCard
          source="https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners.jpg"
          alt="Smiling cleaning lady 2"
          service="Cleaning"
          title="UAB Valymas"
          name="Regina Kazlauskienė"
          address="Aukštaičių al. 27, Klaipėda"
          btnText="Book now"
        />
        <BusinessCard
          source="https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/kh-qualified-vs-unqualified-electrical-workers_feat.jpg"
          alt="Electric"
          service="Electric"
          title="Elektrikas į namus"
          name="Rokas Andreikėnas"
          address="Maisto g. 17, Vilnius"
          btnText="Book now"
        />
      </div>
    </>
  );
}

export default AllBusinessCards;

// sources

// White truck
// https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/08/featured_image_what_size_moving_truck_do_you_need.jpeg.jpg

// women cleaning nr. 1

// https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners-3.jpg

// women cleaning nr. 2

// https://www.pristinehome.com.au/wp-content/uploads/2020/01/15-Cleaning-Tips-from-Professional-Cleaners.jpg

// electrician

// https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/kh-qualified-vs-unqualified-electrical-workers_feat.jpg
