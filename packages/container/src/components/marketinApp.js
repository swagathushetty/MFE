//this function allows us to render from our child application 
//this function will work with any child framework angulat,vue etc 
//As long as output is html this function will work

import { mount } from 'marketing/MarketingApp'

import React, { useRef, useEffect } from 'react'


const MarketingApp = () => {

  useEffect(() => {
    mount(ref.current)
  })
  const ref = useRef(null)
  return (
    <div ref={ref}>

    </div>
  )
}

export default MarketingApp
