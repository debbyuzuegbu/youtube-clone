import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './'

const ChannelDetail = () => {
  const { id } = useParams();

  useEffect (() => {

  }, [id])
  return (
    <div>{id}</div>
  )
}

export default ChannelDetail