const connection = require('../database/connection') 

module.exports = {

  async createAndress(request, response){
      const {
        name,
        andress,
        bairro,
        city,
        email,
        whats,      
      } = request.body;



      const infos = {
        name,
        andress,
        bairro,
        city,
        email, 
        whats,
        user_id: request.query.user_id,
      }

      
      const AllAndress = await connection('delivery_info')  
        .where({user_id: request.query.user_id})
        .select('*')

        if(AllAndress.length >= 3){
          return response.send('Não é possivel cadastrar mais de 3 endereços!')
        } else {
          await connection('delivery_info')
              .insert(infos)
              .then(_ => response.status(200).send('Adicionado'))
              .catch(err => response.status(400).json(err))

          
        }

      
     
      





  },

  async createRequest(request, response){
    const {
      product,
      quantidade,
      priceTotal,
      message,      
      status
    } = request.body;

    const {ref_info, user_id} = request.query;

    const pedido = {
      product,
      status,
      infoDelivery_ref: Number(ref_info),
      quantidade,
      priceTotal,
      user_id: Number(user_id),
      message
    }

    await connection('requests').insert(pedido)
    return response.json(pedido)
  },

  async listMyRequest(request, response){
    const {id_user} = request.query


   await connection('requests')
        .where({user_id: id_user})
        .orderBy('id')
        .select('*')
        .then( requests => response.json(requests))
        .catch (err => response.status(400).json(err))
  
        
  },

  async listMysAndress(request, response){


    
    const AllAndress = await connection('delivery_info')  
        .where({user_id: request.query.user_id})
        .orderBy('id')
        .select('*')

       
      return response.json(AllAndress)
  },

  async updateAndress(request, response){
      const {id_user, id_andress} = request.query
      const {
        name,
        andress,
        bairro,
        city,
        email,
        whats,   
      }  = request.body


      const andressUp = {
        name,
        andress,
        bairro,
        city,
        email,
        whats
      }


    await connection('delivery_info')
          .where({ user_id: id_user})
          .where({ id : id_andress})
          .first()
          .update(andressUp)


          return response.json(andressUp)


  },

  async updateRequest(request, response){
    const {id_user, id_request} = request.query

    const {
      quantidade,
      message,   
    } = request.body

    const requestUp = {
      quantidade: Number(quantidade),
      message,   
    }

    await connection('requests')
          .where({ user_id: id_user})
          .where({ id : id_request})
          .first()
          .update(requestUp)


          return response.json(requestUp)



  },

  async removeAndress(request, response){
      const {id_user} = request.query

      await connection('delivery_info')
        .where({user_id: id_user})
        .where({id: request.params.id})
        .first()
        .del()
        .then( rowsDelete => {
          if(rowsDelete > 0){
            return response.status(200).send('Excluido!')
          } else {
             return response.status(400).send()
          }
        } )
        .catch( err => response.status(400).json(err))

     
  },

  async getAllRequests(request, response){
      
      const requestAll = await connection('requests')
        .select('*')


        return response.json(requestAll)
  },

  async searchRequests(request, response){
    const { user_id } = request.body



    const allMyRequests = await connection('requests')
      .where({user_id: user_id})
      .select('*')

      return response.json(allMyRequests)
  },

  async changeStatus(request, response){
    const {id_request} = request.query

    const { status } = request.body


    await connection('requests')
      .where({id: id_request})
      .first()
      .update({status})
      .then(_ => response.status(200).send())
      .catch( err => response.status(400).json(err))
    
    
  }



  



}