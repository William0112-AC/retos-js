function wrapping (gifts) {
    gifts.map(gifts =>{
        const papel = "*".repeat(gifts.length + 2)
        return papel + "\n" + "*" + gifts + "*" + "\n" + papel
    })
}
    // *****
    // *cat*
    // *****
    wrapping(['cat', 'game', 'socks'])
    module.exports = wrapping;