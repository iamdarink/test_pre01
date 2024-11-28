'use client';

import React from 'react'
import Navbar from '@/app/component/navbar/navbar';

import Footer from '@/app/component/footer/footer'
import { Solution1, Solution2, Solution3, Solution4 } from '../../component/about';


export default function about() {
  return (
    <>
      <Navbar />
      <Solution1 />
      <Solution2 />
      <Solution3 />
      <Solution4 />
      <Footer />
    </>
  )
}
