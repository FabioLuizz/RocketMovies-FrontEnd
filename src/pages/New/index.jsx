import { Container, Form, Section, NewMovie, Footer } from './styles'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to='/'><ButtonText icon={FiArrowLeft} title="Voltar" /></Link>

            <h1>Novo Filme</h1>
          </header>

          <Section>
            <Input placeholder="Título" />

            <Input placeholder="Título" />
          </Section>

          <Section>
            <TextArea placeholder="Observações" />
          </Section>

          <NewMovie>
            <p>Marcadores</p>

            <div>
              <MovieItem value="ReactJS" />
              <MovieItem placeholder="Novo Marcador" isNew />
            </div>
          </NewMovie>

          <Footer to='/'>
            <Button title="Excluir filme" />
            <Button title="Salvar alteraçôes" isNew />
          </Footer>
        </Form>
      </main>
    </Container>
  )
}
