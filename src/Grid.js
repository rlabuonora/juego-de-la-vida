class Grid {
    constructor(data) {
        this.data = data;
        this.height = data.length;
        this.width = data[0].length; // falla si pasa un ragged array
    }
}

export { Grid };



