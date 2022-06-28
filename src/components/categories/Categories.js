import React from 'react'
// import { Routes, Route } from 'react-router-dom'
import CategorySelect from './CategorySelect'
// import CategoriesList from './CategoriesList'

function Categories({ categories, categoriesList }) {
  return (
    <section>
      <CategorySelect categories={categories} />
      {/* <Routes>
        <Route to={categories[0].link} element={<CategoriesList />} />
      </Routes> */}

      {/* TODO: Сделать вывод сохранённых категорий и прочего с 
      ними связанного, по типу ссылки на страницу с заказами */}
      {/* <CategoriesList categories={categoriesList} /> */}
    </section>
  )
}

export default Categories
