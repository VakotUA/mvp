import { Link } from 'react-router-dom'

function getTotalCount(list) {
  let count = 0

  list.map((item) => (count += item.count))

  return count
}

function CategoriesList({ categories }) {
  return (
    <section>
      <ul>
        {categories.map((item) => (
          <li>
            <Link to={'/mvp/'}>
              <span>{item.title}</span>
              <small>{getTotalCount(item.list)}</small>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CategoriesList
