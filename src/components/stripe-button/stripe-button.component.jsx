import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IdcabSGxfOr6cWStfvAgE7Hd3g6qDYzL5FrnaAlPJfrFyzd7BG9cQHj6H50sVhZfpoqbASHnXhwuIwvcSsRnTy500odTpGelg';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='http://sendeyo.com/up/d/f3eb2117da'
        description={`Your Total is $${price}`} 
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}/>
    );
};

export default  StripeCheckoutButton;