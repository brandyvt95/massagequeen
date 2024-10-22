import Newfeeds from '@/components/Newfeeds'
import React from 'react'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tin tức || Massage Queen || 93 Trần Quang Khải",
  description: "Massage thư giãn cho Nam giới hấp dẫn đạt chuẩn TOP tại Sài Thành.",
};
export default function page() {
  return (
    <>
    <Newfeeds/>
    </>
  )
}
