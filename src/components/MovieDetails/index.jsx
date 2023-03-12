import { Container, Tags } from './styles'

import { AiFillStar } from 'react-icons/ai'

import { Tag } from '../Tag'

export function MovieDetails({ data, onClick, ...rest}) {
  return (
    <Container onClick={onClick} {...rest}>
      <h1>{data.title}</h1>

      <h2>
        <AiFillStar className={data.rating >= 1 ? 'rated' : ''} />
        <AiFillStar className={data.rating >= 2 ? 'rated' : ''} />
        <AiFillStar className={data.rating >= 3 ? 'rated' : ''} />
        <AiFillStar className={data.rating >= 4 ? 'rated' : ''} />
        <AiFillStar className={data.rating >= 5 ? 'rated' : ''} />
      </h2>

      <p>{data.description}</p>

      {data.tags &&
        <Tags>
          {data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)}
        </Tags>}
        
    </Container>
  )
}
