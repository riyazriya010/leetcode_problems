var flipAndInvertImage = function(image) {
    let flippedImage = image.map(v => v.reverse())
    flippedImage.forEach(img => {
        for(let i = 0; i <  img.length; i++){
            if(img[i] === 0){
                img[i] = 1
            }else{
                img[i] = 0
            }
        }
    })
    return flippedImage
};
const image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
console.log(flipAndInvertImage(image));