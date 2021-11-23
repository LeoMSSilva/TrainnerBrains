import React, {useState} from 'react';
import * as Styled from './styles';

const Menu = ({edit, setEdit, test, setTest, revision, setRevision}) => {
  const [text2, setText2] = useState('Editar');
  const [text3, setText3] = useState('Testar');
  const handleEdit = () => {
    setText2(text2 == 'Salvar' ? 'Editar' : 'Salvar');
    setEdit(!edit);
  };
  const handleTest = () => {
    if (test) {
      setTest(false);
      setText3('Finalizar');
    } else if (revision) {
      setRevision(false);
      setText3('Testar');
    }
  };
  // console.log('menu test ' + test);
  // console.log('menu revision ' + revision);
  return (
    <Styled.Container>
      <Styled.Button>
        <Styled.Text>Bancos</Styled.Text>
      </Styled.Button>
      <Styled.Button onPress={handleEdit}>
        <Styled.Text>{text2}</Styled.Text>
      </Styled.Button>
      {test || revision ? (
        <Styled.Button activeOpacity={0.7} onPress={handleTest}>
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
