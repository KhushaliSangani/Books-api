import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Header from "./components/Header/Header";
import Books from "./pages/Books/Books";
import EditBook from "./pages/EditBook/EditBook";
import AddBook from "./pages/AddBook/AddBook";
import "./App.css";

function App({data}) {
  return (
    <Provider store={store}>
      <div className="app-container">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Books />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/books/add" element={<AddBook />}></Route>
            <Route path="/books/edit/:id" element={<EditBook />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
