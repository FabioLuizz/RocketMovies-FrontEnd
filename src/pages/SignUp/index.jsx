import { Container, Form } from './styles'

import { useState } from 'react'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Background } from '../SignIn/styles'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api.post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        }
      })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div>
          <Input
            icon={FiUser}
            type="text"
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
          <Input
            icon={FiMail}
            type="text"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            icon={FiLock}
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Cadastrar" isNew onClick={handleSignUp} />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
