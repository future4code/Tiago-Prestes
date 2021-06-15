import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import App from '../../App';

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

const headers = {
    headers: {
        Authorization: "tiago-prestes-molina"
    }
}

export default App