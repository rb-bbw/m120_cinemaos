function item(title, price, description, image) {
    return {
        title: title,
        price: price,
        description: description === undefined ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." : description,
        image: image === undefined ? createImageUrl(title) : image
    }
}
function createImageUrl(term) {
    return "https://source.unsplash.com/300x300/?" + term;
}

export const assortment = {
    snacks: {
        chips: item("Chips", 450),
        nachos: item("Nachos", 450),
        popcorn: item("Popcorn", 450),
        sushi: item("Sushi", 450),
        foo: item("foo", 450),
        bar: item("bar", 450),
    },
    drinks: {
        beer: item("Beer", 450)
    },
};
