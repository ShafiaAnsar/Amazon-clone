import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
       <img className='home_image' src='https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg' alt=''/>
       <div className='home_row'>
        <Product title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses' price={29.99} image='https://bukharibooks.com/wp-content/uploads/2020/01/the-lean-startup.png' id= '12344' rating={4} />
        <Product 
        title= 'Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls'
        image='https://m.media-amazon.com/images/I/815KnP2wjDS._AC_UY218_.jpg' price={13.49} rating ={4} id ='12355'
        />
     </div>
     <div className='home_row'>
        <Product title= 'Anne Klein Womens Strap Watch, AK/3702'
        image='https://m.media-amazon.com/images/I/71Q4VaQ5FXL._AC_UL320_.jpg' price={35} rating={2} id ='12366'/>
        <Product title='Roll over image to zoom in
Brand: ETHNIC EMPORIUM
ETHNIC EMPORIUM indian Bollywood Designer Heavy Border & plain Anarkali Long Georgette Abaya Muslim Dress 1312 (2xl, red)'
        image='https://m.media-amazon.com/images/I/61c6Wtg9I3L._MCnd_AC_UL320_.jpg' price={39.05} rating={4} id ='12377' />
        <Product title='Samsung Galaxy Tab S8 Android Tablet, 11” LCD Screen, 256GB Storage, Qualcomm Snapdragon, S Pen Included, All-Day Battery Ultra Wide Camera, DeX Productivity, Pink Gold'
        image='https://m.media-amazon.com/images/I/818zWwTXYsL._AC_UY218_.jpg' price={670} rating={3} id ='12388'/>
        <Product title='Roll over image to zoom in
Visit the Under Armour Store
Under Armour Womens Charged Assert  Running Shoe'
        image='https://m.media-amazon.com/images/I/51PgLKADR9L._AC_UL320_.jpg' price={49} rating={3} id ='12348'/>
     </div>
     <div className='home_row'>
     <Product title='Anna by Anuschka Womens Genuine Leather V Top Multi-Compartment Crossbody' image='https://m.media-amazon.com/images/I/A1Yy4lAJ2lL._AC_UL320_.jpg' price={163} rating={5} id='12399'/>
     <Product title='Amazfit Bip 3 Smart Watch for Android iPhone, Health Fitness Tracker with 1.69" Large Display,14-Day Battery Life, 60+ Sportsy' image='https://m.media-amazon.com/images/I/71XElrMMgML._AC_UL320_.jpg' price={57.36 } rating={4} id='12499'/>
     <Product title='Anna by Anuschka Womens Genuine Leather Slim Cross Shoulder Bag  Hand Painted Original Artwork Exterior' image='https://images-na.ssl-images-amazon.com/images/I/A11t3Z5GmyL._AC_UL160_SR160,160_.jpg' price={139 } rating={4} id='12493'/>
     </div>
       
        </div>
    
    </div>
  )
}

export default Home
