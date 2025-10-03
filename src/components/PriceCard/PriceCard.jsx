import React from 'react';
import Feature from './Feature';

const PriceCard = ({priceInfo}) => {
  //  console.log(priceInfo);
    const{name,price,description,features}=priceInfo;
    return (
        <div className='border-1 border-amber-300 rounded-xl p-5 shadow-2xl flex flex-col'>
             <div>
                 <h1 className='text-4xl font-extrabold'>{name}</h1>
                  <h4 className='text-xl font-semibold'>{price}</h4>
             </div>
             <div className='flex-1'>
                <p className='mt-3'>{description}</p>
                 <h4 className='text-lg font-semibold'>Features</h4>
                <div>
                    {
                   features.map((fea,index) => <Feature key={index} fea={fea}></Feature>)
                    }
                </div>
             </div>
             <button className='btn w-full mt-3 rounded-3xl bg-amber-200'>SubScribe</button>
        </div>
    );
};

export default PriceCard;