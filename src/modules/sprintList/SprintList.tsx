import { dummySprint } from '@/common/utils/dummy';
import React from 'react';
import SprintElement from './components/SprintElement';

const SprintList = () => {
  return dummySprint.map((sprint) => <SprintElement sprint={...sprint} />);
};

export default SprintList;
