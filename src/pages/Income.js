import NavBar from "../components/container/NavBar";
import { Heading2 } from '../components/UI/texts/Headings';
import { ButtonBorder } from '../components/UI/Buttons';
import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "../features/session/sessionSlice";
import { Redirect } from "react-router";
import Category from "../components/categories/Category";
import { fetchCategories } from '../features/categories/categoriesSlice';

function Income() {
  const token = useSelector(state => state.session.token);
  const categories = useSelector(state => state.categories.items);
  const status = useSelector(state => state.categories.status);
  const dispatch = useDispatch();

  const income = categories.filter(category => category.transaction_type === 'income')

  if(!token) {
    return <Redirect to='/' />
  }

  if(token && status === 'idle') {
    dispatch(fetchCategories({ token }));
  }

  const handleLogout = () => {
    dispatch(fetchLogout({ token }));
    sessionStorage.removeItem('token');
  }

  return (
    <section>
      <Heading2>Expensable</Heading2>
      <NavBar />
      <div>
        {income.map(income => <Category key={income.id} category={income}/> ) }
      </div>
      <ButtonBorder onClick={handleLogout}>Log out</ButtonBorder>
    </section>
  )
}

export default Income;