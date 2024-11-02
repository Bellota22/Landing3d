"use client"

import React, { forwardRef } from 'react'
import { SodaCan, SodaCanProps } from './SodaCan'
import { Float } from '@react-three/drei'
import { Group } from 'three'

type FloatingCanProps = {
  flavor?: SodaCanProps['flavor']
  floatSpeed?: number
  rotationIntesity?: number
  floatIntensity?: number
  floatingRange?: [number,number]
  children?: React.ReactNode
}

const FloatingCan = forwardRef<Group, FloatingCanProps>(({
  flavor = "blackCherry",
  floatSpeed = 1,
  rotationIntesity = 1,
  floatIntensity = 1,
  floatingRange = [-.1, .1],
  children,
  ...props
}, ref) => {
  return (
    <group ref={ref} {...props}>
      <Float
        speed={floatSpeed} 
        rotationIntensity={rotationIntesity}
        floatIntensity={floatIntensity}
        floatingRange={floatingRange}
      >
        {children}
        <SodaCan flavor={flavor} />
      </Float>

    </group>
  )
})

FloatingCan.displayName = 'FloatingCan'

export default FloatingCan