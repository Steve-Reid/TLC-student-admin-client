import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import { useUserQuery } from '../../generated/graphql';
import { Loader } from '../Loader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: '16px',
    },
    status: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    details: {},
    table: {
      minWidth: 650,
    },
    activity: {},
    attendance: {},
  })
);

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface TParams {
  id: string;
}

interface StudentMainProps extends RouteComponentProps<TParams> {}

export const StudentMain: React.FC<StudentMainProps> = ({
  match,
}: RouteComponentProps<TParams>) => {
  const classes = useStyles();
  const id = parseInt(match.params.id);
  const { data, loading } = useUserQuery({
    variables: { userId: id },
    fetchPolicy: 'network-only',
  });

  console.log(data);

  if (loading) {
    return <Loader />;
  }

  if (data) {
    return (
      <>
        <div className={`${classes.root} ${classes.status}`}>
          <h2>Status</h2>
          <h2>Class Credits</h2>
        </div>
        <div className={`${classes.root} ${classes.details}`}>
          <h2>Details</h2>
          <p>Stated:</p>
          <p>Last attendance:</p>
          <p>Current Level:</p>
        </div>
        <div className={`${classes.root} ${classes.activity}`}>
          <h2>Activity</h2>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className={`${classes.root} ${classes.attendance}`}>
          <h2>Attendance</h2>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
  }
};
