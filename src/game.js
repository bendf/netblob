

Game


    loop:
        handle_events(); //input?
        if(simulationShouldUpdate()) {
            update_simulation();
        }
        if(renderShouldUpdate()) {
            update_render();
        }




Start:

    load_menu();

    while(true) {
        handle_gameEvent();

        if(update_ready()) {
            game.update();
        }

    }


