import { COLOR_OPTIONS, PAGE_SIZES, PRINT_SIDES } from "./printConfigs";

class PriceCalculator {
    noOfPages = 0;
    colorOption = COLOR_OPTIONS.GREYSCALE;
    noOfCopies = 0;
    pageSizeFormat = PAGE_SIZES.A4;
    printSides = PRINT_SIDES.SINGLE;
    constructor() {
        this.noOfPages = 0;
        this.colorOption = COLOR_OPTIONS.GREYSCALE;
        this.noOfCopies = 0;
        this.pageSizeFormat = PAGE_SIZES.A4;
        this.printSides = PRINT_SIDES.SINGLE;
    }

    setNoOfPages(value) {
        this.noOfPages = value;
        return this; // Enable method chaining
    }
    
    setColorOption(value) {
        this.colorOption = value;
        return this; // Enable method chaining
    }
    
    setNoOfCopies(value) {
        this.noOfCopies = value;
        return this; // Enable method chaining
    }
    
    setPageSizeFormat(value) {
        this.pageSizeFormat = value;
        return this; // Enable method chaining
    }
    
    setPrintSides(value) {
        this.printSides = value;
        return this; // Enable method chaining
    }

    calculate() {
        return 0;
    }
}

export default PriceCalculator;