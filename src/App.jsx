import { Container } from "react-bootstrap";
import FormUser from "./components/FormUser";
import ListDrinks from "./components/ListDrinks";
import ModalDrink from "./components/ModalDrink";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <FormUser />

          <ListDrinks />

          <ModalDrink />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
