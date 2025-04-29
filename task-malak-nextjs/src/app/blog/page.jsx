export async function getData() {
  const res = await fetch('https://dummyjson.com/products');
  return res.json();
}

export default async function Blog() {
  const data = await getData();
  const products = data.products;

  // طباعة قائمة المنتجات
  console.log(products);

  const defaultImage = 'https://media.istockphoto.com/id/1140691099/photo/young-woman-using-a-laptop-computer-graphic-designer-ux-design.jpg?s=1024x1024&w=is&k=20&c=hZgDbYflPLTgFO-u1QbMpaio3Jii8LMqJrAXvuTl1Dc=';

  return (
    <>
      <div className="w-full text-center mt-6">
        <h2 className="text-3xl font-bold text-gray-800">
          HANDPICKED FOR YOU
          <br />
          Top seller in the week
        </h2>
      </div>
      <div className="px-2 py-20 w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            // طباعة الصورة الأولى لكل منتج
            console.log( "3333333333"+ product.images && product.images[0]);

            return (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg border border-gray-300 hover:border-black overflow-hidden transition-all duration-300 group"
              >
                <div
                  className="h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: product.images && product.images[0]
                      ? `url(${product.images[0]})`
                      : 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div className="py-4 px-6">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
                    {product.title}
                  </h3>
                  {/* <p className="mt-2 text-gray-600">{product.description}</p> */}
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
