const MissionCommander = require('./../app/missionCommander');
describe("Unit Test for Mission Commander class", () => {
    test('Create a Mission commander object', () => {
        const myMissionCommander = new MissionCommander("Woopa");
        expect(myMissionCommander.name).toBe("Woopa");
    });
})