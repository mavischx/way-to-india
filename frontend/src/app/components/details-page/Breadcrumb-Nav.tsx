// components/details-page/Breadcrumb-Nav.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const DetailsPage = () => {

    return (
        <nav className="text-md text-gray-500 mb-4">
            <Link href="/">Home</Link> {" --> "}
            <Link href="/tours">Tours</Link> {" --> "}
            <span className="text-carrot-orange font-bold">Valley of Flowers</span>
        </nav>
    );
};

export default DetailsPage;
