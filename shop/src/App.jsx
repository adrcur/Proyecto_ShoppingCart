import { AppRouter } from "./AppRouter"
import { PodructProvider } from "./context/PodructProvider"


function App() {
  return (
    <PodructProvider>
      <AppRouter />
    </PodructProvider>
  )
}

export default App
