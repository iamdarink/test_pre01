'use client';

import React from 'react'
import Navbar from '@/app/component/navbar/navbar';

import Footer from '@/app/component/footer/footer'
import Solution1 from '../../component/services/title';
import Solution2 from '../../component/services/services';
import { Solution6 } from '@/app/component/homepage';
import Work1 from '@/app/component/services/work1';


export default function services() {
  return (
    <>
      <Navbar />
      <Solution1 />
      <Solution2 />
      <Work1 />
      <Solution6 />
      <Footer />
    </>
  )
}
