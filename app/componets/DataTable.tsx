"use client";
import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PatientRow from "../componets/PatientRow";

interface item {
  patient_id: number;
  name: string;
  age: number;
  medical: string;
  add: string;
  phone: number;
  email: string;
}

export default function BasicTable() {
  const [rows, setRows] = useState<item[]>([]);

  console.log(rows);

  let [num, setNum] = useState(1);

  console.log(num);

  useEffect(() => {
    fetch(`/api/data?page=${num}`)
      .then((res) => res.json())
      .then((data) => setRows(data.data));
  }, [num]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Medical issue</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email Id</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <PatientRow key={row.patient_id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-center items-center gap-2 mt-2">
        <button
          onClick={() => setNum(num > 1 ? num - 1 : 1)}
          className="px-4 py-2 cursor-pointer active:scale-95 transition bg-[#3B82f6] rounded">
          Prev
        </button>
        <span>Page:{num}</span>
        <button
          onClick={() => setNum(num + 1)}
          className="px-4 py-2 bg-[#3B82f6] rounded active:scale-95 transition">
          Next
        </button>
      </div>

      <div className="text-center text-red-400">
        Hi, I wanted to inform you that I was unable to complete the project
        within the given time. I apologize for the inconvenience. <br /> I will
        try to complete it as soon as possible. Thank you for your
        understanding.
      </div>
    </>
  );
}
