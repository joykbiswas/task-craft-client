import { Helmet } from "react-helmet";
import HomeBanner from "../Components/Home/HomeBanner";
import Productivity from "../Components/Home/Productivity";
import WorkFlows from "../Components/Home/WorkFlows/WorkFlows";
import Benefit from "../Components/Benefit/Benefit";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Task Craft </title>
      </Helmet>
      <HomeBanner></HomeBanner>
      <Productivity></Productivity>
      <Benefit></Benefit>
      <WorkFlows></WorkFlows>
      
    </div>
  );
};

export default Home;
