'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './banner.module.css'

export default function Banner (){
  const covers = ['/images/cover1.jpg', '/images/cover2.webp', '/images/cover3.jpg']
  const [index, setIndex] = useState(0)

  return(
    <div className = {styles.banner} onClick={() => {setIndex(index+1)}}>
      <Image src={covers[index%3]}
        alt = 'cover'
        fill = {true}
        priority
        objectFit = 'cover'
      />
      <div className={styles.bannerText}>
        <h1 className = 'text-4xl font-medium'>where every event finds its venue</h1>
        <h3 className = 'text-xl font-serif'>your special event, our priority</h3>
      </div>
    </div>
  )
}