import { useEffect, useState } from 'react'
import { useTelegram } from './hooks/useTelegram';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect((() => {
    tg.ready();
  }), [])

  return (
    <>
      <Header />
      <Button onClick={onToggleButton}>toggl</Button>
    </>
  )
}

export default App
