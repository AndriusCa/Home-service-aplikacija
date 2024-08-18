import Navbar from "./Homepage component/Navbar";
import Title from "./Homepage component/Title";
import ServiceIconsCombined from "./Homepage component/AllServiceIcons";

function Home(): React.ReactElement {
  return (
    <>
      <Navbar />
      <Title />
      <ServiceIconsCombined />
    </>
  );
}

export default Home;
