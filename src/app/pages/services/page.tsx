'use client';

import React from 'react'
import Navbar from '@/app/component/navbar/navbar';

import Footer from '@/app/component/footer/footer'
import Solution1 from '../../component/services/title';
import Solution2 from '../../component/services/services';


export default function about() {
  return (
    <>
      <Navbar />
      <Solution1 />
      <Solution2 />
      <Footer />
    </>
  )
}
