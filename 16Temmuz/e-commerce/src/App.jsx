import Baslik from "./components/Baslik";
import KampanyaBanner from "./components/KampanyaBanner"
import UrunListesi from "./components/UrunListesi"

function App() {

  return(
    <>
    <div className="app-container">
      <Baslik/>
      <KampanyaBanner/>
      <UrunListesi/>
    </div>
    </>
  )
}

export default App