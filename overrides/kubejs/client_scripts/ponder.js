Ponder.registry((event) => {
    event.create("dndesires:hydraulic_press")
    .scene("hydraulic_press_guide", "Hydraulic Press Setup", (scene, util) => {
        scene.showStructure();
        scene.idle(10);

        scene.world.setBlock([2, 1, 2], "create:blaze_burner", false);
        scene.world.setBlock([2, 2, 2], "create:basin", false);
        scene.world.setBlock([2, 4, 2], "dndesires:hydraulic_press", false);

        scene.world.setBlocks([0, 4, 2], "minecraft:water", false);

        scene.world.setBlock([1, 4, 2], "create:mechanical_pump[facing=east]", false);

        scene.idle(10);
        scene.text(180, "Hydraulic Press needs to be filled with water on the white side", [1.5, 4.5, 2])
    })
})