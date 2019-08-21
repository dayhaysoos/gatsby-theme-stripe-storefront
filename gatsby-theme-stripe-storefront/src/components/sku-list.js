import React from 'react';
import { Link } from 'gatsby';

const SkuList = ({skus}) => (
    <>
      <h1>Products</h1>
      <ul>
          {skus.map(sku => (
              <li key={sku.id}>
                  <strong>
                      <Link to={sku.slug}>
                          {sku.name}
                      </Link>
                  </strong>
                  <p>{sku.price}</p>
              </li>
          ))}
      </ul>
    </>
)


export default SkuList;