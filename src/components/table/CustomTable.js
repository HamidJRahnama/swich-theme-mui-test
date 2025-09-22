
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useThemeStore from "../../store/useThemeStore";

const rows = [
  { id: 1, name: "Users 1", email: "user1@example.com", role: "Admin" },
  { id: 2, name: "Users 2", email: "user2@example.com", role: "Editor" },
  { id: 3, name: "Users 3", email: "user3@example.com", role: "Viewer" },
];

const CustomTable = () => {
    const tableColors = useThemeStore((state) => state.components.table);


  const handleEdit = (id) => alert(`Edit with id: ${id}`);
  const handleDelete = (id) => alert(`Delete with ID: ${id}`);

  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: 800, margin: "auto", marginTop: 40, backgroundColor: tableColors.background }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: tableColors.text }}>ID</TableCell>
            <TableCell style={{ color: tableColors.text }}>Name</TableCell>
            <TableCell style={{ color: tableColors.text }}>Email</TableCell>
            <TableCell style={{ color: tableColors.text }}>Role</TableCell>
            <TableCell align="center" style={{ color: tableColors.text }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{ color: tableColors.text }}>{row.id}</TableCell>
              <TableCell style={{ color: tableColors.text }}>{row.name}</TableCell>
              <TableCell style={{ color: tableColors.text }}>{row.email}</TableCell>
              <TableCell style={{ color: tableColors.text }}>{row.role}</TableCell>
              <TableCell align="center">
                <IconButton
                  style={{ color: tableColors.button }}
                  onClick={() => handleEdit(row.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  style={{ color: tableColors.button }}
                  onClick={() => handleDelete(row.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <Button
                  variant="contained"
                  size="small"
                  style={{ marginLeft: 8, backgroundColor: tableColors.button }}
                  onClick={() => alert(`details ${row.name}`)}
                >
                  DETAILS
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
