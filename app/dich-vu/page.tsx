import Booking from '@/components/Booking'
import Intro from '@/components/Intro'
import ListService from '@/components/ListService'
import Vouchers from '@/components/Vouchers'
import React from 'react'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dịch vụ tại Massage Queen || 93 Trần Quang Khải",
  description: "Massage thư giãn cho Nam giới hấp dẫn đạt chuẩn TOP tại Sài Thành.",
};
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
