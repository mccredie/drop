
import { DROP_VALUES, canDrop, drop } from './drop';

const ALL_UP = DROP_VALUES.reduce((acc, value) => ({...acc, [value]: true}), {});
const ALL_DOWN = DROP_VALUES.reduce((acc, value) => ({...acc, [value]: false}), {});

describe('canDrop', () => {
    describe('all up', () => {
        DROP_VALUES.map((value) => {
            it('should return true for roll 12 drop ' + value, () => {
                expect(canDrop(12, ALL_UP, value)).toBeTruthy()
            });
        });

        it('should return false for roll 12 drop 0', () => {
            expect(canDrop(12, ALL_UP, 0)).toBeFalsy()
        });

        it('should return false for roll 12 drop 10', () => {
            expect(canDrop(12, ALL_UP, 10)).toBeFalsy()
        });

        it('should return false for roll 5 drop 6', () => {
            expect(canDrop(5, ALL_UP, 6)).toBeFalsy();
        });
    });

    describe('all down', () => {
        DROP_VALUES.map((value) => {
            it('should return true for roll 12 drop ' + value, () => {
                expect(canDrop(12, ALL_DOWN, value)).toBeFalsy();
            });
        });
    });

    it('should return true if roll and drop are equal', () => {
        expect(canDrop(5, ALL_UP, 5)).toBeTruthy();
    })

    describe('5 down', () => {
        it('should return false for roll 12 drop 5', () => {
            expect(canDrop(12, drop(ALL_UP, 5), 5)).toBeFalsy();
        });
    });
});

