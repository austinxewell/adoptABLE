import React, { useState, useEffect } from 'react'
import './donate.css'
import { QUERY_CHECKOUT } from '../../utils/queries'
import { loadStripe } from '@stripe/stripe-js'
import { useLazyQuery } from '@apollo/client'
const stripePromise = loadStripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

export default function Donate(props){
  const [donateState, setDonateState] = useState( 0 )
  // const variables = donateState
  const [getCheckout, { called, loading, data }] = useLazyQuery(QUERY_CHECKOUT,
    { variables: { price: donateState } });


  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  if (called && loading) return <p>Loadjfkld;ajfkl;sdajflk;sadjl;kfjasklf;sajdklfjsdal;fjsdakl;fjsdalkfssds;ks</p>

  const submitCheckout = async (event) => {
    event.preventDefault();
    console.log(donateState)
    
    try { 
     const {data} = await getCheckout({
        variables: { ...donateState },
      });
      console.log(data)
    }
     catch (e) {
      console.error(e);
    }
  }

    // clear form values
    // setDonateState({
    //   donate : ''
    // });
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setDonateState({
      ...donateState,
      [name]: value,
    });
  };



    return(
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