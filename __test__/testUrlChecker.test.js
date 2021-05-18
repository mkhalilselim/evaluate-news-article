import 'babel-polyfill'
import { checkForUrl } from '../src/client/js/urlChecker'

describe('Test url checker functionality', () => {
    test('Testing the urlChecker function defined or not', () => {
        expect(checkForUrl).toBeDefined();
    })
    test('Testing if checkForUrl is a function or not', () => {
        expect(typeof checkForUrl).toBe('function'); 
    })
});