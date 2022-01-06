import React, {useEffect} from 'react'
import { useMutation } from '@apollo/client'
import { ADD_DONATION } from '../../utils/mutations';
import './success.css'

function Success() {
  const [addDonation] = useMutation(ADD_DONATION);

  useEffect(() => {
    async function saveDonation() {
        setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveDonation();
  }, [addDonation]);
    return (
      <div>
          <h1>Success!</h1>
          <h2>
            Thank you for your donation!
          </h2>
          <h2>
            You will now be redirected to the homepage
          </h2>
      </div>
    );
  };

  export default Success;