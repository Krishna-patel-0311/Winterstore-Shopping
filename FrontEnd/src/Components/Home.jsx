import React from 'react'
import Category from './Home/Category'
import Divider from './Home/Divider'
import Extra from './Home/Extra'
import { motion } from 'framer-motion'
import SwiperCrousal from './Home/SwiperCrousal'
export default function Home() {
  return (
    <motion.div
    >
      <Divider Title="Top categories to choose from" />
      <Category />
      <Divider Title="Featured Products" />
      <SwiperCrousal title="Mens" Idealfor="Men"/>
      <SwiperCrousal title="Womens" Idealfor="Women"/>
      <SwiperCrousal title="Boys" Idealfor="Boys"/>
      <SwiperCrousal title="Girls" Idealfor="Girls"/>
      <Extra/>
    </motion.div>
  )
}
