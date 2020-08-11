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
        img_url: "https://images-americanas.b2w.io/produtos/01/00/img7/236145/3/236145329_1SZ.jpg"
      },
      {
        imagem: "2",
        id_product: "1234567",
        img_url: "https://images-americanas.b2w.io/produtos/01/00/img7/236145/3/236145329_2SZ.jpg"
      },
      {
        imagem: "3",
        id_product: "1234567",
        img_url: "https://images-americanas.b2w.io/produtos/01/00/img7/236145/3/236145329_3SZ.jpg"
      },
      {
        imagem: "4",
        id_product: "1234567",
        img_url: "https://images-shoptime.b2w.io/produtos/01/00/sku/43130/4/43130408_3SZ.jpg"
      }
    ],
    imageMain_url: "https://images-americanas.b2w.io/produtos/01/00/img/1622947/2/1622947207_1GG.jpg"
  },

  {
    id: 2,
    name: "Hinata",
    price: 120,
    category: 3,
    disponibility: true,
    originalPack: false,
    description: "Hinata Hyuga",
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
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h82/hb0/h00/h00/11196851126302.jpg"
      },
      {
        imagem: "2",
        id_product: "12345678",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/ha1/ha9/h00/h00/11196851453982.jpg"
      },
      {
        imagem: "3",
        id_product: "12345678",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h37/hf9/h00/h00/11196851781662.jpg"
      },
      {
        imagem: "4",
        id_product: "12345678",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h22/ha5/h00/h00/11196852109342.jpg"
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
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h6d/h8f/h00/h00/17366827204638.jpg"
      },
      {
        imagem: "2",
        id_product: "123456789",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h6f/h27/h00/h00/17366826876958.jpg"
      },
      {
        imagem: "3",
        id_product: "123456789",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h68/h8a/h00/h00/17366837493790.jpg"
      },
      {
        imagem: "4",
        id_product: "123456789",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/hc0/h36/h00/h00/17366826549278.jpg"
      }
    ],
    imageMain_url: "https://static.carrefour.com.br/medias/sys_master/images/images/hc7/hd2/h00/h00/17366837821470.jpg"
  },

  {
    id: 89,
    name: "Naruto",
    price: 119,
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
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/he0/hb1/h00/h00/16994828517406.jpg"
      },
      {
        imagem: "2",
        id_product: "12345678910",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h10/h0f/h00/h00/16994828189726.jpg"
      },
      {
        imagem: "3",
        id_product: "12345678910",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/hda/h9b/h00/h00/16994827862046.jpg"
      },
      {
        imagem: "4",
        id_product: "12345678910",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/hf9/hc4/h00/h00/16994827206686.jpg"
      }
    ],
    imageMain_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShraFo_Tf29pZqUU8suIK8EcX83mxh852uOQ&usqp=CAU"
  },
  
  {
    id: 5,
    name: "Goku",
    price: 4,
    category: 1,
    disponibility: true,
    originalPack: false,
    description: "Eu sou o Goku!",
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
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/hf2/h7f/h00/h00/17423946186782.jpg"
      },
      {
        imagem: "2",
        id_product: "12345678911",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/he2/h32/h00/h00/17423945531422.jpg"
      },
      {
        imagem: "3",
        id_product: "12345678911",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h8f/h8b/h00/h00/17423944876062.jpg"
      },
      {
        imagem: "4",
        id_product: "12345678911",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h25/hdb/h00/h00/17423944548382.jpg"
      }
    ],
    imageMain_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNK7daycbrPBc1_BY-G86MxlgpXrAI-YiPow&usqp=CAU"
  },

  {
    id: 6,
    name: "Harry  Potter",
    price: 129,
    category: 4,
    disponibility: true,
    originalPack: false,
    description: "Diretamente de Hogwarts, Harry James Potter.",
    mark: "HotToys",
    product_id: "12345678910",
    peso: 50,
    dimensions: "4cm X 15 cm",
    material: "Acrilico",
    quantidade: 1,
    imagesDetails: [
      {
        imagem: "1",
        id_product: "12345678910",
        img_url: "https://www.casasbahia-imagens.com.br/agro-industria-comercio/equipamentospararestauranteselojas/acessoriosparalojas/1504257424/1371448861/boneco-harry-potter-q-posket-ii-1504257424.jpg"
      },
      {
        imagem: "2",
        id_product: "12345678910",
        img_url: "https://images-submarino.b2w.io/produtos/01/00/img/1517344/2/1517344236_1GG.jpg"
      },
      {
        imagem: "3",
        id_product: "12345678910",
        img_url: "https://static.carrefour.com.br/medias/sys_master/images/images/h73/h62/h00/h00/17495917461534.jpg"
      },
      {
        imagem: "4",
        id_product: "12345678910",
        img_url: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-7667322/fast_tech_harry_potter_qposket_action_figure_full01_qnacm4.jpg"
      }
    ],
    imageMain_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSs66RavhdO-uOf900L_ytpP8S2S2OBq62apA&usqp=CAU"
  },

  {
    id: 7,
    name: "Bulma",
    price: 149,
    category: 4,
    disponibility: true,
    originalPack: true,
    description: "Bulma Briefs",
    mark: "Banpresto",
    product_id: "12345678910",
    peso: 90,
    dimensions: "14cm X 15 cm",
    material: "Acrilico",
    quantidade: 1,
    imagesDetails: [
      {
        imagem: "1",
        id_product: "12345678910",
        img_url: "https://images-shoptime.b2w.io/produtos/01/00/img/50323/8/50323867_1SZ.jpg"
      },
      {
        imagem: "2",
        id_product: "12345678910",
        img_url: "https://images-shoptime.b2w.io/produtos/01/00/img/50323/8/50323867_5SZ.jpg"
      },
      {
        imagem: "3",
        id_product: "12345678910",
        img_url: "https://www.dhresource.com/0x0/f2/albu/g7/M01/48/73/rBVaSVvEDrSAfXuLAAHiUanK8g4552.jpg"
      },
      {
        imagem: "4",
        id_product: "12345678910",
        img_url: "https://images-shoptime.b2w.io/produtos/01/00/img/50323/8/50323867_3SZ.jpg"
      }
    ],
    imageMain_url: "https://images-shoptime.b2w.io/produtos/01/00/img/50323/8/50323867_1SZ.jpg"
  },
]