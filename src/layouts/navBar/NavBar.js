import React, { useEffect } from 'react';
// import { Link, useLocation, useNavigate, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles,
  Typography,
} from '@mui/styles';
import Router from 'next/router';
import TextsmsOutlinedIcon from '@mui/icons/TextsmsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons/MailOutlineOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons/PictureAsPdfOutlined';
import NotificationsActiveIcon from '@mui/icons/NotificationsActive';
import InsertChartIcon from '@mui/icons/InsertChart';
import ForumOutlinedIcon from '@mui/icons/ForumOutlined';
import WatchLaterIcon from '@mui/icons/WatchLater';
import DraftsOutlinedIcon from '@mui/icons/DraftsOutlined';
import SettingsIcon from '@mui/icons/Settings';
import TelegramIcon from '@mui/icons/Telegram';
import SwapVerticalCircleIcon from '@mui/icons/SwapVerticalCircle';
import SettingsApplicationsIcon from '@mui/icons/SettingsApplications';
import CallToActionIcon from '@mui/icons/CallToAction';
import CloudIcon from '@mui/icons/Cloud';
import TreeView from '@mui/lab/TreeView';
import NavItem from './NavItem';

import StyledTreeItem from './StyledTreeItem';

const useStyles = makeStyles(() => ({
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

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (openMobile && onMobileClose) {
  //     onMobileClose();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      style={{ position: 'fixed', overflow: 'hidden' }}
    >
      <Box
        p={(0, 1, 0, 0)}
        height="300px"
        style={{ position: 'fixed', overflow: 'hidden' }}
      >
        <TreeView
          className={classes.root}
          defaultExpanded={['2']}
          defaultEndIcon={<div style={{ width: 24 }} />}
          sx={{ backgroundColor: '#3f4247' }}
        >
          <StyledTreeItem
            nodeId="1"
            labelText="Inventory"
            labelIcon={InsertChartIcon}
            // onLabelClick={() => Router.replace('/')}
            sx={{ backgroundColor: '#3f4247' }}
          />
          <StyledTreeItem
            nodeId="2"
            labelText="Configurations"
            labelIcon={InsertChartIcon}
            sx={{ backgroundColor: '#3f4247' }}
          >
            <StyledTreeItem
              nodeId="3"
              labelText="GLID"
              labelIcon={InsertChartIcon}
              // onLabelClick={() => Router.replace('/config/glid')}
              sx={{ backgroundColor: '#3f4247' }}
            />
          </StyledTreeItem>
          <StyledTreeItem
            nodeId="4"
            labelText="Provisioning"
            labelIcon={InsertChartIcon}
            sx={{ backgroundColor: '#3f4247' }}
          >
            <StyledTreeItem
              nodeId="5"
              labelText="Provisioning Create"
              labelIcon={InsertChartIcon}
              // onLabelClick={() => Router.replace('/provisioning/create')}
              sx={{ backgroundColor: '#3f4247' }}
            />
            <StyledTreeItem
              nodeId="6"
              labelText="Provisioning Update"
              labelIcon={InsertChartIcon}
              // onLabelClick={() => Router.replace('/provisioning/update')}
              sx={{ backgroundColor: '#3f4247' }}
            />
          </StyledTreeItem>
          <StyledTreeItem
            nodeId="7"
            labelText="Pricing"
            labelIcon={InsertChartIcon}
            sx={{ backgroundColor: '#3f4247' }}
          >
            <StyledTreeItem
              nodeId="8"
              labelText="Discounts"
              labelIcon={InsertChartIcon}
              // onLabelClick={() => Router.replace('/pricing/discount')}
              sx={{ backgroundColor: '#3f4247' }}
            />
            <StyledTreeItem
              nodeId="9"
              labelText="Bundles"
              labelIcon={InsertChartIcon}
              // onLabelClick={() => Router.replace('/pricing/bundle')}
              sx={{ backgroundColor: '#3f4247' }}
            />
            <StyledTreeItem
              nodeId="10"
              labelText="Packages"
              labelIcon={InsertChartIcon}
              // onLabelClick={() => Router.replace('/pricing/package')}
              sx={{ backgroundColor: '#3f4247' }}
            />
          </StyledTreeItem>
          <StyledTreeItem
            nodeId="1"
            labelText="Products"
            labelIcon={InsertChartIcon}
            // onLabelClick={() => Router.replace('/product')}
            sx={{ backgroundColor: '#3f4247' }}
          />
          <StyledTreeItem
            nodeId="11"
            labelText="Rate Plan"
            labelIcon={InsertChartIcon}
            // onLabelClick={() => Router.replace('/rates')}
            sx={{ backgroundColor: '#3f4247' }}
          />
          <StyledTreeItem
            nodeId="12"
            labelText="Plans"
            labelIcon={InsertChartIcon}
            // onLabelClick={() => Router.replace('/plans')}
            sx={{ backgroundColor: '#3f4247' }}
          />
          <StyledTreeItem
            nodeId="13"
            labelText="Events"
            labelIcon={InsertChartIcon}
            // onLabelClick={() => Router.replace('/events')}
            sx={{ backgroundColor: '#3f4247' }}
          />
          {/* <StyledTreeItem
            nodeId="2"
            labelText="Notifications"
            labelIcon={NotificationsActiveIcon}
          >
            <StyledTreeItem
              nodeId="4"
              labelText="Configurations"
              labelIcon={SettingsApplicationsIcon}
            >
              <StyledTreeItem
                nodeId="6"
                labelText="Templates"
                labelIcon={CallToActionIcon}
              >
                <StyledTreeItem
                  nodeId="9"
                  labelText="SMS"
                  labelIcon={TextsmsOutlinedIcon}
                  onLabelClick={() => history.push("/sms")}
                />
                <StyledTreeItem
                  nodeId="10"
                  labelText="Email"
                  labelIcon={MailOutlineOutlinedIcon}
                  onLabelClick={() => history.push("/email")}
                />
                <StyledTreeItem
                  nodeId="11"
                  labelText="PDF"
                  labelIcon={PictureAsPdfOutlinedIcon}
                  onLabelClick={() => history.push("/pdf")}
                />
                <StyledTreeItem
                  nodeId="12"
                  labelText="Push"
                  labelIcon={TelegramIcon}
                  onLabelClick={() => history.push("/push/notification")}
                />
              </StyledTreeItem>
              <StyledTreeItem
                nodeId="7"
                labelText="Gateways"
                labelIcon={CloudIcon}
              >
                <StyledTreeItem
                  nodeId="13"
                  labelText="SMS Server"
                  labelIcon={ForumOutlinedIcon}
                  onLabelClick={() => history.push("/server/sms")}
                />
                <StyledTreeItem
                  nodeId="14"
                  labelText="Email Server"
                  labelIcon={DraftsOutlinedIcon}
                  onLabelClick={() => history.push("/server/email")}
                />
              </StyledTreeItem>
              <StyledTreeItem
                nodeId="8"
                labelText="Scheduler"
                labelIcon={WatchLaterIcon}
                onLabelClick={() => history.push("/scheduler")}
              />
            </StyledTreeItem>
            <StyledTreeItem
              nodeId="5"
              labelText="Transactions"
              labelIcon={SwapVerticalCircleIcon}
              onLabelClick={() => history.push("/transaction")}
            />
          </StyledTreeItem> */}
          {/* <StyledTreeItem
            nodeId="3"
            labelText="Toggle"
            labelIcon={InsertChartIcon}
            onLabelClick={() => history.push("/transaction")}
          /> */}
        </TreeView>
      </Box>
      {/* <Typography
        align="center"
        className={classes.copyRightTypo}
        variant="body2"
      >
        {"Copyright © "}
        <div style={{ paddingTop: 10, bottom: 0 }}>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.iridium.com/"
          >
            Iridium Communications Inc. All rights reserved.
          </a>
          &nbsp;{new Date().getFullYear()}
        </div>
      </Typography> */}
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
