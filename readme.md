# React Magic Product Card

[DEMO](https://pianorockcover.github.io/react-magic-product-card/)

See in action: https://pianorockcover.github.io/lightshops/

Well customizable and lightweight product card React component

<img src="https://github.com/pianorockcover/react-magic-product-card/raw/master/screenshots/1.jpg" width="200" alt="Screenshot" />
<br />
<img src="https://github.com/pianorockcover/react-magic-product-card/raw/master/screenshots/3.jpg" width="500" alt="Screenshot" />

## Usage

```css
:root {
  --rmpc-default: 68, 68, 68;
  --rmpc-primary: 11, 139, 241;
  --rmpc-contrast: 233, 30, 99;
  --rmpc-warning: 246, 147, 5;
  --rmpc-success: 46, 204, 113;
}
```

```tsx
import 'react-magic-product-card/lib/css/index.css'
import { MagicProductCard } from 'react-magic-product-card'

<MagicProductCard
  images={[{ src: 'http://link/to/image.png' }]}
  category={{ title: 'Category', href: '#' }}
  name='Product Title'
  href='#'
  price='12000 THB'
  buyLabel='Buy'
  addedLabel='Added'
  onBuyClick={() => {}}
  onInCompareClick={() => {}}
  onInFavouriteClick={() => {}}
/>

```