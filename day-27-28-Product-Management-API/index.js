const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('template engine','ejs');

// Logging Middleware to all routes 
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
});

app.use(bodyParser.json());

const PORT = 3000 ;

let products = [
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];


app.get('/products', (req, res,next) => {
    res.json(products);
    
})

app.get('/products/:id', (req, res) => 
{
    const productID = parseInt(req.params.id);
    const product = products.find((p)=>p.id === productID);

    if(!product)
    {
        res.send('No product found')
    }else
    {
        res.send(product);
    }
})

app.get('/products/search', (req, res) =>{
    const { q, minPrice, maxPrice } = req.query;

    const getProducts = products;

    if(q)
    {
        getProducts.filter((p)=>{
            p.name.toLocaleLowerCase().includes(q.toLowerCase());
        });
    }
    if(minPrice)
    {
        getProducts.filter((p)=>
        {
            p.price >= parseFloat(minPrice)
        });
    }

    if(maxPrice)
    {
        getProducts.filter((p)=>
        {
            p.price <= parseFloat(minPrice)
        });
    }

    res.json(getProducts);


})


app.post('/products', (req, res) => {
    const newProduct = req.body;
    const uniqueId = products.length + 1;
    newProduct.id = uniqueId;
    products.push(newProduct);
    res.json(newProduct);
  });

  
app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProductData = req.body;
  
    const index = products.findIndex((p) => p.id === productId);
  
    if (index === -1) 
    {
      res.status(404).json({ message: 'Product not found' });
    } else 
    {
      products[index] = { ...products[index], ...updatedProductData };
      res.json(products[index]);
    }
  });

  app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const index = products.findIndex((p) => p.id === productId);
  
    if (index === -1) 
    {
      res.json({ message: 'Product not found' });
    } else 
    {
      products.splice(index, 1);
    //   res.json({ message: 'Product deleted successfully' });
      res.json(products);
    }
  });

 // Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something not okey');
}); 

app.listen(PORT,()=>{
    console.log('listening on port 3000');
})

app.get('/error', (req, res, next) => {
  throw new Error('This is an error just for testing');
});