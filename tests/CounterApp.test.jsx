
import { fireEvent, render, screen } from "@testing-library/react";
import {CounterApp} from "../src/CounterApp.jsx";



describe('Pruebas en CounterApp.jsx', () => {

    const value = 10;

    test('debe hacer match con el snapshot', () => {

        const {container} = render(<CounterApp

            value={value}
        
        />);
    
        expect(container).toMatchSnapshot();
    

    });

    test('el value que se muestra debe ser 100', () => {

        const {get} = render(<CounterApp

            value={value}

        />);


        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('10');

    });


    test('debe incrementar con el boton +1', () => {

        render(<CounterApp

            value={value}

        />);

        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();

    });
    

    test('debe decrementar con el boton -1', () => {

        render(<CounterApp

            value={value}

        />);

        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();

    });


    test('debe de funcionar el boton de reset', () => {

        render(<CounterApp

            value={value}

        />);

        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));

        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}));

        expect(screen.getByText('10')).toBeTruthy();

    });



});

