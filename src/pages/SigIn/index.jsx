import { Container, Form, Background } from './styles'

import { FiLock, FiMail } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Link } from 'react-router-dom'

export function SigIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div>
          <Input icon={FiMail} placeholder="E-mail" className="email" />
          <Input icon={FiLock} placeholder="Senha" className="password" />
        </div>

        <Button title="Entrar" isNew />

        <Link to='/register'>Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
