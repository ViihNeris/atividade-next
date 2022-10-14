import React from 'react'
import styled from '@emotion/styled';

const H2 = styled.h2(`
 font-size: 1.6em;
 margin-top: 0;
 color: #FFF;
 text-align: center;  
`
)

export default function H2Tag() {
    return (
        <H2>Site criado em TypeScript publicado na Vercel.</H2>
    )
}