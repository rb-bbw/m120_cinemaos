function foodItem(title, price, description, image) {
    return {
        title: title,
        price: price,
        description: description === undefined ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." : description,
        image: image === undefined ? randomImage(title) : image
    }
}
function randomImage(term) {
    return "https://source.unsplash.com/300x300/?" + term;
}

export const assortment = {
    snacks: {
        chips: foodItem("Chips", 450),
        nachos: foodItem("Nachos", 450),
        popcorn: foodItem("Popcorn", 450),
        sushi: foodItem("Sushi", 450),
        foo: foodItem("foo", 450)
    },
    drinks: {
        beer: foodItem("Beer", 450)
    },
};
