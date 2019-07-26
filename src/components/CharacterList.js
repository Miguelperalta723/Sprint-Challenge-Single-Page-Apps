import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
 const [chars, setchar] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(res => {
      console.log(res.results)
      setchar(res.results)
    })
    .catch(res => {
      console.log('error:', res)
    })
  }, []);

  return (
    <section className='character-list grid-view'>
      {Array.from(chars).map(char => {
        return <CharacterCard  key={char.id} name={char.name} image={char.image} status={char.status}  species={char.species} episodeCount={char.episode}    />
      })}
    </section>
    )

}
