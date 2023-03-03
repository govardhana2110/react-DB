import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
// import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

import Typography from '@mui/core/Typography';

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: '#3f4247',
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: '#3f4247',
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label':
      {
        backgroundColor: '#3f4247',
      },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: '#3f4247',
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
      backgroundColor: '#3f4247',
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
      backgroundColor: '#3f4247',
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
    backgroundColor: '#3f4247',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'left',
    paddingTop: '10px',
    marginLeft: '-15px',
    backgroundColor: '#3f4247',
  },
  labelIcon: {
    // marginRight: theme.spacing(1),
    backgroundColor: '#3f4247',
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(0.5),
    paddingTop: '2px',
    paddingRight: '10px',
    color: 'white',
    fontSize: 15,
    backgroundColor: '#3f4247',
  },
  title: {
    marginRight: 'auto',
    color: 'white',
    fontSize: 13,
    paddingBottom: 5,
    backgroundColor: '#3f4247',
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.icon} />
          <Typography variant="body2" noWrap className={classes.title}>
            {labelText}
          </Typography>
        </div>
      }
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default StyledTreeItem;
