function outer() {
    let hero = "Black Panther";

    function inner() {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp);
    }

    inner();
}

outer();