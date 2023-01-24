import { Container } from './styles'

export function Button({ title, icon: Icon, isNew, ...rest }) {
  return (
    <Container type="button" isNew={isNew} {...rest}>
      {Icon && <Icon size={16}/>}
      {title}
    </Container>
  )
}
