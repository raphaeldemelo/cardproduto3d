import React, { useState } from 'react';
import fotoSofa from '../../assets/sofa.gif';
import gifSofa from '../../assets/sofa.png';
import { Container, Content, Section, Image, Text, Product, Button } from './styles';

export default function Home() {

  const [clicado, setClicado] = useState(false);

  return (
    <Container>
      <Content>
        <Section onClick={() => setClicado(true)}>
          {clicado ? <Image src={fotoSofa} /> : <Image src={gifSofa} />}
        </Section>
        <Section onClick={() => setClicado(false)}>
          <Text>CÓDIDO: 123321</Text>
          <Product>Sofá Margot II - Rosé</Product>
          <Text>R$ 4.000</Text>
          <Button>
            ADICIONAR À CESTA
          </Button>
        </Section>
      </Content>
    </Container>
  );
}