RecipeViewerEvents.removeEntriesCompletely('item', event => {
    
    const itemsToRemove = [
		"createmetallurgy:molten_steel_bucket",
        "createmetallurgy:molten_slag_bucket",
        "createbb:hydrogen_bucket",
        "tfmg:molten_steel_bucket",
    ];

    itemsToRemove.forEach(item => {
        event.remove(item);
    });

});

RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
	const fluidsToRemove = [
        "createmetallurgy:molten_slag",
        "createbb:hydrogen",
        "createmetallurgy:molten_steel",
        "tfmg:molten_steel",
    ];
	
	fluidsToRemove.forEach(fluid => {
        event.remove(Fluid.of(fluid));
    });
});
