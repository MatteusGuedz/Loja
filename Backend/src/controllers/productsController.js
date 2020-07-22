const connection = require('../database/connection') 
// const generateID = require('../utils/generateID') 
const rimraf = require('rimraf')
const fs = require('fs')
module.exports = {

  
    async createProduct(request, response){
      // const  productID = generateID()

      const {
        name,
        price,
        category,
        disponibility,
        originalPack,
        product_id,
        description,
        mark,
        peso,
        dimensions,
        material,
        quantidade,
         } = request.body;
         

    
        const product = {
          image:request.file.filename,
          name,
          price,
          category,
          disponibility,
          originalPack,
          description,
          mark,
          product_id,
          peso,
          dimensions,
          material,
          quantidade,
          }

          try {

           const  produtosExists =  await connection('products')
              .where({product_id: product_id})
              .select('*')

              if(Number(produtosExists) == 0 ){
                await connection('products').insert(product)
                return response.json(product)
              } else {
                return response.send('O Produto ja existe.')
              }
            

          }catch (e){

            return response.status(400).send(e)
          }
      
        

        
  
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
            image_url: `${process.env.LOCALHOST}/uploads/products/${product_id}/imagesDetails/${image.image}`
          }

       })

       return response.json(serializedImages)


    },
    
    async removeImage(request, response){
      const { product_id, id_image } = request.query;

  
      try {
 
       const imagem = await connection('images')
       .where({ref_id: product_id})
       .where({id: id_image})
       .first()
 
       console.log(` Primeira Req da Rota  imagem = ${imagem.image}`)
       
       const rowsDelete = await connection('images')
       .where({ref_id: product_id})
       .where({id: id_image})
       .first()
       .del()
 
       if(rowsDelete > 0){
         console.log(` Segunda Req da Rota  imagem = ${imagem.image}`)
         fs.unlink(`./uploads/products/${product_id}/imagesDetails/${imagem.image}`, err => {
           if (err) {
             console.log("falha ao deletar imagem local: \n"+ err );
         } else {
             console.log('successfully deleted local image');                                
         }
         })
         
 
         const msg = `A Imagem foi Excluida!`
         return response.send(msg).status(204)
       } else {
 
         return response.send('Nenhuma Imagem foi Excluida.').status(400)
       }
 
 
 
     
 
      } catch (e){
       return response.status(500).json(e)
      }
    }
  }
  
  
  


