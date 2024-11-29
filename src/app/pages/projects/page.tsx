'use client';

import React from 'react'
import Navbar from '@/app/component/navbar/navbar';
import Footer from '@/app/component/footer/footer'
import { Nameproject, Title } from '@/app/component/projects';



export default function services() {
  return (
    <>
      <Navbar />
      <Title />
      <Nameproject />
      <Footer />
    </>
  )
}
