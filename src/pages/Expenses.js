function Expenses({ history }) {
  const token = 'token';

  if(!token) {
    history.push('/')
  }

  return <div>Expenses</div>
}

export default Expenses;