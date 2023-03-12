import { Container, Form, Avatar, Footer } from './styles'

import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi'
import { useAuth } from '../../Hooks/Auth'
import { useState } from 'react'
import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [PasswordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name, 
      email,
      password: passwordNew,
      old_password: PasswordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({user: userUpdated, avatarFile})
  }


  async function handleUpdateFile(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)

    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <FiArrowLeft />
        <Link to={-1}>Voltar</Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto de perfil" />

          <label htmlFor="img">
            <FiCamera />

            <input id="img" type="file" onChange={handleUpdateFile}/>
          </label>
        </Avatar>

        <div>
          <Input icon={FiUser} placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
          <Input icon={FiMail} placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>

        <div>
          <Input type="password" icon={FiLock} placeholder="Senha Atual" onChange={e => setPasswordOld(e.target.value)}/>
          <Input type="password" icon={FiLock} placeholder="Nova senha" onChange={e => setPasswordNew(e.target.value)}/>
        </div>

        <Footer to="/">
          <Button title="Salvar" isNew onClick={handleUpdate}/>
        </Footer>
      </Form>
    </Container>
  )
}
