import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard'


export default function LocationsList() {
    const [lacations, setLocations] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location/')
    .then(res => res.json())
    .then(res => {
      console.log(res.results)
      console.log(res)
      setLocations(res.results)
    })
    .catch(res => {
      console.log('error:', res)
    })
  }, []);

  return (
    <section className='location-list grid-view'>
      {Array.from(lacations).map(location => {
        return <LocationCard key={location.id} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents}/>
      })}
    </section>
    )
}
