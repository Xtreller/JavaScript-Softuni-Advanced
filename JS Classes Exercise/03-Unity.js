class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }
    unite(R){
        if(R instanceof Rat){
        this.unitedRats.push(R)}
    }
    getRats(){
     return this.unitedRats;
    }
    toString(){
        let string = `${this.name}\n`;
        for (let rat of this.unitedRats){
            string += `##${rat.name}\n`;
        }
        return string;
    }
}

