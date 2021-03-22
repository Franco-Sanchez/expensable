import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteCategory, removeCategoryFromItems } from '../../features/categories/categoriesSlice';
import { ContentL, ContentS, ContentXL } from '../UI/texts/Content';
import TrashButton from '../UI/TrashButton';

function Category({ category }) {
  const token = useSelector(state => state.session.token);
  const totalPrice = category.transactions.reduce((total, item) => total + item.amount, 0)
  const dispatch = useDispatch();

  const handleDeleteCategory = () => {
    dispatch(fetchDeleteCategory({ token, id: category.id }));
    dispatch(removeCategoryFromItems({ id: category.id }));
  }

  return (
    <article>
      <ContentL>{category.name}</ContentL>
      <ContentS>{category.transactions.length} transactions</ContentS>
      <ContentXL>${totalPrice.toFixed(2)}</ContentXL>
      <TrashButton onClick={handleDeleteCategory} />
    </article>
  )
}

export default Category;