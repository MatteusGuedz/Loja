const connection = require('../database/connection') 
const generateID = require('../utils/generateID') 
const rimraf = require('rimraf')
const fs = require('fs')
module.exports = {

  
    async createProduct(request, response){
      const  productID = generateID()

      const {
        image,
        name,
        price,
        category,
        disponibility,
        originalPack,
        description,
        mark,
        peso,
        dimensions,
        material,
        quantidade,
        imagesDetails
         } = request.body;


         const trx = await connection.transaction();
         const ImagesDetails = imagesDetails.map(imageItem => {
          return {
            ref_id:productID,
            imageURL: imageItem.image,

          }
        })

         
         

    
        const product = {
          image,
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
          material,
          quantidade,
          }


         

         try {
            
            
            
          const  produtosExists =  await trx('products')
             .where({product_id: productID})
             .select('*')

             if(Number(produtosExists) == 0 ){
               await trx('products').insert(product)
               await trx('images').insert(ImagesDetails)
               await trx.commit();
               return response.status(201).send('Cadastro Realizado!')
             } else {
               return response.send('O Produto ja existe.')
             }
           

         }catch (e){
           await trx.rollback();
           return response.status(400).send(e)
         }

         
      
        

        
  
    },

    async updateProduct(request, response){
     
      const { product_id } = request.query;


      const updateProduct = (request, response, product) => {
        connection('products')
         .where({product_id: product_id})
         .update(product)  
         .then(_ => response.status(204).send())
         .catch( err =>  response.status(400).json(err))
       }


     

      const { 
        image,
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
          image,
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
      console.log('Entrou na rota')

      await connection('images')
        .where({ref_id: request.params.id})
        .select('*')
        .del()
        .then( rowsDelete => {
          console.log(`Apagou ${rowsDelete} linha inTable imagens`)
        })



      await rimraf(`./uploads/products/${request.params.id}`,() => {
        console.log('Apagou a pasta')
      })

      await connection('products')
      .where({product_id:request.params.id})
      .del()
      .then( rowsDelete => {
        if(rowsDelete > 0){
          
       console.log('Apagou o produto')
          return response.status(204).send()
        } else {
          const msg = `Não foi encontrado nenhum produto com o ID 
          ${request.params.id}.`
          return response.status(400).send(msg)
        }


        
      })
      .catch(err => response.status(400).json(err))
    },

    async listProduct(request, response){
    const products =  await connection('products')
        .where({disponibility:true})
        .select('*')

        

        const serializedProducts = products.map(product => {
          return {
            name: product.name,
            price: product.price,
            category: product.category,
            product_id: product.product_id,
            disponibility: product.disponibility,
            image_url: `${process.env.LOCALHOST}/uploads/products/${product.product_id}/imageMain/${product.image}`
          }
       })

        return response.json(serializedProducts)
    },

    async listFilter(request, response){
      const products = await connection('products')
      .where({category: request.params.category})
      .select('*')

      const serializedProducts = products.map(product => {
        return {
          name: product.name,
          price: product.price,
          category: product.category,
          product_id: product.product_id,
          disponibility: product.disponibility,
          image_url: `${process.env.LOCALHOST}/uploads/productsMain/${product.image}`
        }
     })

     return response.json(serializedProducts)
    },
    
    async listerUnic(request, response){
      
      const {product_id} = request.query;   

      try {
  
        const product =  await connection('products')
        .where({product_id: product_id})
        .first()
  
        if(!product){
          const msg = `O produto não existe!`
          return response.status(400).send(msg)
        }
  
        const images = await connection('images')
          .where({ref_id: product_id})
          .select('*')
  
          
  
        const resultImage = images.map(  img => {
          
            return {
              imagem: img.image,
              id_product: img.ref_id,
              img_url:`${process.env.LOCALHOST}/uploads/products/${product_id}/imagesDetails/${img.image}`
            }
          })
  
        productDetail = {
          ...product,
          imagesDetails: resultImage,
          imageMain_url: `${process.env.LOCALHOST}/uploads/products/${product_id}/imageMain/${product.image}`
        }
  
       return response.json(productDetail)
  
      }catch(e){
        
        return response.status(400).send(e)
      }
    },

  
  }
  
  
  


