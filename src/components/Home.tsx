import Navbar from "./Homepage component/Navbar";
import Title from "./Homepage component/Title";
import ServiceCombinedIcons from "./Homepage component/AllServiceIcons";

function Home(): React.ReactElement {
  return (
    <>
      <Navbar />
      <Title />
      <ServiceCombinedIcons />
    </>
  );
}

export default Home;
