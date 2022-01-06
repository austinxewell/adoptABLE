import React, { useState, useEffect } from 'react'
import './donate.css'
import { QUERY_CHECKOUT } from '../../utils/queries'
import { loadStripe } from '@stripe/stripe-js'
import { useLazyQuery } from '@apollo/client'
const stripePromise = loadStripe('pk_test_51KEljaItvqx4YfKcKHQqhqWY3eFm0UaRW0SqzQxdT9pF1U7oTJ7GXAyD81cEKBpzT3awqmTRSaKnUmTAE4oX2c8h00ce97diFD')

export default function Donate(props) {
  const [donateState, setDonateState] = useState({ price: 0 })
  // const variables = donateState
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      console.log(data)
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
        // push(`/success?session_id=${data.checkout.session}`)
      });
    }
  }, [data]);

  const submitCheckout = async (event) => {

    getCheckout({
      variables: { ...donateState },
    });
  }

  // clear form values
  // setDonateState({
  //   donate : ''
  // });
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setDonateState({
      price: Number(value),
    });
  };



  return (
    <section>
      <div className='container donateBox columns has-text-centered is-centered mt-3'>
        <h2 className='container'>
          Donate
        </h2>
      </div>
      <div className='container'>
        <div>
          <div className='donateBox donateContainer columns is-centered is-vcentered'>
            <form>
              <div>
                <label className='columns is-centered donateLabel'>How much would you like to Donate?</label>
                <input className='donateInput' placeholder='' name='price' type='number' id='price' value={donateState.price} onChange={handleChange}></input>
              </div>
              <div className='columns is-centered'>
                <button className='donateSubmitButton' type="submit" onClick={submitCheckout}>Checkout</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}