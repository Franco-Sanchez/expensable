import { ContentL, ContentXL } from '../UI/texts/Content';
import TrashButton from '../UI/TrashButton';

function Category({ category }) {
  const totalPrice = category.transactions.reduce((total, item) => total + item.amount, 0)
  
  return (
    <article>
      <ContentL>{category.name}</ContentL>
      <ContentS>{category.transactions.length}</ContentS>
      <ContentXL>{totalPrice}</ContentXL>
      <TrashButton />
    </article>
  )
}

export default Category;