import { DirectMessageType } from '@/common/types/directMessage.type';
import React from 'react';

interface ReceivedItemProps {
  message: DirectMessageType;
}
const ReceivedItem = ({ message }: ReceivedItemProps) => {
  return <div>{message?.messageContent}</div>;
};

export default ReceivedItem;
