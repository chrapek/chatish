import 'jest-dom/extend-expect';

const originalConsoleError = console.error;
console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
    }
    originalConsoleError(...args);
};