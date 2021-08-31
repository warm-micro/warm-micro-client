import { useRouter } from 'next/dist/client/router';
import React from 'react';

const index = () => {
  const {  query  } = useRouter();
  return <div>welcome to {query.workspace} </div>;
};

export default index;
