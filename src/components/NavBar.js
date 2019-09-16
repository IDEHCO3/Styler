import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// icons
import ArchiveIcon from '@material-ui/icons/Archive';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// Content Center
import Home from './Home'
import FontTable from './Fonts'
import StylesTable from './Styles'
import SvgTable from './Svg'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [ open, setOpen ] = React.useState(false);
  const [ navIndex, setNavIndex ] = React.useState(0)
	const DrawerList = {
		styles: [{ title: 'Ccar', icon: 'archive', index: 1 }],
		icons: [
			{ title: 'Fontes', icon: 'format_color_text', index: 2},
			{ title: 'OSM', icon: 'location_on', index: 3}
		]
  }

  function iconSelector(iconName) {
    if ( iconName === 'archive' ){
      return <ArchiveIcon/>
    } else if ( iconName === 'format_color_text' ) {
      return <TextFormatIcon/>
    } else if ( iconName === 'location_on' ){
      return <LocationOnIcon/>
    }
    return null
  }

  function contentSelector(){
    if (navIndex === 0){
      return <Home />
    } else if (navIndex === 1){
      return <StylesTable />
    } else if (navIndex === 2){
      return <FontTable />
    } else if (navIndex === 3){
      return <SvgTable />
    }
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Styler 2.0
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            Estilos
            {DrawerList.styles.map((item, index) => (
							<ListItem button key={index} onClick={()=>setNavIndex(item.index)}>
                {iconSelector(item.icon)}
                <ListItemText primary={item.title} />
							</ListItem>
            ))}
        </List>
        <Divider />
				<List>
            Icones
            {DrawerList.icons.map((item, index) => (
							<ListItem button key={index} onClick={()=>setNavIndex(item.index)}>
                {iconSelector(item.icon)}
                <ListItemText primary={item.title} />
							</ListItem>
            ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {contentSelector()}
         
      </main>
    </div>
  );
}