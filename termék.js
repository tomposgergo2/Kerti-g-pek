class Termék {
    constructor(row) {
        const splitted = row.split(";")
        this.név = splitted[0]
        this.ár = Number(splitted[1])
        
    }

    static feltöltadat(data) {
        let adatok = []
        data.forEach(element => {
            adatok.push(new Termék(element))
        });
        return adatok
    }
}

export { Termék }