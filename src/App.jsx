import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import { GlobalContext } from "./contexts/GlobalContext";

import MainComponent from "./pages/MainComponent";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import InfoPage from "./pages/InfoPage";
import PostForm from "./pages/PostForm";
import SinglePostPage from "./pages/SinglePostPage";
import NotFoundPage from "./pages/NotFoundPage";

import axios from "axios";
const myApiUrl = "http://localhost:3000";

function App() {

  useEffect(() => {
    getTags();
  }, []);

  function getTags() {
    axios
      .get(myApiUrl + "/tags")
      .then((res) => {
        console.log(res.data);
        setSelectedTags(res.data.tags);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {

      });
  }


  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <GlobalContext.Provider value={{ selectedTags }} >
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/create" Component={PostForm} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/info" Component={InfoPage} />
            <Route path="/posts">
              <Route index Component={MainComponent}></Route>
              <Route path=":id" Component={SinglePostPage}></Route>
            </Route>
          </Route>
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App;
