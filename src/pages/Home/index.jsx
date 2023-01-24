import { Container, Main, Section } from './styles'

import {FiPlus} from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { MovieDetails } from '../../components/MovieDetails'

export function Home() {
  return(
    <Container>
      <Header/>

      <Main>
        <header>
          <h1>Meus filmes</h1>

          <a href="/new"><Button icon={FiPlus} title='Adicionar filme'/></a> 
        </header>

        <Section>
          
          <MovieDetails data={{title: 'Interestellar', stars: "4", description: "Pragas nas colheitas fizeram a civilização humana regredir para uma Pragas nas colheitas fizeram a civilização humana regredir para uma Pragas nas colheitas fizeram a", tags:[{id: '1', name: 'Açâo'}]}} />

          <MovieDetails data={{title: 'Interestellar', stars: "4", description: "Pragas nas colheitas fizeram a civilização humana regredir para uma Pragas nas colheitas fizeram a civilização humana regredir para uma Pragas nas colheitas fizeram a", tags:[{id: '1', name: 'Comédia'}]}} />

          <MovieDetails data={{title: 'Interestellar', stars: "4", description: "Pragas nas colheitas fizeram a civilização humana regredir para uma Pragas nas colheitas fizeram a civilização humana regredir para uma Pragas nas colheitas fizeram a", tags:[{id: '1', name: 'Romance'}]}} />

          <MovieDetails data={{title: 'Interestellar', stars: "4", description: "Pragas nas colheitas fizeram a civilização humana regredir para uma Pragas nas colheitas fizeram a civilização humana regredir para uma Pragas nas colheitas fizeram a", tags:[{id: '1', name: 'Comédia'}]}} />

        </Section>


      </Main>
    </Container>
  )
}