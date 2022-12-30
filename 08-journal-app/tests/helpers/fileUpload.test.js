import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload"

cloudinary.config({
  cloud_name: 'dc8tuofet',
  api_key: '168346875311863',
  api_secret: 'pvoJN0TiL541VTT57NYYVMicb_I',
  secure: true
})

describe('Pruebas en fileUpload', () => {
  test('Debe subir el archivo correctamente a cloudinary', async() => { 
    
    const imageUrl = 'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__340.jpg'
    const resp = await fetch( imageUrl )
    const blob = await resp.blob()
    const file = new File([blob], 'foto.jpg')

    const url = await fileUpload( file )
    expect( typeof url ).toBe('string')

    const segments = url.split('/')
    const imageId = segments[ segments.length - 1 ].replace('.jpg', '')

    await cloudinary.api.delete_resources(['journal/' + imageId], {

      resource_type: 'image',

    } )

   })

   test('Debe delvolver null', async() => {
    
    const file = new File([], 'foto.jpg')

    const url = await fileUpload( file )
    expect( url ).toBe(null)

   })
   
})
