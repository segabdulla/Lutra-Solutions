import React, { useState } from 'react';
import { Box, Button, Group, Text } from '@mantine/core';
import ImageUploading from 'react-images-uploading';
import { Photo } from 'tabler-icons-react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <Box>
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          // write your building UI
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              margin: '0 0 50px 0',
            }}
            className="upload__image-wrapper"
          >
            <Group
              onClick={onImageUpload}
              {...dragProps}
              position="center"
              spacing="xl"
              style={{
                minHeight: 140,
                cursor: 'pointer',
              }}
            >
              <Photo style={{ color: '#bac3cb' }} size={80} />
              <div>
                <Text size="xl" inline>
                  Drag image here or click to select file
                </Text>
                <Text size="sm" color="dimmed" inline mt={7}>
                  Attached file should not exceed 5mb
                </Text>
              </div>
            </Group>
            &nbsp;
            {/* <Button style={{maxWidth: 250, margin: '0 auto'}} variant="outline" onClick={onImageRemoveAll}>Remove all images</Button> */}
            {imageList.map((image, index) => (
              <Box
                style={{ margin: '30px auto 0 auto', display: 'flex', flexDirection: 'column' }}
                key={image?.data_url}
                className="image-item"
              >
                <img style={{ margin: '0 auto' }} src={image?.data_url} alt="" width="200" />
                <Box className="image-item__btn-wrapper">
                  <Button style={{ margin: '15px' }} variant="outline" onClick={() => onImageUpdate(index)}>
                    Update
                  </Button>
                  <Button style={{ margin: '15px' }} variant="outline" onClick={() => onImageRemove(index)}>
                    Remove
                  </Button>
                </Box>
              </Box> 
            ))}
          </Box>
        )}
      </ImageUploading>
    </Box>
  );
};

export default ImageUploader;
