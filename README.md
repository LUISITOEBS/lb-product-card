# LB-PRODUCT-CARD

Este es un paquete de pruebas de despliegue en NPM

### Luis Ballesteros

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'lb-product-card';

const product = {
    id: '1',
    title: 'Coffee Mug',
    image: './coffee-mug.png'
} //Example product
```


```
 <ProductCard
    product={ product }
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

```