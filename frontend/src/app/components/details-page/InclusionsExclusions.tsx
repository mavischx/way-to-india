// components/InclusionsExclusions.tsx
import React from 'react';
import { inclusions, exclusions } from '@/app/details/content.dto';


const InclusionsExclusions = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">Inclusions</h2>
            <ul className="list-disc ml-5">
                {/* Replace with your inclusions data */}
                {inclusions.map((item, index) => (
                    <li key={index}>{item.description}</li>
                ))}
            </ul>
            <h2 className="text-xl font-bold mt-4">Exclusions</h2>
            <ul className="list-disc ml-5">
                {/* Replace with your exclusions data */}
                {exclusions.map((item, index) => (
                    <li key={index}>{item.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default InclusionsExclusions;
