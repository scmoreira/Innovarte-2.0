import React from 'react';

import PaymentForm from './PaymentForm';
import AddressForm from './AddressForm';

const Checkout = () => {
    return (
        <>
            <AddressForm />
            <PaymentForm />
        </>
    )
}
    
export default Checkout;