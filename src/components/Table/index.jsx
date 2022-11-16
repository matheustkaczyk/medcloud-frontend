import { Paper, TableContainer, TableHead, TableRow, TableBody, TableCell } from "@mui/material";
import Table from '@mui/material/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableComponent = ({ columns, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map((columnName, index) => (
                <TableCell key={(columnName + index)} align="center" sx={{ backgroundColor: "lightgrey", color: "black", fontWeight: "550", borderRight: "solid white 1px" }}>
                  {columnName}
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center" sx={{ fontWeight: "bolder" }}>{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center" sx={{ cursor: "pointer", color: "orange" }}><EditIcon /></TableCell>
                <TableCell align="center" sx={{ cursor: "pointer", color: "red" }}><DeleteIcon /></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent;
