import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-10 hover:bg-amber-300'><a href={route.url}>{route.name}</a></li>
    );
};

export default Link;