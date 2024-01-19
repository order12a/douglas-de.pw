"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.step = void 0;
const test_1 = require("@playwright/test");
/**
 * Decorator that wraps a function with a Playwright test step.
 * Used for reporting purposes.
 *
 * @example
 ```
 import { step } from './step_decorator';
 class MyTestClass {
 @step('optional step name')
 async myTestFunction() {
 // Test code goes here
 }
 }
 ```
 */
function step(message) {
    return function actualDecorator(target, context) {
        function replacementMethod(...args) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const name = message ?? `${this.constructor.name}.${context.name}`;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return test_1.test.step(name, async () => target.call(this, ...args), { box: true });
        }
        return replacementMethod;
    };
}
exports.step = step;
