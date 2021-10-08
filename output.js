fs.writeFile('ex2.svg', svg, function (err) {
    if (err) {
        return console.error(err);
    }
});