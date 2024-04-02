import React from "react";
import renderer from "react-test-renderer";
import { ProductTitle } from '../../src/components/ProductTitle';
import { product } from "./data/products";
import { ProductCard } from "../../src/components/ProductCard";


describe('ProductTitle', () => {
    test('Debe mostrar el componente correctamente con el título personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class"/>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot()
    });

    test('Debe de mostrar el componente con el nombre del producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={ product }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect( wrapper.toJSON() ).toMatchSnapshot()
    });
});
