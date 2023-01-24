import { Container, Tags } from './styles'

import { AiFillStar } from 'react-icons/ai'

import { Tag } from '../Tag'

export function MovieDetails({ data, ...rest }) {
  return (
    <Container>
      <h1>{data.title}</h1>

      <h2>
        <AiFillStar className={data.stars >= 1 ? 'rated' : ''} />
        <AiFillStar className={data.stars >= 2 ? 'rated' : ''} />
        <AiFillStar className={data.stars >= 3 ? 'rated' : ''} />
        <AiFillStar className={data.stars >= 4 ? 'rated' : ''} />
        <AiFillStar className={data.stars >= 5 ? 'rated' : ''} />
      </h2>

      <p>{data.description}</p>

      {data.tags &&
        <Tags>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
        </Tags>}

    </Container>
  )
}
