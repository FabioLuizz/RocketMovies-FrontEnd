import { Container } from './styles'

export function TextArea({value, className, ...rest}) {
  return (
    <Container {...rest} className={className}>
    </Container>
  )
}