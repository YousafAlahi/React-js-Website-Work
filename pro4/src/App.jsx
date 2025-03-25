
import { useState } from "react"

import Navigation from "./Navigation/Navigation"
import Products from './Products/Products'
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar";

// === Database ======;;;
import products from './db/Data';
import Card from "./Components/Card";

const App = () => {

const [selectedCategory, setSelectedCategory] = useState(null)
const [query, setQuery] = useState('');

//  ==== Input Filter === ;;;;;


const handleInputChange = (event) => {
setQuery(event.target.value);
}

const filteredItems = products.filter(
  (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
);

//  ==== Radio Filter === ;;;;;

const handleChange = (event) => {
  setSelectedCategory(event.target.value)
}

//  ==== Button Filter === ;;;;;

const handleClick = (event) =>{
  setSelectedCategory(event.target.value);
}

function filterData(products,selected,query){
  
  let filteredProducts = products

  // Filtering Input Items 
  if(query){
    filteredProducts = filteredItems
  }

  // Selected Filter
  if(selected){
    filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) =>
       category === selected || color === selected || company === selected || 
    newPrice === selected || title === selected);
  }

  return filteredProducts.map(({img,title,star,reviews,prePrice,newPrice}) => (
  <Card
   key = {Math.random()}
    img = {img}
    title = {title}
    reviews = {reviews}
    star = {star}
    prePrice = {prePrice}
    newPrice = {newPrice}
   />
))
}
const result = filterData(products,selectedCategory,query);

  return (
    <div>
  <Sidebar handleChange ={handleChange}/>
  <Navigation query={query} handleChange={handleChange}/>
  <Recommended handleClick = {handleClick}/>
  <Products result={result}/>
    </div>
  )
}

export default App