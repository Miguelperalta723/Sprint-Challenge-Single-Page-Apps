import React from 'react'
import { Table } from 'semantic-ui-react';

export default function EpisodeCard (props) {
  return (
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Episode</Table.HeaderCell>
        <Table.HeaderCell>Air Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{props.name}</Table.Cell>
        <Table.Cell>{props.episode}</Table.Cell>
        <Table.Cell>{props.airDate}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  )
}

