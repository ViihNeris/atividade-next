import React from 'react'
import styled from '@emotion/styled';

const H1 = styled.h1(`
 color: #f9e7f9;
 font-size: 3em;
 margin-top: 0;
 font-weight: bold; 
 text-shadow:  1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
 text-align: center;  
`
)

export default function H1Tag() {
    return (
        <H1>Executando React com Next.JS</H1>
    )
}
