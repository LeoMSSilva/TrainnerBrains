import React, {useState} from 'react';
import * as Styled from './styles';

const Menu = ({
  edit,
  setEdit,
  setTest,
  setRevision,
  enableButtonTest,
  setEnableButtonTest,
  enableButtonRevision,
  setEnableButtonRevision,
  setHits,
}) => {
  const [text2, setText2] = useState('Editar');
  const [text3, setText3] = useState('Testar');

  const handleEdit = () => {
    setText2(text2 == 'Salvar' ? 'Editar' : 'Salvar');
    setEdit(!edit);
  };

  const handleTest = () => {
    setTest(true);
    setRevision(false);
    setText3('Revisar');
    setEnableButtonTest(false);
    const clean = Array(10).fill(undefined);
    setHits(clean);
  };

  const handleRevision = () => {
    setRevision(true);
    setText3('Testar');
    setEnableButtonRevision(false);
    setEnableButtonTest(true);
  };

  const handleClick = () => {
    if (text3 == 'Testar') handleTest();
    else handleRevision();
  };
  
  return (
    <Styled.Container>
      <Styled.Button>
        <Styled.Text>Bancos</Styled.Text>
      </Styled.Button>
      <Styled.Button onPress={handleEdit}>
        <Styled.Text>{text2}</Styled.Text>
      </Styled.Button>
      {enableButtonTest || enableButtonRevision ? (
        <Styled.Button activeOpacity={0.7} onPress={handleClick}>
          <Styled.Text disable={false}>{text3}</Styled.Text>
        </Styled.Button>
      ) : (
        <Styled.Button activeOpacity={1} onPress={() => {}}>
          <Styled.Text disable={true}>{text3}</Styled.Text>
        </Styled.Button>
      )}
    </Styled.Container>
  );
};

export default Menu;
