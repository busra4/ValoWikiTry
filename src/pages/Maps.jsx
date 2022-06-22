import React from 'react'
import { useContext, useEffect } from 'react'
import MapList from '../components/Maps/MapList'
// CONTEXT
import AppLevelContext from '../context/AppLevelContext'
// COMPONENTS

const Maps = () => {
  const { fetchMaps } = useContext(AppLevelContext)

  useEffect(() => {
    fetchMaps()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <MapList />
    </>
  )
}

export default Maps