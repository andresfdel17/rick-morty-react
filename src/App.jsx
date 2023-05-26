import { React, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
//importa el componente "Container"
import { Col, Container, Row } from 'react-bootstrap';
import { CharCard } from './components/CharCard';
import { Filter } from './components/Filter';
function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    getApiData();
  }, [filter]);

  const getApiData = async () => {
    const { data } = await axios.get(
      filter === "" ? 
      "https://rickandmortyapi.com/api/character" :
      `https://rickandmortyapi.com/api/character/?name=${filter}`
    );
    setCharacters(data.results);
  }
  return (
    <>
      {/** Utilizamos container */}
      <Container className="mt-4">
        <Filter {...{ filter, setFilter }} />
        <Row className="mt-2">
          {
            characters.map((val, key) => (
              <Col key={val.id} sm>
                <CharCard {...val} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default App;
