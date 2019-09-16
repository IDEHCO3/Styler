import { api, transformEntryPointInArray } from '../../services/api';
import ViewSvg from './viewSvg'

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

//icons
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';
import Avatar from '@material-ui/core/Avatar';

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));

// Inicio da paginação da table
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// End of table pagination

const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [svgList, setSvgList] = React.useState([]);

  const [isOpen, setIsOpen] = React.useState(false);
  const [clickedSvg, setClickedSvg] = React.useState({})

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, svgList.length - page * rowsPerPage);

  React.useEffect(() => {
    getListFromApi()
  }, []) // eslint-disable-line 
  // the [] makes the effect run only once

  function handleOpenViewSvg(font) {
    setClickedSvg(font)
    setIsOpen(true);
  }

  function handleCloseViewSvg() {
    setIsOpen(false);
  }

  async function getListFromApi () {
    var response = {}
    try{
      response = await api.get("/osm/svgs")
    } catch (error){
      console.log(error)
    }
    
    let parsedResponse = transformEntryPointInArray(response.data)
    setSvgList(parsedResponse)
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
                <TableCell>Miniatura </TableCell>
              <TableCell>Nome do Svg </TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {svgList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map( (item , index) => (
              <TableRow key={index}>
                <TableCell>
                    <Avatar src={item.url} className={classes.avatar} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right"> 
                    <IconButton color="primary" onClick={() => handleOpenViewSvg(item)}> 
                        <VisibilityIcon/>
                    </IconButton>
                    <IconButton variant="outlined" color="primary" href={item.url} target="blank" title="Nova aba">
                        <OpenInNewIcon/>
                    </IconButton> 
                    <IconButton disabled> 
                        <GetAppIcon/>
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={svgList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <ViewSvg open={isOpen} close={handleCloseViewSvg} item={clickedSvg} />
    </Paper>
  );
}