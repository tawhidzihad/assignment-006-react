import Card from "../Main/UI/Card";

const OurProducts = ({ productsData }) => {
	// console.log(productsData);
	return (
		<div className="grid p-5 lg:p-0 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto mb-20">
			{productsData.map((product) => (
				<Card key={product.id} product={product}></Card>
			))}
		</div>
	);
};

export default OurProducts;
