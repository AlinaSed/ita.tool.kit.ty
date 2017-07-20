'use strict';

describe('lounchTestData method', function () {
    let app = new App();

    lounchTestData(app.groupList, app.settings);

    it('Should add 3 groups to app', function () {
        expect(app.groupList.length).toBe(3);
    });

    describe('Should add settings to app', function () {    
            it('Should create 3 directions', function () {
                expect(app.settings.directionList.length).toBe(3);
            });
    
            it('The 2nd group name should be Dp-112-go', function () {
                expect(app.groupList[1].name).toBe('Dp-112-go');
            });
    
            it('The 1st direction name should be UI', function () {
                expect(app.settings.directionList[0].name).toBe('UI');
            });
    
            it('The direction UI should have 6 tests', function () {
                expect(app.settings.directionList[0].testList.length).toBe(6);
            });
        });
});

