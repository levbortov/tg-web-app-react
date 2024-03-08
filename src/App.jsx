import { useEffect, useState } from 'react'

const tg = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0)

  useEffect((() => {
    tg.ready();
  }), [])

  const onClose = () => {
    tg.close();
  }

  return (
    <>
      work
      <button onClick={onClose}>Закрыть</button>
    </>
  )
}

export default App
