import { Container, Profile, User } from './styles'
import { useAuth } from '../../Hooks/Auth'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({onChange}) {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>

      <input type="text" placeholder="Pesquisar pelo título" onChange={onChange} />

      <User>
        <strong>{user.name}</strong>
        <a href='/'  onClick={signOut}>sair</a>
      </User>

      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
      </Profile>

    </Container>
  )
}
