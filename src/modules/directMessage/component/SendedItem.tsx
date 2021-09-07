import { DirectMessageType } from '@/common/types/directMessage.type';
import React from 'react';

interface SendItemProps {
  message: DirectMessageType;
}

const SendedItem = ({ message }: SendItemProps) => {
  return <div>{message.messageContent}</div>;
};

export default SendedItem;
