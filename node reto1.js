function wrapping(gifts) {
    const giftsWrapped = [];
    for (let i = 0; i < gifts.length; i++) {
        console.log(gifts[i]);
        
        giftsWrapped.push(`${ gifts[i] }`)      
     
    }
    return giftsWrapped;

}
const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);