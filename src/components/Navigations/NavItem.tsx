import React, {FC} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeIcon, UnstyledButton, Group, Text, Accordion } from '@mantine/core';
import {
  BuildingHospital,
  User,
  Gift,
  Photo,
  Backpack,
  PlayerPlay,
  FileText,
  Logout,
  HeartHandshake,
  Palette,
  BuildingBank,
  ReceiptRefund,
  TruckReturn,
  Bucket,
  Wallet,
  Note,
  Users,
  ReportSearch,
  Mailbox,
  BuildingWarehouse,
  History,
  Stack,
  ThreeDCubeSphere,
  Stethoscope,
  Cards,
  Settings,
  ChartDots,
  Notification,
  LayoutDashboard,
  ClipboardList,
  TruckDelivery,
  MapPin
} from 'tabler-icons-react';

import { StorefrontOutline, BusOutline } from 'react-ionicons'

import PropTypes from 'prop-types';

// Utility-Service
import { removeUserSession, getUser } from '../../utils/AuthService';

interface NavItemProps {
  icon: React.ReactElement;
  label: string;
  pageLink: string;
  key?: string;
  state?: Object;
  isOnclick?: boolean;
  onClick?: () => void;
}

const MainLink:FC<NavItemProps> = ({ icon, label, pageLink, state={}, isOnclick = false }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleLogot = () => {
    removeUserSession();
    navigate('/home'); 
  };
 
  return (
    <Link style={{ textDecoration: 'none' }} state={state} to={pageLink} onClick={isOnclick ? handleLogot : undefined}>
      <UnstyledButton
        sx={(theme) => {
          if (theme.colorScheme !== 'dark') {  
            return {
              display: 'block',  
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color: pageLink === pathname ? theme.colors.brand[5] :  theme.colors.brand[3],
              "span svg": {
                color: pageLink === pathname ? theme.colors.brand[5] :  theme.colors.brand[3],
              },
              '&:hover': {
                color: theme.colors.brand[5],
                "svg": {
                  color:  theme.colors.brand[5], 
                },
                ".mantine-ThemeIcon-root":{
                  color: theme.colors.brand[5],
                  background: "#ECF3FF"
                }
              }, 
            };
          }
          return {
            display: 'block',
            width: '100%',
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color: '#FFFFFF',
            backgroundColor: pageLink === pathname ? theme.colors.brand[5] : '',
            '&:hover': {
              backgroundColor: theme.colors.brand[5],
              color: '#FFFFFF',
            },
          };
        }}
      >
        <Group>
          <ThemeIcon radius="xl" size="xl" sx={(theme) => ({
            background: pageLink === pathname ? "#ECF3FF" : 'none',
            color: pageLink === pathname ? theme.colors.brand[5] :  theme.colors.brand[3],
            svg:{
              width: 22,
              height: 22,
            },
          })}>{icon}</ThemeIcon>
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
};

MainLink.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired
};

const data = [ 
  { icon: <LayoutDashboard size={16} />, label: 'Statistics', pageLink: '/' },
  { icon: <ClipboardList size={16} />, label: 'Appliances', pageLink: '/appliances' },
  { icon: <TruckDelivery size={16} />, label: 'Shipment', pageLink: '/shipment' },
  { icon: <MapPin size={16} />, label: 'Trips', pageLink: '/trips' }
];

const NavItems = () => {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  const user = getUser();
  const navigate = useNavigate();
  const handleLogot = () => {
    removeUserSession();
    navigate('/home');
  };
  
  return (
    <div>
      {user?.userType === 'Admin' && (
        <>
          {links}
        {/* <MainLink 
          label='Wallet Topup' 
          pageLink="/wallet-topup"  
          icon = {<Wallet size={16} />}
        /> */}
        <Text style={{
          fontSize: 18,
          fontWeight: 500,
          color: "#2D363A",
          padding: 10
        }}>
          Management
        </Text>
        <MainLink 
          label='Merchant' 
          pageLink="/merchant"  
          icon = {<StorefrontOutline
            height="25px"
            width="25px"
          />}
        />
        </>
      )}
      <MainLink label="Logout" pageLink="/home" icon={<Logout size={16} />} onClick={handleLogot} isOnclick />
    </div>
  );
};

export default NavItems;
