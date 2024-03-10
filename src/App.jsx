import { useEffect } from 'react'
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import ProductList from './components/ProductList';
import Form from './components/Form';

function App() {
  const { tg, theme } = useTelegram();

  useEffect((() => {
    tg.ready();
  }), [])

  return (
    <div className='App'>
      <Header />
      <code>
        <pre>
          {JSON.stringify(theme, null, 2)}
        </pre>
      </code>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path='form' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
