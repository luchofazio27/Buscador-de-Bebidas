import { Modal, Image } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"

const ModalDrink = () => {

    const { modal, handleModalClick, recipe, setRecipe } = useDrinks()

    console.log(recipe)

    // const showIngredients = () => {
    //     let ingredients = []

    //     for(let i = 1; i < 16; i++) {
    //         if( recipe[`strIngredient${i}`]) {
    //             ingredients.push(
    //                 <li>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>
    //             )
    //         }
    //     }
    //     return ingredients
    // }

    const showIngredients = () => {
        return Array.from({ length: 15 }, (_, i) => i + 1)
          .filter(i => recipe[`strIngredient${i}`])
          .map(i => (
            <li key={i}>
              {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
            </li>
          ));
      };


  return (
    <Modal show={modal} onHide={() => {
        handleModalClick()
        setRecipe({})
    }}>
      <Image src={recipe.strDrinkThumb} alt={`Imagen de receta ${recipe.strDrink}`}/>
      <Modal.Header>
        <Modal.Title>{recipe.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='p-3'>
            <h2>Instrucciones</h2>
            {recipe.strInstructions}
            <h2>Ingredientes y Cantidad</h2>
            {showIngredients()}
        </div>
      </Modal.Body>
    </Modal>
    )
}

export default ModalDrink
