export function formatPrice(price) {
    return new Intl.NumberFormat(
        'de-CH',
        {style: 'currency', currency: 'CHF'})
        .format(price / 100);
}
