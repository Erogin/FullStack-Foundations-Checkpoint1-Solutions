function rightTriangle(rows){
    let string = "";
    let triangle = "*";
    for(let i = rows; i > 0; i--){
        for(let j = i; j > 0; j--){
            string += triangle;
        }
        string += "\n";
    } 
    return string.slice(0, -1);
}