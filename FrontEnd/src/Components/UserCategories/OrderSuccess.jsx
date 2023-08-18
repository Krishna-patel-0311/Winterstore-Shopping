import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Oc from '../../Images/oc.gif'

const OrderSuccess = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    // define the function to update the countdown timer
    const updateCountdownTimer = () => {
      if (countdown === 1) {
        // if the countdown reaches zero, redirect to the homepage
        navigate(`/`)
      } else {
        // decrement the countdown timer value
        setCountdown(countdown - 1)
      }
    }


    const timer = setInterval(updateCountdownTimer, 1000)
    return () => clearInterval(timer)
  }, [countdown, navigate])

  return (
    <div className='container-fluid' style={{ margin: 'auto', width: '90%' }}>
      <div className='row'>
        <img src={Oc} alt='Order Complete' style={{ margin: 'auto', width: '50%' }} />
        <h5 className='text-center'>
          Your Order is successfully placed with OrderId: {id}
        </h5>
        <h5 className='text-center'>Redirecting to homepage in {countdown} Seconds...</h5>
      </div>
    </div>
  )
}

export default OrderSuccess
