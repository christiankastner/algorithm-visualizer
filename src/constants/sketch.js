const sketch = (p) => {
    let img, loc, sorted, index = 1;
    const path = './puppy.jpeg'

    p.preload = () => {
        img = p.loadImage(path)
        sorted = p.loadImage(path)
    }

    p.setup = () => {
        p.createCanvas(img.width * 2,img.height)
        sorted.loadPixels()
        sorted.updatePixels()
    } 

    p.draw = () => {
        p.background(255)
        if (index < sorted.pixels.length) {
            iterateMergeSort
            sorted.updatePixels()
            index *= 2;
        }
        p.image(img, 0,0)
        p.image(sorted, img.width, p.random(0,100))
    }
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

const randomize = (array) => {
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