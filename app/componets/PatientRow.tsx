import { TableRow, TableCell } from "@mui/material";

interface Patient {
  patient_id: number;
  patient_name: string;
  age: number;
  photo_url: string;
  medical_issue: string;

  contact: [{ address: string; number: number; email: string }];
}

export default function PatientRow({ row }: { row: Patient }) {
  const {
    patient_id,
    patient_name,
    age,
    photo_url,
    medical_issue,
    contact: [{ address, email, number }],
  } = row;

  return (
    <TableRow key={patient_id}>
      <TableCell>{patient_id}</TableCell>

      <TableCell>
        {/* <img src={photo_url} width={10} /> */}
        {patient_name}
      </TableCell>

      <TableCell>{age}</TableCell>

      <TableCell>{medical_issue}</TableCell>
      <TableCell>{address ? address : "N/A"}</TableCell>
      <TableCell>{number ? number : "N/A"}</TableCell>
      <TableCell>{email ? email : "N/A"}</TableCell>

      {/* <TableCell>{contact}</TableCell> */}
    </TableRow>
  );
}
