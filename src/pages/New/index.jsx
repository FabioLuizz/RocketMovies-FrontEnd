import { Container, Form, Section, NewMovie, Footer } from './styles'

import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useState } from 'react'

import { api } from '../../services/api'

import { ButtonText } from '../../components/ButtonText'
import { MovieItem } from '../../components/MovieItem'
import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function New() {
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()
  
  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function Message(event) {
    if(event){
      alert('Você atingiu o limite de notas!')
    }
  }
  
  async function handleNewNote() {
    if(!title) {
      return alert("Digite um titulo a anotação do filme!")
    }

    if(!rating) {
      return alert("Digite uma nota ao filme!")
    }

    if(newTag) {
      return alert("Você deixou um marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vázio")
    }

    await api.post('/notes', {title, description, rating, tags}) 

    alert('Nota criada com sucesso!')
    navigate('/')
  }

  function handleRemoveNote() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <ButtonText icon={FiArrowLeft} title="Voltar" />
            </Link>

            <h1>Novo Filme</h1>
          </header>

          <Section>
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </Section>

          <Section>
            <TextArea 
              className={TextArea}
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />
          </Section>

          <NewMovie>
            <p>Marcadores</p>

            <div>
              {tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <MovieItem
                placeholder="Novo Marcador"
                isNew
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={tags.length <= 6 ? (handleAddTag) : (Message)}
              />
            </div>
          </NewMovie>

          <Footer>
            <Button title="Excluir filme" onClick={handleRemoveNote}/>
            <Button title="Salvar alteraçôes" isNew onClick={handleNewNote}/>
          </Footer>
        </Form>
      </main>
    </Container>
  )
}
