import React from 'react'
import { FormControl } from 'react-bootstrap'

export const Filter = ({ filter, setFilter}) => {
  return (
    <>
        <FormControl size="sm" type="text" placeholder='Busqueda por nombre' value={filter} onChange={e => setFilter(e.target.value)} />
    </>
  )
}
