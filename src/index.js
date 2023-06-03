import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import BorrowListBook from './components/BorrowListBook/BorrowListBook';
import AddBook from './components/Admin/Book/AddBook';
import ListBook from './components/Admin/Book/ListBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path = "login" element = {<Login />} />
          <Route path = "register" element = {<Register />} />
          <Route path = "borrowlistbook" element = {<BorrowListBook />} />
          <Route path = "addbook" element = {<AddBook />} />
          <Route path = "listbook" element = {<ListBook />} />

        
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

