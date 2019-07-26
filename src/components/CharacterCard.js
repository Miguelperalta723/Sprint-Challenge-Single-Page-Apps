import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard (props) {
  return (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>Status: {props.status}</Card.Meta>
      <Card.Description>
        Species: {props.species}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='tv' />
        Appears in {props.episodeCount.length} episodes
      </a>
    </Card.Content>
  </Card>
  )
}

  
