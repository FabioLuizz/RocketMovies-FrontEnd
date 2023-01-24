import { Container, Profile, User } from './styles'

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <input type="text" placeholder="Pesquisar pelo título" />

      <User>
        <strong>Fabio Luiz</strong>
        <a href='/sigin'>sair</a>
      </User>

      <Profile to="/profile">
        <img src="https://github.com/FabioLuizz.png" alt="Foto do perfil" />
      </Profile>

    </Container>
  )
}
