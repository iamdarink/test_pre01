'use client'

import React from 'react';
import Navbar from '@/app/component/navbar/navbar';
import {Solution1, Solution2, Solution3, Solution4, Solution5, Solution6} from '@/app/pages/homepage/homepage';
import Footer from '@/app/component/footer/footer';

export default function index() {
  return (
    <>
      <Navbar />
      <Solution1 />
      <Solution2 />
      <Solution3 />
      <Solution4 />
      <Solution5 />
      <Solution6 />
      <Footer />

    </>
  );
}