import React, { useState } from 'react';
import { CircleNotch } from '@phosphor-icons/react';

const CircleLoader: React.FC = () => {
    return (
        <div className='flex justify-center items-center'><CircleNotch size={24} className="animate-spin" /></div>
    );
}

export default CircleLoader;