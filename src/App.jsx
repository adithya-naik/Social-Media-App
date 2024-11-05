import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Footer from "./components/footer"
import CreatePost from "./components/createpost"
import PostList from "./components/postList"




function App() {

// as sidebar me active className change karna and depending upon on that we have to chnage the content we main a state in the Parent component which is App.jsx 

const [selectedTab,setSelectedTab] = useState("Home")

  return (
    <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (<PostList></PostList>): (<CreatePost></CreatePost>)}
          <Footer></Footer>
        </div>
    </div>
  )
}

export default App
