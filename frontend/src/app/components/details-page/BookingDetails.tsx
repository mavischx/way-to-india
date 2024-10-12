// components/BookingPolicy.tsx
import React from 'react';

const BookingPolicy = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">Booking Policy</h2>
            <p><strong>CANCELLATION POLICY</strong></p>
            <ul>
                <li>Full refund: If the cancellation is made more than [number] days before the trip departure date.</li>
                <li>Partial refund: If the cancellation is made between [number] and [number] days before departure.</li>
                <li>No refund: If the cancellation is made within [number] days of departure, or if the trip has already started.</li>
            </ul>
            <p><strong>ACT OF GOD</strong></p>
            <p>The tour operator may cancel the trip due to unforeseen circumstances beyond their control...</p>
            <p><strong>PERSONAL REASONS</strong></p>
            <p>If you cancel the trip due to personal reasons (e.g., illness, family emergencies), the cancellation fees may apply...</p>
        </div>
    );
};

export default BookingPolicy;
