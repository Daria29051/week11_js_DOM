// Записываем в переменные цены на каждый товар и приводим к числу

const priceHoodie= document.getElementById('item__price_hoodie');
Number(priceHoodie.innerHTML);

const priceDress= document.getElementById('item__price_dress');
Number(priceDress.innerHTML);

const priceJacket= document.getElementById('item__price_jacket');
Number(priceJacket.innerHTML);

const priceCoat= document.getElementById('item__price_coat');
Number(priceCoat.innerHTML);

const priceTrousers= document.getElementById('item__price_trousers');
Number(priceTrousers.innerHTML);

// Считаем сумму всех товаров
const allItemsSummed = Number(priceHoodie.innerHTML) + Number(priceDress.innerHTML) + Number(priceJacket.innerHTML) + Number(priceCoat.innerHTML) + Number(priceTrousers.innerHTML);

// Вставляем полученное значение в элемент
let totalSum = document.querySelector('.count__sum');
totalSum.innerHTML = `${allItemsSummed} руб.` ;

// Функция, вычитающая 20% от общей стоимости

const countDiscountedSum =() => {
    const discount = 0.2
    // Общая сумма со скидкой
    const discountedSum = allItemsSummed - (allItemsSummed * discount);
    totalSum.innerHTML = `${discountedSum} руб.`;

// Цена худи со скидкой
    const priceHoodieDiscounted = Number(priceHoodie.innerHTML) - (Number(priceHoodie.innerHTML) * discount );
    priceHoodie.innerHTML  = `${priceHoodieDiscounted}`;

// Цена платья со скидкой
    const priceDressDiscounted = Number(priceDress.innerHTML) - (Number(priceDress.innerHTML) * discount );
    priceDress.innerHTML  = `${priceDressDiscounted}`;

// Цена жакета со скидкой
    const priceJacketDiscounted = Number(priceJacket.innerHTML) - (Number(priceJacket.innerHTML) * discount );
    priceJacket.innerHTML  = `${priceJacketDiscounted}`;

// Цена пальто со скидкой
const priceCoatDiscounted = Number(priceCoat.innerHTML) - (Number(priceCoat.innerHTML) * discount );
priceCoat.innerHTML  = `${priceCoatDiscounted}`;

// Цена брюк со скидкой
const priceTrousersDiscounted = Number(priceTrousers.innerHTML) - (Number(priceTrousers.innerHTML) * discount );
priceTrousers.innerHTML  = `${priceTrousersDiscounted}`;
}
