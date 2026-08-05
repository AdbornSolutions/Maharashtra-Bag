import ProductGallery from '../Common/ProductGallery'

const images = import.meta.glob('../../assets/maha-bags-products/Bopp/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })

const Products = () => <ProductGallery imageModules={images} productType="BOPP" heading="A BOPP Bag for Every Commercial Requirement" />

export default Products
