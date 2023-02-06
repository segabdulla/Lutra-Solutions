
import React, {useState, useEffect} from 'react'
import { Box, Image, Text } from '@mantine/core';
import axios from 'axios';
import { getToken } from '../../utils/AuthService';

import Loading from '../Loading/Loading';

const url = process.env.REACT_APP_APP_API_BACKEND_SERVER;

const AuthImage = ({src}) => {
    const token = getToken();
    const [base64, setBase64] = useState(null);
    const [error, setError] = useState(null);
    const fetchImae = (imageUrl) => {
        const imageUri = `${url}/${imageUrl}`
        axios.get(imageUri,{
            responseType: 'arraybuffer',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
          const result = `data:${
            response.headers["content-type"]
          };base64,${Buffer.from(response.data, "binary").toString("base64")}`;
            setBase64(result);
        })
        .catch(ex => {
          setError(ex);
        });
    }
    useEffect(() => {
        fetchImae(src);
        const timeoutId = setTimeout(() => 3000);
        return function cleanup() {
            clearTimeout(timeoutId);
        };
    }, [src])
 
  if(!base64){
    return(
      <Box
      sx={() => ({
        position: 'relative',
        width: 80,
        minHeight: 80,
        height: 80
      })}
    >
      <Loading />
    </Box>
    );
  }

  if(error){
    return(
      <Box
      sx={() => ({
        position: 'relative',
        width: 80,
        minHeight: 80,
        height: 80
      })}
    >
      <Text>Error</Text>
    </Box>
    );
  }

  return (
    <Box>
         <a href={base64} target="_blank" rel="noreferrer">
            <Image
              src={base64}
              alt="Avatar Thumb"
              sx={(_) => ({
                height: '80px',
                width: '80px',
                overflow: 'hidden',
                'img': {
                  height: '100px!important',
                  width: '100px !important',
                  maxWidth: '100%',
                  objectFit: 'fill !important'
                }
              })}
            />
          </a>
    </Box>
  );
}

export default AuthImage