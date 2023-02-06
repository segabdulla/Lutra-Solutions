
import React from 'react'
import { LoadingOverlay, Box } from '@mantine/core';

const Loading = () => (
        <Box style={{ width: '100%', height: '100%', position: 'relative' }}>
            <LoadingOverlay visible />
        </Box>
    )

export default Loading
