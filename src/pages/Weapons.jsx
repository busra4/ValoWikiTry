import React from 'react'
import { useContext, useEffect } from 'react'
import WeaponsList from '../components/Weapons/WeaponsList'
// CONTEXT
import AppLevelContext from '../context/AppLevelContext'
// COMPONENTS

const Weapons = () => {
  const { fetchWeapons } = useContext(AppLevelContext)

  useEffect(() => {
    fetchWeapons()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <WeaponsList />
    </>
  )
}

export default Weapons