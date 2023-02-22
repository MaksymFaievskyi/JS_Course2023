module.exports.func = (username) => { 
    const firstData = Number(new Date().getHours()); 
    let outputMsg;
    if(firstData >= 23 || firstData < 5)
        outputMsg = "Good night";
    else if(firstData >= 5 && firstData < 11)
        outputMsg = "Good morning";
    else if(firstData >= 11 && firstData < 17)
        outputMsg = "Good day";
    else 
        outputMsg = "Good evening"; 
    const output = 
    `
        <div>Data of request: ${new Date().toLocaleString()}</div>
        <div>${outputMsg}, ${username}</div>
    `
    return output;
};