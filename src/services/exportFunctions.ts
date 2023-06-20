export function formatPrice(price: number) {
    const priceString = price.toString();  
    const groups = [];
    let index = priceString.length;
    while (index > 0) {
      groups.unshift(priceString.substring(Math.max(0, index - 3), index));
      index -= 3;
    }
      return groups.join(" ");
  }