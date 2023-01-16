import React, {useState, useEffect} from 'react'
import Card from '../UI/Card';
import classes from './AvailableProducts.module.css'
import ProductItem from './ProductItem/ProductItem';
import Pagination from '../UI/Pagination';

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://exp.kkant.repl.co/products.json");

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const responseData = await response.json();
      const responseDataProducts = await responseData.products

      setProducts(responseDataProducts);
      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }


  const productList = products.map((meal) => (<ProductItem
    key={meal.id}
    name={meal.title}
    id={meal.id}
    description={meal.description}
    price={meal.price}
  />));

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = productList.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className={classes.meals}>
    <Card>
      <ul>{currentPosts}</ul>
      <h4 style={{"text-align":"center"}}>{currentPage}</h4>
    </Card>
    <Pagination
        postsPerPage={postsPerPage}
        totalPosts={productList.length}
        paginate={paginate}
      />
    </section>
  )
}

export default AvailableProducts
