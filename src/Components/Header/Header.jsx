import "./header.css"
// import IMG from  "../../Assets/undraw_online_test_re_kyfx.svg"
import Card from "../Card/Card";
const Header = () => {
  return <header>

        {/* <img src={IMG} alt={Date()} /> */}
   <div className="container">
     <div className="row mt-5">
        <div className="col-3">
            <Card />
        </div>
        <div className="col-3">
            <Card />
        </div>
        <div className="col-3">
            <Card />
        </div>
     </div>
   </div>
  </header>
}

export default Header;