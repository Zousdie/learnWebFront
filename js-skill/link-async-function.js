function Do(arr = [], index = 0) {
    if (!arr.length) throw new Error('empty array')

    if (index < arr.length) {
        arr[index](r => r && Do(arr, index + 1))
    }
}

const fArr = []
for (let i = 0; i < 10; i++) {
    fArr[i] = callback => {
        setTimeout(() => {
            console.log(`do ${i}`)
            callback && callback(true)
        }, 1500)
    }
}

Do(fArr)
