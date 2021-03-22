import NavBar from "../components/NavBar";
import { Heading2 } from "../components/UI/texts/Headings";
import { ButtonBorder } from '../components/UI/Buttons';
import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from '../features/session/sessionSlice';
import { Redirect } from "react-router";

function Expenses() {
  const token = useSelector(state => state.session.token);
  const dispatch = useDispatch();

  if(!token) {
    return <Redirect to='/' />
  }

  const handleLogout = () => {
    dispatch(fetchLogout({ token }))
    sessionStorage.removeItem('token');
  }

  return (
    <section>
      <Heading2>Expensable</Heading2>
      <NavBar />
      <ButtonBorder onClick={handleLogout}>Log out</ButtonBorder>
    </section>
  )
}

export default Expenses;