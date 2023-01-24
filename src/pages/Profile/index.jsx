import { Container, Form, Avatar, Footer } from './styles'

import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <header>
        <FiArrowLeft />
        <Link to="/">Voltar</Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/FabioLuizz.png" alt="Foto de perfil" />

          <label htmlFor="img">
            <FiCamera />

            <input id="img" type="file" />
          </label>
        </Avatar>

        <div>
          <Input icon={FiUser} placeholder="Name" />
          <Input icon={FiMail} placeholder="E-mail" />
        </div>

        <div>
          <Input type="password" icon={FiLock} placeholder="Senha Atual" />
          <Input type="password" icon={FiLock} placeholder="Nova senha" />
        </div>

        <Footer to='/'>
          <Button title="Salvar" isNew />
        </Footer>
      </Form>
    </Container>
  )
}
