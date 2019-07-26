import Age from "./age";

export default class Price {
    private static BASE: number = 1800;

    constructor(age: Age) {
        if(age.isInfant()) {
            return 0;
        }

        return Price.BASE;
    }
}