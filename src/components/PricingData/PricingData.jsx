import React, { use } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PricingData = ({pricingPromise}) => {
    const priceData=use(pricingPromise);
   // console.log(priceData);
    return (
        <div>
            <h2 className='text-xl font-bold ml-15'>Get Our Premium MemberShip</h2>
            <div className='ml-10 grid gird-cols-1 md:grid-cols-3 gap-6 mt-5 mr-10'>
                {
                     priceData.map(priceInfo=><PriceCard key={priceInfo.id} priceInfo={priceInfo}></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PricingData;