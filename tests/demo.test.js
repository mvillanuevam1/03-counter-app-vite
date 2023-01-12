
describe('Pruebas en <DemoComponent', () => {

    test( 'Esta prueba no puede fallar', () => {
        const message1 = 'Hola Mundo';

        const message2 = message1.trim();

        expect( message1 ).toBe( message2 );
    })


})