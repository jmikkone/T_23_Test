import React from'react';
import TodoTable from'./TodoTable';
import { render} from'@testing-library/react';
import'@testing-library/jest-dom/extend-expect';


test('renderstodotable', () =>  {
    const row= [
        {desc: 'Lunch with Elsa', date:'17.1.2021'}]
        
        const todotable= render(<TodoTable todos={row  } /> );
        
        expect(todotable.container).toHaveTextContent('Lunch with Elsa');
    })