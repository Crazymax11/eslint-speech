import React, { ReactNode } from 'react';

// props!
interface Props {
  // right
  hasBool: boolean;
  isBool: boolean;
  renderHeader(a: any): ReactNode;
  headerSlot: ReactNode;

  // wrong
  bool: boolean;
  header(a: any): ReactNode;
  footer: ReactNode;
}

// другой интерфейс, в нем не должно быть ошибок
interface Another {
  header(a: any): ReactNode;
}

// крутая рендер функция
export default (props: Props) => {
  return <div></div>;
};
