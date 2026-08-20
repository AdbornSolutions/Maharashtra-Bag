import ProductGallery from '../Common/ProductGallery'

const images = import.meta.glob('../../assets/maha-bags-products/Canvas/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })

const Products = () => <ProductGallery imageModules={images} productType="canvas" heading="A Canvas Bag for Every Commercial Requirement" />

export default Products
