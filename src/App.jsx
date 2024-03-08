import { useEffect, useState } from 'react'
import Button from './components/Button/Button';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect((() => {
    tg.ready();
  }), [])

  return (
    <>
      <Button onClick={onToggleButton}>toggl</Button>
    </>
  )
}

export default App
