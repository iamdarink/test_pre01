'use client';

import React from 'react'
import Navbar from '@/app/component/navbar/navbar';

import Footer from '@/app/component/footer/footer'
import Solution1 from './solution1';
import Solution2 from './solution2';
import Solution3 from './solution3';
import Solution4 from './solution4';

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
