import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategorySelect from './CategorySelect'
import CategoriesList from './CategoriesList'

function getAllCategories(categories) {
  const result = []
  categories.map(
    (item) =>
      item.list && item.list.map((item) => item.list && result.push(item))
  )
  return result
}

function Categories({ categories }) {
  const allCategoriesList = getAllCategories(categories)

  return (
    <>
      <CategorySelect categories={categories} />
      <Routes>
        {categories.map((item) => (
          <Route
            key={item.id}
            path={item.link}
            element={<CategoriesList list={item.list} />}
          />
        ))}
        <Route path="*" element={<CategoriesList list={allCategoriesList} />} />
        <Route
          path="/mvp/all-categories"
          element={<CategoriesList list={allCategoriesList} />}
        />
      </Routes>

      {/* TODO: Строка поиска */}
    </>
  )
}

export default Categories
