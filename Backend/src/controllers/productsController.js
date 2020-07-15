const connection = require('../database/connection') 
const generateID = require('../utils/generateID') 
module.exports = {

  
    async createProduct(request, response){
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
          image:request.file.filename,
          name,
          price,
          category,
          disponibility,
          originalPack,
          description,
          mark,
          product_id: productID,
          peso,
          dimensions,
          quantidade,
          }


      
        

        await connection('products').insert(product)
        return response.json(product)
  
    },

    async updateProduct(request, response){
     
      const {product_id} = request.query;

      const updateProduct = (request, response, product) => {
         connection('products')
          .where({product_id: product_id})
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
        .where({product_id: product_id})
        .first()
        .then( product => {
        if(!product){
          const msg = `Não foi encontrado nenhum produto com o ID ${product_id}.`
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
        .catch(err => response.status(400).json(err))

    },

    async removeProduct(request, response){

      const { product_id } = request.query;
      await connection('products')
      .where({product_id: product_id})
      .del()
      .then( rowsDelete => {
        if(rowsDelete > 0){
          return response.status(204).send()
        } else {
          const msg = `Não foi encontrado nenhum produto com o ID 
          ${request.params.id}.`
          return response.status(400).send(msg)
        }
        
      })
      .catch(err => res.status(400).json(err))
    },

    async listProduct(request, response){
    const products =  await connection('products')
        .select('*')

        const serializedProducts = products.map(product => {
          return {
            ...product,
            image_url: `http://192.168.1.12:3000/uploads/products/${product.image}`
          }
       })

        return response.json(serializedProducts)
    },

    async listFilter(request, response){
      await connection('products')
      .where({category: request.params.category})
      .then(products => response.json(products) )
      .catch( err => response.status(400).json(err))
    },
    

    async listerUnic(request, response){
      
      const {product_id} = request.query;

    await connection('products')
      .where({product_id: product_id})
      .first()
      .then( product => {
        if(!product){
          const msg = `Houve um problema ao acessar as 
          informações do produto com o ID ${product_id}.`  
          return response.status(400).send(msg)
        } else {
          
          return response.json(product)
        }
      })
      .catch( err => response.status(400).json(err))
      

    },

    async createImage(request, response){
      const { product_id } = request.query;

      const imagem = {
        image: request.file.filename,
        ref_id: product_id
      }
      
      
     await connection('images').insert(imagem)
      return response.json(imagem)
    },

    async listImages(request, response){
      const { product_id } = request.query;


      const imagens = await connection('images')
        .where({ref_id: product_id})
        .select('*')

        const serializedImages = imagens.map(image => {
          return {
            ...image,
            image_url: `http://192.168.1.12:3000/uploads/products/${image.image}`
          }

       })

       return response.json(serializedImages)

    },
    
    async removeImage(request, response){
      
      const { product_id, id_image } = request.query;


      const imagens = await connection('images')
        .where({ref_id: product_id})
        .where({id: id_image})
        .first()
        .del()
        .then( rowsDeleted =>  {
          if(rowsDeleted > 0){
            return response.status(204).send()
          } else {
            const msg = `Não foi encontrado nenhuma imagem com o ID 
            ${id_image}.`
            return response.status(400).send(msg)
          }
        })
        .catch(err => res.status(400).json(err))

        

    

      
    }
  }
  
  
  


