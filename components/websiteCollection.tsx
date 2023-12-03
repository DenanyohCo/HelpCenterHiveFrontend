import React from 'react'
import CardItem from './cardItem'

type Props = {}

export default function WebsiteCollection({ }: Props) {
    return (
        <>
            <section className='mt-6'>
                <div className='container mx-auto'>
                    <CardItem />
                </div>      
            </section>
        </>
    )
}