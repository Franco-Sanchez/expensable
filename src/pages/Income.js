function Income({ history }) {
  const token = 'token';

  if(!token) {
    history.push('/')
  }

  return <div>Income</div>
}

export default Income;