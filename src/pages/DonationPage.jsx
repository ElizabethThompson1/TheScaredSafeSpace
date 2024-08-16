import React from 'react'
import DonationHeader from '../components/Donations/DonationsHeader/DonationsHeader'
import MoneyDonations from '../components/Donations/MoneyDonations/MoneyDonations'

const DonationPage = () => {
  return (
    <div>
      <DonationHeader/>
      <MoneyDonations/>
    </div>
  )
}

export default DonationPage
