import React from "react";
import renderer from 'react-test-renderer';
import { ProductImage } from "../../src/components/ProductImage";
import { ProductCard } from "../../src/components/ProductCard";
import { product2 } from "./data/products";


describe('ProductImage', () => {
    test('Debe mostrar la imagen en el snapshot', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://hola.png" className="custom-img" />
        );

        expect( wrapper.toJSON() ).toMatchSnapshot()
    });

    test('Debe de mostrar el componente con la imagen del producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot()
    });
});
