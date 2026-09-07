const times = ["Corinthians", "Palmeiras", "São Paulo", "Santos"]

for (let i = 0; i < times.length; i +=1) {
    for (let j = 0; j < times.length; j +=1) {
        if(i !== j) {
            console.log(`${times[i]} X ${times[j]}`)
        }
    }
}
