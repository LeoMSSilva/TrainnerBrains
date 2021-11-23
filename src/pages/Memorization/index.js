import React, {useEffect, useState} from 'react';
import ButtonGoBack from '../../components/ButtonGoBack';
import Title from '../../components/Title';
import Menu from '../../components/Menu';
import * as Styled from './styles';

const Memorization = () => {
  const [edit, setEdit] = useState(true);
  const [test, setTest] = useState(false);
  const [revision, setRevision] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTest(true);
  //     setTimeout(() => {
  //       setRevision(true);
  //     }, 5000);
  //   }, 5000);
  // }, []);
  return (
    <Styled.Container>
      <Styled.Row>
        <ButtonGoBack />
        <Title text="MemorizationTrainner" />
      </Styled.Row>
      <Menu
        edit={edit}
        setEdit={setEdit}
        test={test}
        setTest={setTest}
        revision={revision}
        setRevision={setRevision}
      />
    </Styled.Container>
  );
};

export default Memorization;
