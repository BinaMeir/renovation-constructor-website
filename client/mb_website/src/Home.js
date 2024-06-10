import { useState } from "react";

import './Home.css';
import FirstSection from './FirstSection';
// import SecondSection from './SecondSection';


const Home = () => {
    return ( 
        <div className="home">
            <FirstSection />
            {/* <SecondSection /> */}
        </div>

     );
}
 
export default Home;