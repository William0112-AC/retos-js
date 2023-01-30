distributeGifts = (regalos, renos) => {
    let pesoMax = renos.join("").length * 2
    let pesoCaja = regalos.join("").length
    return ((pesoMax / pesoCaja) >> 0)
  }
  function distributeGifts(packOfGifts, reindeers) {
    let pesoMax = reindeers.join("").length * 2
    let pesoCaja = packOfGifts.join("").length
    return (pesoMax / pesoCaja) >> 0
  }
  
  module.exports = distributeGifts