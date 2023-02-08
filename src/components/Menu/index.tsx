import { useState } from 'react';

import { IExecutionMode, IFlashCard } from '../../pages/Memorization';
import { ButtonMenu } from '../ButtonMenu';
import * as Styles from './styles';

type IEditMenu = 'Editar' | 'Salvar';
type IExamMenu = 'Testar' | 'Revisar' | 'Finalizar';
type IMenu = {
  edit: boolean;
  setEdit: (value: boolean) => void;
  executionMode: IExecutionMode;
  setExecutionMode: (value: IExecutionMode) => void;
  value: IFlashCard[];
  setValue: (value: IFlashCard[]) => void;
};

export const Menu = ({
  edit,
  setEdit,
  executionMode,
  setExecutionMode,
  value,
  setValue,
}: IMenu) => {
  const [editMenu, setEditMenu] = useState<IEditMenu>('Editar');
  const [examMenu, setExamMenu] = useState<IExamMenu>('Testar');

  const clearExamResults = () => {
    const newArrayValues = [...value];
    newArrayValues.map((card) => {
      card.changedHit = false;
      card.hit = 'empty';
    });
    setValue(newArrayValues);
  };

  const handleEdit = () => {
    setEditMenu(editMenu === 'Salvar' ? 'Editar' : 'Salvar');
    setEdit(!edit);
  };

  const handleExam = () => {
    if (examMenu === 'Testar' && executionMode === 'modeExamDisabled') {
      setExamMenu('Revisar');
      return setExecutionMode('modeExamEnabled');
    }
    if (examMenu === 'Revisar' && executionMode === 'modeRevisionDisabled') {
      setExamMenu('Finalizar');
      return setExecutionMode('modeRevisionEnabled');
    }
    if (examMenu === 'Finalizar' && executionMode === 'modeRevisionEnabled') {
      clearExamResults();
      setExamMenu('Testar');
      return setExecutionMode('modeExamDisabled');
    }
  };

  return (
    <Styles.Container>
      <ButtonMenu
        onPressOut={() => console.log('Verificando bancos de questões')}
        text="Bancos"
      />
      <ButtonMenu
        onPressOut={handleEdit}
        opacity={executionMode === 'modeExamEnabled' ? 1 : 0.7}
        text={editMenu}
        disable={executionMode === 'modeExamEnabled'}
      />
      <ButtonMenu
        onPressOut={handleExam}
        opacity={
          executionMode === 'modeEditionEnabled' ||
          executionMode === 'modeExamEnabled'
            ? 1
            : 0.7
        }
        text={examMenu}
        disable={
          executionMode === 'modeEditionEnabled' ||
          executionMode === 'modeExamEnabled'
        }
      />
    </Styles.Container>
  );
};
