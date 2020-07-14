const connection = require('../database/connection') 
const generateID = require('../utils/generateID') 
module.exports = {

  
    async create(request, response){
      const { 
        name,
        price,
        category,
        disponibility,
        originalPack,
        description,
        mark,
        peso,
        dimensions,
        quantidade,
         } = request.body;
         
      const  productID = generateID()
  
      const product = {
        name,
        price,
        category,
        disponibility,
        originalPack,
        description,
        mark,
        productID,
        peso,
        dimensions,
        quantidade,
        }
  
        await connection('products').insert(product)
        return response.json(product)
  
    },


    async update(request, response){
     

      const updateProduct = (request, response, product) => {
         connection('products')
          .where({productID: request.params.id})
          .update(product)  
          .then(_ => response.status(204).send())
          .catch( err =>  response.status(400).json(err))
        }

      const { 
        name,
        price,
        category,
        disponibility,
        originalPack,
        description,
        mark,
        peso,
        dimensions,
        quantidade,
      } = request.body;




      await connection('products')
        .where({productID: request.params.id})
        .first()
        .then( product => {
        if(!product){
          const msg = `Não foi encontrado nenhum produto com o ID ${request.params.id}.`
          return response.status(400).send(msg)
         }


         const ProductUp = {
          name,
          price,
          category,
          disponibility,
          originalPack,
          description,
          mark,
          peso,
          dimensions,
          quantidade,
         }

         updateProduct(request, response, ProductUp)

        })
        .catch(err => res.status(400).json(err))

    },

    async remove(request, response){
      await connection('products')
      .where({productID: request.params.id})
      .del()
      .then( rowsDelete => {
        if(rowsDelete > 0){
          return response.status(204).send()
        } else {
          const msg = `Não foi encontrado nenhum produto com o ID ${request.params.id}.`
          return response.status(400).send(msg)
        }
        
      })
      .catch(err => res.status(400).json(err))
    },

    async store(request, response){
      await connection('products')
        .then(products => response.json(products) )
        .catch( err => response.status(400).json(err))
    },

    async storeFilter(request, response){
      await connection('products')
      .where({category: request.params.category})
      .then(products => response.json(products) )
      .catch( err => response.status(400).json(err))
    }
  }
  
  
  


