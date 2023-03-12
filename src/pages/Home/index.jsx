import { Container, Main, Section } from './styles'
import {FiPlus} from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../../Hooks/Auth'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { MovieDetails } from '../../components/MovieDetails'

export function Home() {
  const {user} = useAuth()

  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?user_id=${user.id}&title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  },[search])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?user_id=${user.id}&title=${search}`)
      setNotes(response.data)
      }

    fetchNotes()
  },[])


  return(
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)}/>

      <Main>
        <header>
          <h1>Meus filmes</h1>

          <a href="/new"><Button icon={FiPlus} title='Adicionar filme'/></a> 
        </header>

        <Section>
          {
            notes && 
              notes.map((note) => (

              <MovieDetails key={note.id} data={note} onClick={() => handleDetails(note.id)}/>
            ))
          }
        </Section>


      </Main>
    </Container>
  )
}