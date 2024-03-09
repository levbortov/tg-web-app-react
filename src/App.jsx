import { useEffect, useState } from 'react'
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from 'react-router-dom'
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {
  const { tg } = useTelegram();

  useEffect((() => {
    tg.ready();
  }), [])

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path='form' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
