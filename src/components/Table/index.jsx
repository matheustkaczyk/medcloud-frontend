import { Paper, TableContainer, TableHead, TableRow, TableBody, TableCell } from "@mui/material";
import Table from '@mui/material/Table';

const TableComponent = ({ columns }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map((columnName) => (
                <TableCell key={columnName} align="center" sx={{ backgroundColor: "lightgrey", color: "black", fontWeight: "400", borderRight: "solid white 1px" }}>
                  {columnName}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}

export default TableComponent;
