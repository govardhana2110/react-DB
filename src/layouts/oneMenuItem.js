import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles((theme) => ({
  active: {
    color: '#1976D2',
    fontWeight: 'bold',
  },
}));
export default function OneMenuItem({ menuItem, menuOpen, openMenu }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const router = useRouter();
  const classes = useStyles();
  const handleToggle = () => {
    openMenu();
    if (menuItem.submenu && menuItem.submenu.length > 0)
      setOpen((prevOpen) => !prevOpen);
    else router.replace(menuItem.pathName);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleRedirect = (event, submenuItem) => {
    router.replace(submenuItem.pathName);
    handleClose(event);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row">
      <div>
        <ListItem
          key={menuItem.label}
          disablePadding
          sx={{
            display: 'block',
            width: '100%',
          }}
          className={`${
            router.pathname === menuItem.pathName ? classes.active : ''
          }`}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 3 : 'auto',
                justifyContent: 'center',
                // color: `${router.pathname === menu.name ? '#1976D2' : ''}`,
              }}
              className={`${
                router.pathname === menuItem.pathName ? classes.active : ''
              }`}
            >
              {router.pathname === menuItem.pathName
                ? menuItem.activeIcon
                : menuItem.icon}
            </ListItemIcon>
            <ListItemText
              primary={menuItem.label}
              sx={{ opacity: menuOpen ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
        {/* <Button>{menuItem.label}</Button> */}
        {/* <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="auto-end"
          transition
          disablePortal
          style={{
            zIndex: '999',
          }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: 'bottom right',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {menuItem.submenu &&
                      menuItem.submenu.length > 0 &&
                      menuItem.submenu.map((submenuItem) => (
                        <MenuItem
                          onClick={(e) => handleRedirect(e, submenuItem)}
                        >
                          {submenuItem.name}
                        </MenuItem>
                      ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper> */}
      </div>
    </Stack>
  );
}
