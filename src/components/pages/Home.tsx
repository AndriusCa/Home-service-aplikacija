import Navbar from "../Homepage component/Navbar";
import Title from "../Homepage component/Title";
import ServiceIconsCombined from "../Homepage component/AllServiceIcons";
import AllBusinessCards from "../Homepage component/AllBusinessCards";

function Home(): React.ReactElement {
  return (
    <>
      <Navbar />
      <Title />
      <ServiceIconsCombined />
      <AllBusinessCards />
    </>
  );
}

export default Home;
