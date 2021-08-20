class sideBarCustomPoject {

    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    get name(){
        return this._name;

    }

    set name(data){
        this._name = data;
    }

    get color(){
        return this._color;

    }

    set color(data){
        this._color = data;
    }
}

export {sideBarCustomPoject};