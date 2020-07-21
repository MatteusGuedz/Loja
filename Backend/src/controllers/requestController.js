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

      const {id_user} = request.query;


      const infos = {
        name,
        andress,
        bairro,
        city,
        email, 
        whats,
        user_id:Number(id_user)
      }

      
      const AllAndress = await connection('delivery_info')  
        .where({user_id: id_user})
        .select('*')

        if(AllAndress.length >= 3){
          return response.send('Não é possivel cadastrar mais de 3 endereços!')
        } else {
          await connection('delivery_info').insert(infos)
          return response.json(infos)
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


   const myrequests =  await connection('requests')
        .where({user_id: id_user})
        .select('*')
  
        return response.json(myrequests)
  },

  async listMysAndress(request, response){
    const {user_id} = request.query

    
    const AllAndress = await connection('delivery_info')  
        .where({user_id: user_id})
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
      quantidade,
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
      const {id_user, id_andress} = request.query

      await connection('delivery_info')
        .where({user_id:id_user})
        .where({id: id_andress})
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