import React from "react";
import { Video } from "../components/heroVideo/Video";
import { Shop } from "../components/Shop/Shop";
import Reason from "../components/Reason/Reason";


const Home = () => {
    return (

        <div>
            <Video/>
            <Shop />
            <Reason />
        </div>
    )
}


export default Home;