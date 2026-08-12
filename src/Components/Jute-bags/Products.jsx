import ProductGallery from '../Common/ProductGallery'

const images = import.meta.glob('../../assets/maha-products/Jute/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })

const Products = () => <ProductGallery imageModules={images} productType="jute" heading="A Jute Bag for Every Commercial Requirement" />

export default Products
