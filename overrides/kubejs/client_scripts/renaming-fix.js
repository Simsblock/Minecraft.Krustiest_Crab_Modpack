ClientEvents.lang('en_us', { priority: 100 }, event => {
    
    // We create a helper function to force-inject the translations into Minecraft's root map
    const forceRename = (key, localizedName) => {
        event.add(key, localizedName);
    };

    // --- SLIME FORCE OVERRIDES ---
    forceRename('item.create_things_and_misc.slime_bucket', 'Liquid Slime Bucket');
    forceRename('fluid.create_things_and_misc.slime', 'Liquid Slime');
    forceRename('block.create_things_and_misc.slime', 'Liquid Slime');
    forceRename('fluid_type.create_things_and_misc.slime', 'Liquid Slime');

    // --- DILUTED BONEMEAL FORCE OVERRIDES ---
    forceRename('fluid.create_things_and_misc.diluted_bonemeal', 'Diluted Bonemeal');
    forceRename('block.create_things_and_misc.diluted_bonemeal', 'Diluted Bonemeal');
    forceRename('fluid_type.create_things_and_misc.diluted_bonemeal', 'Diluted Bonemeal');

    event.add('item.createbb.crushed_copper', 'Copper Dust');
    event.add('item.createbb.crushed_zinc', 'Zinc Dust');
});
