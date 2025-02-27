import React from 'react';
import { Navigation } from './components/Navigation';
import { HomePage, ProductPage, SearchPage } from './pages';
import { Navigate, Route, Routes } from 'react-router';


export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='product/:id' element={<ProductPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}