const img1 = require('../assets/Carroussel/1.webp')
const img2 = require('../assets/Carroussel/2.webp')
const img3 = require('../assets/Carroussel/3.webp')
const img4 = require('../assets/Carroussel/1.webp')
const img5 = require('../assets/Carroussel/2.webp')
const IMG = require('../assets/teste.jpg')

const IMAGENS = [img1, img2, img3,img4, img5]




export {IMAGENS};


export const products = [
  {
    id: 1,
    name: "Kratos",
    price: 98,
    category: 3,
    disponibility: true,
    originalPack: false,
    description: "O Deus da Guerra",
    mark: "Kings",
    product_id: "1234567",
    peso: 4,
    dimensions: "12cm X 13 cm",
    material: "Vinil",
    quantidade: 1,
    imagesDetails: [
      {
        imagem: "1",
        id_product: "1234567",
        img_url: "https://http2.mlstatic.com/action-figure-kratos-god-of-war-4-18cm-pronta-entrega-D_NQ_NP_766156-MLB27201460409_042018-F.jpg"
      },
      {
        imagem: "2",
        id_product: "1234567",
        img_url: "https://blogdebrinquedo.com.br/wp-content/uploads/2019/05/20190503action-figure-kratos-god-of-war-escala-1-6-mondo-02.jpg"
      },
      {
        imagem: "3",
        id_product: "1234567",
        img_url: "https://http2.mlstatic.com/action-figure-kratos-god-of-war-4-18cm-pronta-entrega-D_NQ_NP_766156-MLB27201460409_042018-F.jpg"
      },
      {
        imagem: "4",
        id_product: "1234567",
        img_url: "https://blogdebrinquedo.com.br/wp-content/uploads/2019/05/20190503action-figure-kratos-god-of-war-escala-1-6-mondo-02.jpg"
      }
    ],
    imageMain_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgXBuYRF6k1Y63EnFMAdVY8D-fsaVy1KLykg&usqp=CAU"
  },

  {
    id: 1,
    name: "Hinata",
    price: 120,
    category: 3,
    disponibility: true,
    originalPack: false,
    description: "Linda Ninja",
    mark: "HotToys",
    product_id: "12345678",
    peso: 2,
    dimensions: "14cm X 15 cm",
    material: "Acrilico",
    quantidade: 1,
    imagesDetails: [
      {
        imagem: "1",
        id_product: "12345678",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEVh7elLWVCDWjR2gJH6Cc5TPnWyNQjZL-Gw&usqp=CAU"
      },
      {
        imagem: "2",
        id_product: "12345678",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlJGeEG8GSRmcu-l0MawFqLGoHkrfKn6Y9Bg&usqp=CAU"
      },
      {
        imagem: "3",
        id_product: "12345678",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEVh7elLWVCDWjR2gJH6Cc5TPnWyNQjZL-Gw&usqp=CAU"
      },
      {
        imagem: "4",
        id_product: "12345678",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlJGeEG8GSRmcu-l0MawFqLGoHkrfKn6Y9Bg&usqp=CAU"
      }
    ],
    imageMain_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLRPP0wd1msOHkzdu3PiA0ffAGFajaNrummQ&usqp=CAU"
  },

  {
    id: 3,
    name: "Kakashi",
    price: 92,
    category: 1,
    disponibility: true,
    originalPack: false,
    description: "Kakashi Hatake",
    mark: "Kings",
    product_id: "123456789",
    peso: 4,
    dimensions: "9cm X 5cm",
    material: "Vinil",
    quantidade: 1,
    imagesDetails: [
      {
        imagem: "1",
        id_product: "123456789",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLNeAG2m3d0Udp0QRAr2pxAQL4CrSFF0_t5A&usqp=CAU"
      },
      {
        imagem: "2",
        id_product: "123456789",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0bXV6Jbwynj8GcVUjPF_lQ6yVONPpEFieLw&usqp=CAU"
      },
      {
        imagem: "3",
        id_product: "123456789",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLNeAG2m3d0Udp0QRAr2pxAQL4CrSFF0_t5A&usqp=CAU"
      },
      {
        imagem: "4",
        id_product: "123456789",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0bXV6Jbwynj8GcVUjPF_lQ6yVONPpEFieLw&usqp=CAU"
      }
    ],
    imageMain_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBVPsSy_B4PXs-Z7G59knm8Yz7Kzjwn8-ILQ&usqp=CAU"
  },

  {
    id: 4,
    name: "Naruto",
    price: 138,
    category: 1,
    disponibility: true,
    originalPack: false,
    description: "Eu sou Naruto Uzumaki",
    mark: "HotToys",
    product_id: "12345678910",
    peso: 2,
    dimensions: "14cm X 15 cm",
    material: "Acrilico",
    quantidade: 1,
    imagesDetails: [
      {
        imagem: "1",
        id_product: "12345678910",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6DzURjN2xrxNRvc-YSVgMYuXwpsAGUhZjeg&usqp=CAU"
      },
      {
        imagem: "2",
        id_product: "12345678910",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvaHVFNYUvq89nWhJiFQGGV1jK7aN68CGFDA&usqp=CAU"
      },
      {
        imagem: "3",
        id_product: "12345678910",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6DzURjN2xrxNRvc-YSVgMYuXwpsAGUhZjeg&usqp=CAU"
      },
      {
        imagem: "4",
        id_product: "12345678910",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvaHVFNYUvq89nWhJiFQGGV1jK7aN68CGFDA&usqp=CAU"
      }
    ],
    imageMain_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShraFo_Tf29pZqUU8suIK8EcX83mxh852uOQ&usqp=CAU"
  },
  
  {
    id: 5,
    name: "Goku",
    price: 43,
    category: 1,
    disponibility: true,
    originalPack: false,
    description: "Som Goku",
    mark: "Kings",
    product_id: "12345678911",
    peso: 4,
    dimensions: "9cm X 5cm",
    material: "Vinil",
    quantidade: 1,
    imagesDetails: [
      {
        imagem: "1",
        id_product: "12345678911",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDjOUmavaQoZMVCIwttuxsLb5gVA0DrFkkpg&usqp=CAU"
      },
      {
        imagem: "2",
        id_product: "12345678911",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWxv8gmYVqhUtrJEuizx_c54vnrKGrEheWiw&usqp=CAU"
      },
      {
        imagem: "3",
        id_product: "12345678911",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDjOUmavaQoZMVCIwttuxsLb5gVA0DrFkkpg&usqp=CAU"
      },
      {
        imagem: "4",
        id_product: "12345678911",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWxv8gmYVqhUtrJEuizx_c54vnrKGrEheWiw&usqp=CAU"
      }
    ],
    imageMain_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNK7daycbrPBc1_BY-G86MxlgpXrAI-YiPow&usqp=CAU"
  },

  {
    id: 6,
    name: "Qposket",
    price: 158,
    category: 4,
    disponibility: true,
    originalPack: false,
    description: "Direto de Horgwats",
    mark: "HotToys",
    product_id: "12345678910",
    peso: 2,
    dimensions: "14cm X 15 cm",
    material: "Acrilico",
    quantidade: 1,
    imagesDetails: [
      {
        imagem: "1",
        id_product: "12345678910",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgazhGRruPI_2HsMd7jvqXfbPVZHf02E8CzA&usqp=CAU"
      },
      {
        imagem: "2",
        id_product: "12345678910",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDylitFzsdY_lR4jZ70Le7mP5hzcaJDZ2G4g&usqp=CAU"
      },
      {
        imagem: "3",
        id_product: "12345678910",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgazhGRruPI_2HsMd7jvqXfbPVZHf02E8CzA&usqp=CAU"
      },
      {
        imagem: "4",
        id_product: "12345678910",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDylitFzsdY_lR4jZ70Le7mP5hzcaJDZ2G4g&usqp=CAU"
      }
    ],
    imageMain_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSs66RavhdO-uOf900L_ytpP8S2S2OBq62apA&usqp=CAU"
  },
]