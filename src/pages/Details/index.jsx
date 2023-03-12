import { Container } from './styles'

import { Link, useParams } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'
import { FiArrowLeft } from 'react-icons/fi'
import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { MovieOverview } from '../../components/MovieOverview'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'


export function Details() {
  const [notes, setNotes] = useState(null)

  const params = useParams()

  async function handleDelete() {
    const confirm = window.confirm('Deseje realmente remover está nota ?')

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setNotes(response.data)
    }

    fetchNotes()
  },[])

  return(
    <Container>
      <Header/>

      <main>
        <header>
          <Link to={-1} ><ButtonText icon={FiArrowLeft} title='Voltar'/></Link>
          <Link to={-1} onClick={handleDelete}><ButtonText icon={AiFillDelete} title='Deletar Nota'/></Link>
        </header>

        {
          notes && 
            notes.map((note) => (

            <MovieOverview key={note.id} data={note}/>
          ))
        }

      </main>
    </Container>
  )
}