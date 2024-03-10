import { useEffect, useState } from 'react'
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import Input from './ui/Input/Input';

function App() {
  const { tg } = useTelegram();

  useEffect((() => {
    tg.ready();
  }), [])

  return (
    <>
      <Header />
      <Input placeholder='Ваше имя' />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path='form' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
