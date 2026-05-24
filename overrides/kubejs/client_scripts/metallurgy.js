RecipeViewerEvents.removeEntriesCompletely('item', event => {
    
    const itemsToRemove = [
        "createmetallurgy:tungsten_dust",
        "createmetallurgy:gold_dust",
        "createmetallurgy:iron_dust",
        "createmetallurgy:copper_dust",
        "createmetallurgy:zinc_dust",
        "createmetallurgy:dirty_tungsten_dust",
        "createmetallurgy:dirty_gold_dust",
        "createmetallurgy:dirty_iron_dust",
        "createmetallurgy:dirty_copper_dust",
        "createmetallurgy:dirty_zinc_dust",
        "createmetallurgy:coke",
        "createmetallurgy:coke_block",
        "createmetallurgy:refractory_mortar",
        "createmetallurgy:refractory_mortar_ball",
        "createmetallurgy:graphite_mold_gear",
        "createmetallurgy:slag_block",
        "createmetallurgy:slag",
        "createmetallurgy:casting_table",
        "createmetallurgy:casting_basin",
        "createmetallurgy:foundry_lid",
        "createmetallurgy:foundry_basin",
        "createmetallurgy:faucet",
        "createmetallurgy:ghast_transfer_ladle",
        "createmetallurgy:cute_transfer_ladle",
        "createmetallurgy:old_transfer_ladle",
        "createmetallurgy:strider_transfer_ladle",
        "create:crushed_osmium",
        "create:crushed_silver",
        "create:crushed_tin",
        "createmetallurgy:molten_osmium_bucket",
        "createmetallurgy:molten_silver_bucket",
        "createmetallurgy:molten_tin_bucket",
        "createmetallurgy:molten_invar_bucket",
        "createmetallurgy:molten_electrum_bucket",
        "createmetallurgy:molten_void_steel_bucket",
        "createmetallurgy:molten_necromium_bucket",
        "createbigcannons:basin_foundry_lid",
    ];

    itemsToRemove.forEach(item => {
        event.remove(item);
    });

});

RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
	const fluidsToRemove = [
        "createmetallurgy:molten_invar",
        "createmetallurgy:molten_electrum",
        "createmetallurgy:molten_void_steel",
        "createmetallurgy:molten_necromium",
        "createmetallurgy:molten_osmium",
        "createmetallurgy:molten_silver",
        "createmetallurgy:molten_tin",
        "createbigcannons:molten_steel",
    ];
	
	fluidsToRemove.forEach(fluid => {
        event.remove(Fluid.of(fluid));
    });
});