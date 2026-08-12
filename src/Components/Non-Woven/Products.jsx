import ProductGallery from '../Common/ProductGallery'

const images = import.meta.glob('../../assets/maha-products/Non-woven/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })

const Products = () => <ProductGallery imageModules={images} productType="non-woven" heading="A Non-Woven Bag for Every Commercial Requirement" />

export default Products
