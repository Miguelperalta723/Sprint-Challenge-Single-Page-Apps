import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard'


export default function EpisodeList() {
    const [episodes, setEpisodes] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode/')
    .then(res => res.json())
    .then(res => {
      console.log(res.results)
      console.log(res)
      setEpisodes(res.results)
    })
    .catch(res => {
      console.log('error:', res)
    })
  }, []);

  return (
    <section className='episode-list grid-view'>
      {Array.from(episodes).map(episode => {
        return <EpisodeCard key={episode.id} name={episode.name} episode={episode.episode} airDate={episode.air_date}/>
      })}
    </section>
    )
}
