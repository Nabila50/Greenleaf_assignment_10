
import Header from "../../layouts/Header";
import FaQ from "../FaQ";
import Accordion from "../FaQ";
import Active from "../Active";
import Journey from "../Journey";
 
import SlideShow from "../SlideShow";
import TradingTips from "../TradingTips";

import ExploreGardener from "./ExploreGardener";

const Home = () => {

   
  return (


    <div>
         
         <SlideShow></SlideShow>
 
        <Active></Active>
        <TradingTips></TradingTips>
        <Journey></Journey>
        <FaQ></FaQ>
       
    </div>
  );
};

export default Home;
