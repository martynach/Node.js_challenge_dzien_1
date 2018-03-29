//Twój kod

process.argv.forEach(elem => {
    const elemInt = parseInt(elem);
    if (isNaN(elemInt)) {
        return;
    }

    setTimeout(() => {
        console.log(elem)
    }, elemInt * 1000);

});
