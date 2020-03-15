import ImgBlock from './ImgBlock'

const sketch = (p) => {
    let img, loc, array, index = 1;
    const path = './puppy.jpeg'

    p.preload = () => {
        img = p.loadImage(path)
    }

    p.setup = () => {
        p.createCanvas(img.width * 2,img.height);
        p.pixelDensity(1);
    } 

    p.draw = () => {
        p.background(255);
        p.image(img, img.width,0);
    }

    p.partition = (img, amountX, amountY) => {
        let array = [], index, newBlock = p.createImage(img.width/amountX, img.height/amountY);
        for (let x = 0; x < img.width; x++) {
            for (let y = 0; y < img.height; y++) {
                index = (x + y * img.width) * 4;
                
            }
        }
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