import React from 'react'
import { Card } from 'semantic-ui-react'

export default function LocationCard ({ name, type, dimension, residents }) {
  const allLocations = [
  {
    header: `${name}`,
    description: `Dimension: ${dimension}`,
    meta: `Type: ${type}`,
  }
]
  return (
    <Card.Group items={allLocations} />
  )
}