export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
       reject(new NetworkError("Failed to fetch product catalog")); 
        }
    }, 1000);
    });
};


export const fetchProductReviews = (productId: number): Promise <{reviewer: string; comment: string, rating: number}[]> =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(Math.random() <=0.8){
                resolve ([
                    {reviewer:"Imane", comment: "I like it", rating: 5},
                    {reviewer:"hanane", comment: "good product", rating: 4.5}
                ]) 
            }else {  reject(new DataError(`Failed to fetch product reviews for product ID ${productId}`));

            }
        },1000);
        });
    };
    

export const fetchSalesReport= () : Promise <{totalSales: number, unitsSold: number, averagePrice: number}> =>{
    return new Promise ((resolve, reject)=>{
        setTimeout (()=> {
            if(Math.random()<=0.8) 
                resolve (
            {totalSales:5000, unitsSold:5, averagePrice:1000 }
            )
            else { reject(new NetworkError("Failed to fetch sales report")); }
            },1000
        );
    }
)
}




export class NetworkError extends Error {
  constructor(message: string) {
    super(message); 
    this.name = "NetworkError"; 
  }
}

export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}
