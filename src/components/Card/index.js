import React from 'react'
import { useDrag } from 'react-dnd/dist/esm/hooks/useDrag';

import { Container, Label } from './styles'

export default function index ( { data } ) {


  return (
    <Container>
      <header>
        { data.labels.map( label => <Label key={label} color={label} />) }
      </header>
      <p>{ data.content }</p>
      { data.user &&  <img src= { data.user } alt=''></img> }
    </Container>
  );
}
