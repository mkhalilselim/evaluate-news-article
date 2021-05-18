import "babel-polyfill";
import { handleSubmit } from "../src/client/js/formHandler"
 
describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
    test('Testing if handleSubmit is a function or not', () => {
        expect(typeof handleSubmit).toBe('function'); 
    })
});