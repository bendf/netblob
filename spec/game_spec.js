define(['src/game'],function(game) {


    describe('Game', function() {
        describe('EventHandler');
        describe('Simulation');
        describe('User Interface');
        describe('Rendering');

        describe('Start', function() {

            it('should start on the level select screen', function() {
                levelSelectExample = img.src;
                expect(simulation.currentLevel).toBeNull();
                expect(events.pending).toBeEmptyArray();
                expect(ui.state).toBe(UI.LEVEL_SELECT);
                expect(rendering.stage.canvas).toImageDiffEqual(levelSelectExample);
            }
        });

    });
    given a list of level filenames to load.

    when the game 'starts'

    then:
        - The game's list of levels should be the right length.
        - The game should be showing the level select

    given an event to handle:

    when the game next updates

    then:
        -the event should have been handled;
        -The simulation should reflect this.
        -The render should reflect this.




});
