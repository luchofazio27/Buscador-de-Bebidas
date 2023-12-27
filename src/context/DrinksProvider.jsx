import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({})
  //const [loading, setLoading] = useState(false)

  useEffect( () => {
    const getRecipe = async () => {
        if(!drinkId) return

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
            const { data } = await axios(url)
            setRecipe(data.drinks[0])
        } catch (error) {
            console.log(error)
        }
    }
    getRecipe()
  }, [drinkId])

  const consultDrink = async (info) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${info.name}&c=${info.category}`;

      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkIdClick = (id) => {
    setDrinkId(id);
  };

  return (
    <DrinksContext.Provider
      value={{
        consultDrink,
        drinks,
        handleModalClick,
        modal,
        handleDrinkIdClick,
        recipe,
        setRecipe
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
