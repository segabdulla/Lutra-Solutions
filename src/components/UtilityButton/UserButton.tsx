import { forwardRef } from 'react';
import { ChevronDown } from 'tabler-icons-react';
import { Group, Box, Avatar, Text, UnstyledButton } from '@mantine/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name,  ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      {...others}                
    >          
      <Group
       sx={(theme) => ({
        background: theme.colorScheme === "light" ? theme.colors.brand[2] : theme.colors.dark[8],
        padding: '0 10px',
        borderRadius: 20,
        '@media (max-width: 980px)': {
          padding: 0
        }
      })}
      >
        <Avatar src={image} radius="xl" />

        <Box sx={() => ({
          '@media (max-width: 980px)': {
            display: 'none'
          }  
        })}>
          <Text size="sm" weight={500}>
            {name}
          </Text>
        </Box>
        <Box sx={() => ({
          '@media (max-width: 980px)': {
            display: 'none'
          }
        })}>
            <ChevronDown size={16} />
        </Box>
        

      </Group>
    </UnstyledButton>
  )
)

export default UserButton