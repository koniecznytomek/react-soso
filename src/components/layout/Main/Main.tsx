import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { INode } from '../../../types';

const Main = ({ children }: INode) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
