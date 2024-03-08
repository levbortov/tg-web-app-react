import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const tg = window.Telegram.WebApp;

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
