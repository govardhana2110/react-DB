import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export const menuItems = () => {
  const menuItem = [
    {
      label: 'Inventory',
      icon: <Inventory2OutlinedIcon />,
    },
    {
      label: 'Configurations',
      icon: <SettingsOutlinedIcon />,
    },
    {
      label: 'GLID',
      icon: <TagOutlinedIcon />,
    },
    {
      label: 'Provisioning',
      icon: <AppRegistrationOutlinedIcon />,
    },
    {
      label: 'Pricing',
      icon: <AttachMoneyOutlinedIcon />,
    },
    {
      label: 'Products',
      icon: <CategoryOutlinedIcon />,
    },
    {
      label: 'Rate Plan',
      icon: <TrendingUpOutlinedIcon />,
    },
    {
      label: 'Plans',
      icon: <ListAltOutlinedIcon />,
    },
    {
      label: 'Events',
      icon: <CalendarMonthOutlinedIcon />,
    },
  ];
  return [...menuItem];
};
