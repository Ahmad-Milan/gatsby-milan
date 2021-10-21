import React from 'react'
import { Timeline } from 'react-twitter-widgets'

function Twitter() {
  return (
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'MilanLaser'
      }}
      options={{
        height: '400',
      }}
    />
  )
}

export default Twitter
