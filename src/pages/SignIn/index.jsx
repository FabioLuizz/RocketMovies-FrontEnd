import { useState } from 'react'
import { Container, Form, Background } from './styles'

import { FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Hooks/Auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div>
          <Input
            icon={FiMail}
            type="text"
            placeholder="E-mail"
            className="email"
            onChange={e => setEmail(e.target.value)}
          />
      
          <Input
            icon={FiLock}
            type="password"
            placeholder="Senha"
            className="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Entrar" isNew onClick={handleSignIn}/>

        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
