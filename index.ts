import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';

import { NetworkError, DataError } from './apiSimulator';


function handleApiCalls() {
  fetchProductCatalog()
    .then(products => {
      console.log("product catalog:", products);

      const reviewsPromises = products.map(product =>
        fetchProductReviews(product.id).then(reviews => {
          return { product, reviews };
        })
      );

      return Promise.all(reviewsPromises);
    })
    .then(productsWithReviews => {
      productsWithReviews.forEach(item => {
        console.log(`Reviews for ${item.product.name}:`, item.reviews);
      });

      return fetchSalesReport();
    })
    .then(salesReport => {
      console.log("Sales Report:", salesReport);
    })
    //.catch(error => {
     // console.error("Error:", error);
   // })

   .catch(error => {
  if (error instanceof NetworkError) {
    console.error("🔌 Network Error:", error.message);
  } else if (error instanceof DataError) {
    console.error("📄 Data Error:", error.message);
  } else {
    console.error("❌ Unknown Error:", error);
  }
})
    .finally(() => {
      console.log("All API calls have been attempted.");
    });
}

handleApiCalls();