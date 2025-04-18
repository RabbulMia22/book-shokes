import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import ListedBook from "./pages/ListedBook";
import PageToRead from "./pages/PageToRead";
import BookProdiver from "./components/context/BookProdiver";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "listedBooks",
          element: <ListedBook />
        },
        {
          path: "pagetoRead",
          element: <PageToRead />
        },
        {
          path: "book/:bookId", 
          element: <BookDetails />
        }
      ]
    }
  ]);

  return (
    <BookProdiver>
      <RouterProvider router={router} />
    </BookProdiver>
  );
}

export default App;
