import axios from 'axios';

import Login from "./Login";
import { isTouchCapable } from 'react-select/src/utils';


jest.mock('axios');

test('Should log in user', () =>{
    const userIds = [{userId: 60}]
    const resp = {data: userIds}

    axios.get.mockResolvedValue(resp)
    
}) 