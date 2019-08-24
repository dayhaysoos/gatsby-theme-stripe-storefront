/** @jsx jsx */
import React from 'react';
import {Styled, jsx} from 'theme-ui'

const Sku = ({name, price, image}) => (
    <div>
        <Styled.img src={image}/>
        <Styled.p>{name}</Styled.p>
        <Styled.p>$ {price}</Styled.p>
    </div>
)

export default Sku;