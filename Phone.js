class Phone {
    constructor(phoneName, storageLimit, isAndroid, screenSize, hasheadPhoneJack) {

        this.phoneName = phoneName;
        this.storageLimit = storageLimit;
        this.isAndroid = isAndroid;
        this.screenSize = screenSize;
        this.hashheadPhone = hasheadPhoneJack;
    }

    printAttributes() {
        alert(this.phoneName + "" + this.storageLimit + "" + this.isAndroid + "" + this.screenSize + "" + this.hashheadPhone);
        return this
    }

}


function main() {
    var cellphone1 = new Phone("galaxy", "500TB", "is an Android", "3GB", "has headphoneJack");
    alert(cellphone1.printAttributes())
}

main();