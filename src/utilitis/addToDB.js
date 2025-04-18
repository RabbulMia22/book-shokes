const getFromLocalStore = () => {
    const stored = localStorage.getItem("book");
    return stored ? JSON.parse(stored) : [];
  };
  
  const addToLocalDB = (id) => {
    const bookId = parseInt(id); 
    const storedBooks = getFromLocalStore();
  
    if (storedBooks.includes(bookId)) {
      alert("Already added to the list");
    } else {
      storedBooks.push(bookId);
      localStorage.setItem("book", JSON.stringify(storedBooks));
    }
  };
  
  export { addToLocalDB, getFromLocalStore };
  