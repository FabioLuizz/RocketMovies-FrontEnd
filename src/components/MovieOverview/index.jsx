import { Container, Tags, Section, Brand, Content, Time } from './styles'

import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'

import { useAuth } from '../../Hooks/Auth'

import { api } from '../../services/api'

import { Tag } from '../Tag'

export function MovieOverview({ data, onChange, icon: Icon, ...rest}) {
  const { user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container {...rest}>
      <Section >
        <h1>{data.title}</h1>

        <h2>
          <AiFillStar className={data.rating >= 1 ? 'rated' : ''} />
          <AiFillStar className={data.rating >= 2 ? 'rated' : ''} />
          <AiFillStar className={data.rating >= 3 ? 'rated' : ''} />
          <AiFillStar className={data.rating >= 4 ? 'rated' : ''} />
          <AiFillStar className={data.rating >= 5 ? 'rated' : ''} />
        </h2>
      </Section>

      <Section>
        <Brand>
          <img src={avatarUrl} alt="icone da foto de perfil" />
          <a href='/profile'>Por {user.name}</a>
        </Brand>

        <Time>
          <AiOutlineClockCircle/>
          <p>{data.created_at}</p> 
        </Time>
      </Section>

      {data.tags && 
        <Tags>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
        </Tags>
      }

      <Content>
        <p>{data.description}</p>
      </Content>
      
    </Container>
  )
}
