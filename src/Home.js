import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
           <div className='home__container'>
               <img src='https://dvh1deh6tagwk.cloudfront.net/finder-au/wp-uploads/2019/01/PrimeVideoSetUp_AmazonPrime_900x500.jpg' alt='homeImg' className='home__img'/>
               <div className='home__row'>
                    <Product
                        id="12345678"
                        image={"https://1.bp.blogspot.com/-1VT5GeEZjtg/YMsbaIuU_WI/AAAAAAAAD40/w5Af0WekI10W5AKGpGhDKIMLIfn_q566QCNcBGAsYHQ/s16000/Full%2BStack%2BWeb%2BDevelopment%2BBook.png"}title="The Full Stack Developer:"
                        description={"Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer Paperback"}
                        rating={5}
                        published={"Import, 20 November 2018"}
                        oldPrice={2500}
                        newPrice={2000} />
                    <Product
                        id="43567899"
                        image={"https://m.media-amazon.com/images/I/61Deo+Kg6WL._SL1500_.jpg"}title="Panasonic"
                        description={"27L Convection Microwave Oven(NN-CT645BFDG,Black, Magic Grill)Colour-Black       , Capacity	27 litres"}
                        rating={5}
                        published={"Import, 20 November 2018"}
                        oldPrice={45000}
                        newPrice={43000} />
                    <Product
                        id="986521099"
                        image={"https://m.media-amazon.com/images/I/51E-gqtIA0L._SL1333_.jpg"}title="
                        VEGA "
                        description={"Galaxy Foldable 1100 Watts Hair Dryer With Heat & Cool Setting And Detachable Nozzle (VHDH-06)-Purple"}
                        rating={3}
                        published={"Import, 20 November 2018"}
                        oldPrice={2500}
                        newPrice={2000} />
                  
                   
               </div>
               <div className='home__row'>
                    <Product
                        id="54328909"
                        image={"https://m.media-amazon.com/images/I/619rnEyFzzL._UL1500_.jpg"}title="ILLI LONDON"
                        description={"Women's Skater Knee length dress,Fit Type: Regular, Style: A-Line Sweetheart Neck Cold Shoulder Skater Dress"}
                        rating={3}
                        published={"Import, 20 November 2018"}
                        oldPrice={1500}
                        newPrice={999} />
                    <Product
                        id="87612679"
                        image={"https://m.media-amazon.com/images/I/71MxW5fXc-L._SL1500_.jpg"}title="
                        HP Pavilion"
                        description={"x360 11th Gen Intel Core i5 14-inch(35.6 cm) Touchscreen 2-in-1 FHD Laptop (16GB/512GB SSD/Fingerprint Reader/Windows 10/MS Office/Natural Silver/1.41 Kg), 14-dy0053TU"}
                        rating={5}
                        published={"Import, 20 November 2018"}
                        oldPrice={75000}
                        newPrice={74500} />
                    <Product
                        id="76542319"
                        image={"https://m.media-amazon.com/images/I/61t2Qq5TG8L._SL1000_.jpg"}title="Lakme"
                        description={"Absolute Skin Natural Mousse, Ivory Fair 01, With Spf, Light Texture , Stays Upto 16 Hours, 25 g"}
                        rating={5}
                        published={"Import, 20 November 2018"}
                        oldPrice={2500}
                        newPrice={2000} />
                    
               </div>
               <div className='home__row'>
                    <Product
                        id="25789899"
                        image={"https://m.media-amazon.com/images/I/61mKoHH2rsL._SL1000_.jpg"}title="Ferrero Rocher"
                        description={"Premium Chocolates 24 Pieces, 300 g,Allergen Information	Dairy,                  Diet Type-Vegetarian, Package Weight-0.56 Kilograms"}
                        rating={5}
                        published={"Import, 20 November 2018"}
                        oldPrice={2500}
                        newPrice={2000} />
                    <Product
                        id="435095439"
                        image={"https://tse2.mm.bing.net/th/id/OIP.wJ2vHgfQXpI2mSdNN-EkxwHaFl?pid=ImgDet&rs=1"}title="Amazon Brand"
                        description={"Solimo Neptune Engineered Wood Queen Wenge Finish Bed with Storage (Brown)"}
                        rating={4}
                        published={"Import, 20 November 2018"}
                        oldPrice={16900}
                        newPrice={16000} />
                    <Product
                        id="987654"
                        image={"https://m.media-amazon.com/images/I/51ghTMUoj4L.jpg"}title="Patiofy"
                        description={"Made in India Premium Square Shape Hammock Hanging Cotton Swing Chair with Cushion & Accessories"}
                        rating={3}
                        published={"Import, 20 November 2018"}
                        oldPrice={10000}
                        newPrice={7350} />
                    
               </div>
           </div>
        </div>
    )
}

export default Home
