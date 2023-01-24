import { Container, Tags, Section, Brand, Content, Time } from './styles'

import { AiFillStar, AiOutlineClockCircle } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import { Tag } from '../Tag'

export function MovieOverview({ data, icon: Icon , ...rest}) {
  return (
    <Container {...rest}>
      <Section >
        <h1>{data.title}</h1>

        <h2>
          <AiFillStar className={data.stars >= 1 ? 'rated' : ''} />
          <AiFillStar className={data.stars >= 2 ? 'rated' : ''} />
          <AiFillStar className={data.stars >= 3 ? 'rated' : ''} />
          <AiFillStar className={data.stars >= 4 ? 'rated' : ''} />
          <AiFillStar className={data.stars >= 5 ? 'rated' : ''} />
        </h2>
      </Section>

      <Section>
        <Brand>
          <img src="https://github.com/FabioLuizz.png" alt="icone da foto de perfil" />
          <a href='/profile'>Por {data.username}</a>
        </Brand>

        <Time>
          <AiOutlineClockCircle/>
          <p>{data.created_at}</p> 
        </Time>
      </Section>

      {data.tags && 
        <Tags>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
        </Tags>
      }

      <Content>
        <p>{data.description}</p>
      </Content>
      
    </Container>
  )
}
