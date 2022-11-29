// ES7 yani boshqa kutubxonalarni chaqirib ishlatish imkonini beradi
import Header from "./Components/Header/Header";
/* 
App js faylimiz markaziy komponenta
buni ichida sahifalar aylanadi
barcha komponentalarni yig'ib index jsga uzatadi.
*/
const App = () => {
  return <>
    <Header />
  </>
}

export default App;