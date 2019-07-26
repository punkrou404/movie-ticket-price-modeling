import Age from "../src/age";
import assert from "power-assert";

describe('Age', function(){
    it('0のとき', function() {
        const myInstance: Age = new Age(0);
        assert.ok(myInstance.isInfant() === true);
    });
});