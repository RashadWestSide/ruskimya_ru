import React from 'react'
import { Card, Col, ListGroup } from 'react-bootstrap'

const ProductItem = ({product}) => {
  return (
    <Col key={product.id}>
          <Card border='info' className='mt-5 mb-2' bg='light' style={{borderRadius: '0.8rem', boxShadow: '0 1px 1px 2px deepskyblue'}}>
            <Card.Img variant="top" height={300} src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className='text-black-50'>
                {product.desc}
              </Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
                <ListGroup.Item>Производитель: {product.manufacturer}</ListGroup.Item>
                <ListGroup.Item>Фасовка: {product.packing}</ListGroup.Item>
                <ListGroup.Item variant='success'>Цена (руб.): {product.price}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
  )
}

export default ProductItem
