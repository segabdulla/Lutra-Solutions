import {FC} from 'react'
import { Tabs, TabsProps } from '@mantine/core';


const StyledTabs:FC<TabsProps> = (props: TabsProps) => {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : "#ECF3FF",
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : "#6E767A",
          border: 'none',
          padding: `15px 15px`,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          borderRadius: "20px 20px 0 0",
          fontSize: 16,
          lineHeight: '16px',
          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
          },

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&[data-active]': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.white : "#FFFFFF" ,
            color: "#2D363A",
            "span":{
                background: "#425EBE",
                color: "#FFFFFF",
            }
          },
          ".mantine-Tabs-tabLabel": {
            display: "flex",
            gap: 10,
            alignItems: "center",
          },
          "span":{
            background: "#9CC2F6",
            width: 50,
            height: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#2D363A",
            borderRadius: 20,
            fontSize: 13,
            lineHeight: 0
            }
        },

        tabsList: {
          display: 'flex',
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center"
        },
      })}
      {...props}
    />
  );
}

export default StyledTabs;