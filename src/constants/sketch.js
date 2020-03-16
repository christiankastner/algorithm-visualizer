const sketch = (p) => {
    let img, loc, array = [], index = 1, amountX = 50, amountY = 50;
    let i = 0;
    let blockWidth, blockHeight;
    const path = './puppy.jpg'

    p.swapPixels = (pixelArray,i,j) => {
        swap(pixelArray[i], pixelArray[j])
        swap(pixelArray[i + 1], pixelArray[j + 1])
        swap(pixelArray[i + 1], pixelArray[j + 1])
    } 

    p.preload = () => {
        img = p.loadImage(path)
    }

    p.setup = () => {
        img.resize(img.width - img.width % amountX, img.height - img.height % amountY)
        blockWidth = img.width / amountX
        blockHeight = img.height / amountY
        p.createCanvas(img.width * 2,img.height);
        array = p.partition(img);
        p.background(255);
        p.image(img, img.width, 0);
        shuffle(array)
    } 

    p.draw = () => {
        if (i < array.length) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j + 1].index < array[j].index) {
                    let t = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = t;
                }
            }
            i++;
        } else {
            p.noLoop()
        }
        for (let i = 0; i < amountX; i++) {
            for (let j = 0; j < amountY; j++) {
                p.image(array[i + j * amountX].img, i * blockWidth, j * blockHeight)
            }
        }
    }

    p.partition = (img) => {
        let array = []
        let newBlock
        for (let j = 0; j < amountY; j++) {
            for (let i = 0; i < amountX; i++) {
                newBlock = img.get(i * blockWidth, j * blockHeight, blockWidth, blockHeight)
                array.push({img: newBlock, index: i + j * amountX})
            }
        }
        return array
    }
}

const swap = (array, i, j) => {
    let t = array[i];
    array[i] = array[j];
    array[j] = array[t];
}

const iterateMergeSort = (index, array, measure) => {
    let result = [], left, right;
    for (let i = 0; i < array.length; i += index * 2) {
        left = array.slice(i,i + index)
        right = array.slice(i + index, i + 2 * index)
        result.push(...merge(left, right, measure))
    }
    return result
}

const merge = (a, b, measure) => {
    let i = 0, j = 0, result = [];
    while(i < a.length && j < b.length) {
        if (measure(a[i],b[j])) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j])
            j++;
        }
    }
    if (i === a.length) {
        result.push(...b.slice(j))
    } 
    if (j === b.length) {
        result.push(...a.slice(i))
    }
    return result
}

const shuffle = (array) => {
    let n = array.length, t, i;
    while (n) {
        i = Math.random() * n-- | 0; // 0 ≤ i < n
        t = array[n];
        array[n] = array[i];
        array[i] = t;
    }
  return array;
}

export default sketch