import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/header";
import Search from "./components/ui/Search";
import Characters from "./components/characters/Characters";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Characters isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
