
describe( 'Pruebas en <DemoComponent />', () => {

    test('Este prueba no debe de fallar', () => { 
        
        //1. Inicializacion
    
        const message1 = 'Hola mundo'
    
        //2. Estímulo
        const message2 = message1.trim()
    
    
        //3. Observar el comportamiento.... esperado
        expect( message1 ).toBe( message2 )
    
    
     })

})
