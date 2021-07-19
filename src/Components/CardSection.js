import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
           <Card cardImg="https://images.unsplash.com/photo-1603664454146-50b9bb1e7afa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9yYW5nZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"cardTitle="Orange" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pear"/>
           <Card cardImg="https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VhdmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" cardTitle="Guava" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Apple"/>
           <Card cardImg="https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" cardTitle="Mango" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pineapple"/>
        </div>
      </div>
    </section>
  )
}
export default CardSection