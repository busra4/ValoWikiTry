import React from 'react'
import { useContext, useEffect } from 'react'
import SpreyList from '../components/Spreys/SpreyList'
// CONTEXT
import AppLevelContext from '../context/AppLevelContext'
// COMPONENTS

const Spreys = () => {
  const { fetchSpreys } = useContext(AppLevelContext)

  useEffect(() => {
    fetchSpreys()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <SpreyList />
    </>
  )
}

export default Spreys