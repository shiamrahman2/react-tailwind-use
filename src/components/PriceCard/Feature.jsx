import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({fea}) => {
    console.log(fea);
    return (
        <p className='mt-1 ml-3 flex'><CircleCheckBig className='mr-2'></CircleCheckBig>{fea}</p>
    );
};

export default Feature;