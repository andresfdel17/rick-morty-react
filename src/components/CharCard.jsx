import React from 'react'
import { Card } from 'react-bootstrap';

export const CharCard = ({ name, image, gender}) => {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {gender}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
