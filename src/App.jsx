import { Heading } from "@chakra-ui/react"
import PricingTable from "./Pricing"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom" 
import NoPageFound from "./NoPageFound"
import SuccessPage from "./Success";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<PricingTable/>}/>
          <Route exact path="/success" element={<SuccessPage/>}/>
          <Route exact path="*" element={<NoPageFound/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
