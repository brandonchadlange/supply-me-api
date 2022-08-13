export class CreateProductRequest {
  projectId: number;
  description: string;
}

// In order to achieve optimum price comparisons against suppliers
// Products should have variants
// A variant is achieved when a products attribute differs on a property other than suppler (e.g color, size)
// A tag is created against the product for typical search terms not related to any variation on the product (e.g headphones, wirless)
// A tag and variant can be used interchangeably if a new variant is required
// (e.g the manufacturer introuduces a wired variant of the headphones then the wireless tag can be removed and a wired variant can be added)
// TODO CREATE INVISIBLE TAGS FROM DESCRIPTION
// TODO CREATE Variants against a product

interface Supplier {
  name: string;
}

interface Product {
  description: string;
  tags?: Tag[];
}

interface ProductVariant {
  product: Product;
  description: string;
  attributes: AttributeValue[];
  tags?: Tag[];
}

interface SupplierProductVariant {
  supplier: Supplier;
  variant: ProductVariant;
  price: number;
}

interface Attribute {
  name: string;
}

interface AttributeValue {
  attribute: Attribute;
  value: string;
}

interface Tag {
  description: string;
}

const takealot: Supplier = {
  name: 'Takealot',
};

const evetech: Supplier = {
  name: 'Evetech',
};

const headphones: Tag = {
  description: 'headphones',
};

const microphone: Tag = {
  description: 'microphone',
};

const bluetooth: Tag = {
  description: 'bluetooth',
};

const logitech_g435: Product = {
  description: 'Logitech G435',
  tags: [headphones, microphone, bluetooth],
};

const logitech_g432: Product = {
  description: 'Logitech G432',
  tags: [headphones, bluetooth],
};

const razer_kraken: Product = {
  description: 'Razer Kraken',
  tags: [headphones],
};

const color: Attribute = {
  name: 'color',
};

const bluetoothattr: Attribute = {
  name: 'bluetooth',
};

const white: AttributeValue = {
  attribute: color,
  value: 'white',
};

const black: AttributeValue = {
  attribute: color,
  value: 'black',
};

const blue: AttributeValue = {
  attribute: color,
  value: 'blue',
};

const has_bluetooth: AttributeValue = {
  attribute: bluetoothattr,
  value: 'bluetoothe',
};

const no_bluetooth: AttributeValue = {
  attribute: bluetoothattr,
  value: 'wired',
};

const logitech_g435_white: ProductVariant = {
  product: logitech_g435,
  description: 'Logitech G435 - white',
  attributes: [white],
};

const logitech_g435_blue: ProductVariant = {
  product: logitech_g435,
  description: 'Logitech G435 - blue',
  attributes: [blue],
};

const logitech_g432_black: ProductVariant = {
  product: logitech_g435,
  description: 'Logitech G435 - black',
  attributes: [black],
};

const razer_kraken_bt: ProductVariant = {
  product: razer_kraken,
  description: 'razer_kraken - bt',
  attributes: [black, has_bluetooth],
};

const razer_kraken_wired: ProductVariant = {
  product: razer_kraken,
  description: 'razer kraken - wired',
  attributes: [black, no_bluetooth],
};

const evetech_logitech_g435_white: SupplierProductVariant = {
  supplier: evetech,
  variant: logitech_g435_white,
  price: 1399,
};

const evetech_logitech_g435_blue: SupplierProductVariant = {
  supplier: evetech,
  variant: logitech_g435_blue,
  price: 1549,
};

const takealot_logitech_g435_white: SupplierProductVariant = {
  supplier: takealot,
  variant: logitech_g435_white,
  price: 1759,
};

const takealot_logitech_g432_black: SupplierProductVariant = {
  supplier: takealot,
  variant: logitech_g432_black,
  price: 1189,
};

const evetech_logitech_g432_black: SupplierProductVariant = {
  supplier: evetech,
  variant: logitech_g432_black,
  price: 1099,
};

const products: SupplierProductVariant[] = [
  evetech_logitech_g435_white,
  evetech_logitech_g435_blue,
  takealot_logitech_g435_white,
  takealot_logitech_g432_black,
  evetech_logitech_g432_black,
];

function find(search: string) {
  // Strategies -> Tag/Description/Attributes
  const productsWithTag = products.filter((product) => {
    const tagMatches = product.variant.tags.filter((tag) => {
      return (
        tag.description.includes(search) || search.includes(tag.description)
      );
    });

    return tagMatches.length > 0;
  });
}

// find('headphone'); // -> All
// find('logitech g435 white'); // -> evetech_logitech_g435_white, evetech_logitech_g435_blue, takealot_logitech_g435_white
// find('headphone with microphone'); // -> logitech_g435

// milk, coffee, cakes

// milk -> clover, douglasdale, pnp, woolworths, spar
// coffee -> tribeca
// cakes -> aunty june, aunty may, pnp, woolworths

// milk - clover;

// lizanne orders milk but clover is out of stock
// how can we then get the second best milk?

// clover -> rating
// douglasdale -> rating
// pnp -> rating

// creates order give me available milk with the highest rating and lowest wait time
// orders cake, quality cheapest longest lasting
// coffee -> order

// 2 day basket -> bread, milk
// weekly basket -> cake
// monthly basket -> sugar

// create templates for strategies
