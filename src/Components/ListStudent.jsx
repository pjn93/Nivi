import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(Roll_No, Name, Class, Age, Marks) {
  return { Roll_No, Name, Class, Age, Marks };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt1", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwic1h", 11, 9.0, 37, 4.3),
  createData("Eclair1", 262, 16.0, 24, 6.0),
  createData("Cupcake1", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  //////////////////////search//////////////////

 

  ///////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(rows.length / itemsPerPage);

  //////////////////////////////////////////////
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, rows.length - 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const studentsDisplay = rows.slice(startIndex, endIndex + 1);

  /////////////////////////////////////////////////

  const [filterStd, setFilterstd] = useState([]);

  function handleFilter(event) {
    const searchData = rows.filter((student) => {
      return student.Name.toLowerCase().includes(
        event.target.value.toLowerCase()
      );
    });
    setFilterstd(searchData);
  }

  return (
    <>
      <div style={{marginLeft:"650px"}}>
        <input type="text" onChange={handleFilter} />
      </div>
      <div style={{ margin: "20px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Roll no.</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Class</StyledTableCell>
                <StyledTableCell align="right">Age</StyledTableCell>
                <StyledTableCell align="right">Marks</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsDisplay.map((rows) => {
                return (
                  <>
                    <StyledTableRow key={rows.Roll_No}>
                      <StyledTableCell component="th" scope="row">
                        {rows.Roll_No}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {rows.Name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {rows.Class}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {rows.Age}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {rows.Marks}
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
