import "./styles.css";
import useAPI from "./useAPI";

export default function App() {
  const {data=[], error = ''} = useAPI("https://reqres.in/api/users?page=2");

  const {data:usersData} = data

  return (
    <div className="App">
      <table>
        <tbody>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        </tr>
        </tbody>

        <tbody>
        {userData.map(({first_name}) =>{
        return <tr>
<td></td>
<td></td>
<td></td>
        </tr>
        }}
        </tbody>
      </table>
    </div>
  );
}
