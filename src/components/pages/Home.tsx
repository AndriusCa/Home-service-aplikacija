import Title from "../Homepage/Title";
import ServiceIconList from "../Homepage/ServiceIcon/ServiceIconList";
import BusinessCardList from "../Homepage/BusinessCard/BusinessCardList";

function Home(): React.ReactElement {
  return (
    <>
      <Title />
      <ServiceIconList />
      <BusinessCardList />
    </>
  );
}

export default Home;
