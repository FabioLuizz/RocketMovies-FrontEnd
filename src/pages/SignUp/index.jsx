import { Container, Form } from './styles'

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Background } from '../SigIn/styles'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div>
          <Input icon={FiUser} placeholder="Nome" />
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Senha" />
        </div>

        <Button title="Cadastrar" isNew/>

        <Link to='/sigin'><FiArrowLeft/>Voltar para o login</Link>
      </Form>
      <Background/>
    </Container>
  )
}
