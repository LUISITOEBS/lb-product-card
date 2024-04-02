import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product1 = {
  id: '1',
  title: 'Coffee Mug!',
  image: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard
        product={ product1 }
        initialValues={{
            count: 4,
            maxCount: 10
        }}
    >
        {
            ( { reset, count, increaseBy, isMaxCountReached } ) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
        
    </ProductCard>
        </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
