import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TreeView from '@mui/lab/TreeView';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import CloudIcon from '@mui/icons-material/Cloud';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { makeStyles } from '@mui/styles';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
// import StyledTreeItem from './navBar/StyledTreeItem';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import CategoryIcon from '@mui/icons-material/Category';
import PollIcon from '@mui/icons-material/Poll';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import BallotIcon from '@mui/icons-material/Ballot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import OneMenuItem from './oneMenuItem';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 254,
  },

  desktopDrawer: {
    width: 190,
    top: 60,
    paddingTop: 15,
    height: 'calc(100% - 15px)',

    backgroundColor: '#3f4247',
  },
  copyRightTypo: {
    // fontWeight: "bold",
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    paddingRight: 10,
    paddingBottom: 40,
    // height : "100%",
    marginTop: '120%',
    justifyContent: 'flex-end',
    position: 'relative',
  },
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const router = useRouter();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const classes = useStyles();
  const menuItem = [
    {
      label: 'Reset Time',
      pathName: '/resetTime',
      icon: <AccessTimeIcon />,
      activeIcon: <AccessTimeFilledIcon />,
    },
    {
      label: 'Billing',
      icon: <MonetizationOnOutlinedIcon />,
      activeIcon: <MonetizationOnIcon />,
      pathName: '/Billing',
    },
    {
      label: 'Rating',
      icon: <PriceChangeOutlinedIcon />,
      activeIcon: <PriceChangeIcon />,
      pathName: '/Rating',
    },
    {
      label: 'Collection',
      pathName: '/Collection',
      icon: <CategoryOutlinedIcon />,
      activeIcon: <CategoryIcon />,
    },
    {
      label: 'Balances',
      icon: <AccountBalanceWalletOutlinedIcon />,
      activeIcon: <AccountBalanceWalletIcon />,
      pathName: '/Balances',
    },
    // {
    //   label: 'Pricing',
    //   icon: <RequestQuoteOutlinedIcon />,
    //   activeIcon: <RequestQuoteIcon />,
    // },

    // {
    //   label: 'Rate Plan',
    //   icon: <PollOutlinedIcon />,
    //   activeIcon: <PollIcon />,
    // },
    // {
    //   label: 'Plans',
    //   icon: <BallotOutlinedIcon />,
    //   activeIcon: <BallotIcon />,
    // },
    // {
    //   label: 'Events',
    //   icon: <CalendarMonthOutlinedIcon />,
    //   activeIcon: <CalendarMonthIcon />,
    // },
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            BRM Simulator
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItem.map((menu, index) => (
            <OneMenuItem
              menuItem={menu}
              key={index}
              menuOpen={open}
              openMenu={handleDrawerOpen}
            />
            // <ListItem
            //   key={menu.label}
            //   disablePadding
            //   sx={{
            //     display: 'block',
            //   }}
            //   className={`${
            //     router.pathname === menu.name ? classes.active : ''
            //   }`}
            // >
            //   <ListItemButton
            //     sx={{
            //       minHeight: 48,
            //       justifyContent: open ? 'initial' : 'center',
            //       px: 2.5,
            //     }}
            //   >
            //     <ListItemIcon
            //       sx={{
            //         minWidth: 0,
            //         mr: open ? 3 : 'auto',
            //         justifyContent: 'center',
            //         // color: `${router.pathname === menu.name ? '#1976D2' : ''}`,
            //       }}
            //       className={`${
            //         router.pathname === menu.name ? classes.active : ''
            //       }`}
            //     >
            //       {router.pathname === menu.name ? menu.activeIcon : menu.icon}
            //     </ListItemIcon>
            //     <ListItemText
            //       primary={menu.label}
            //       sx={{ opacity: open ? 1 : 0 }}
            //     />
            //   </ListItemButton>
            // </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Profile', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? (
                    <PermIdentityOutlinedIcon />
                  ) : (
                    <PowerSettingsNewOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
