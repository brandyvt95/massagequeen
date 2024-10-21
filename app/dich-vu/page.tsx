import Booking from '@/components/Booking'
import Intro from '@/components/Intro'
import ListService from '@/components/ListService'
import Vouchers from '@/components/Vouchers'
import React from 'react'

export default function page() {
  return (
    <>
    <Intro/>
    <ListService/>
    <Booking/>
    <Vouchers/>
    </>
  )
}
