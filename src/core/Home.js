import React from 'react';
import Posts from '../post/Posts'
import StripeCheckout from 'react-stripe-checkout'

const Home = () => (
    
    <div className="container fluid">
        <h1>Campus Connect</h1>
        <StripeCheckout>
            <button className="btn btn-danger btn-raised">Donate to College</button>
        </StripeCheckout>
        <Posts/>
    </div>
)

export default Home;