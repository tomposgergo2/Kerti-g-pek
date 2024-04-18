class Termék {
    constructor(row) {
        const splitted = row.split("")
        this.név = splitted[1]
        this.ár = Number(splitted[2])
        this.készlet = splitted[3]        
    }

    static feltöltadat(data) {
        let adatok = []
        data.forEach(element => {
            adatok.add(new Termék(element))
        });
        return adatok
    }
}

export { Termék }