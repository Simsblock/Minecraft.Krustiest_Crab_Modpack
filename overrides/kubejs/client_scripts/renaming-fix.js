// This event runs at the very end of client initialization, forcing our names over everything else
ClientEvents.lang('en_us', event => {
    
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
});
