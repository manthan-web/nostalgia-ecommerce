import React from "react";
import { Video } from "../components/heroVideo/Video";
import { Shop } from "../components/Shop/Shop";
import Reason from "../components/Reason/Reason";
import { Helmet } from 'react-helmet';


const Home = () => {
    return (

        <div>
            <Helmet>
        <title>My Website</title>
        <meta property="og:title" content="Nostalgia - Rediscover Your Childhood Favorites" />
        <meta property="og:description" content="Browse Nostalgia Toys for a trip down memory lane. Find products from your childhood, perfect for 90's kids and anyone seeking to relive cherished memories. Shop now and rediscover the magic of playtime!" />
        <meta property="og:image" content="/images/shinchan.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
            <Video/>
            <Shop />
            <Reason />
        </div>
    )
}


export default Home;