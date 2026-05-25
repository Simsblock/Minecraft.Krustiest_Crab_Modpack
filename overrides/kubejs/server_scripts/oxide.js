const colors = [
    'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime',
    'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue',
    'brown', 'green', 'red', 'black'
];

const baseBlocks = [
    "cut_iron", "iron_scaffold", "iron_scaffold_stairs", "iron_pillar", "heavy_iron_door", 
    "heavy_iron_trapdoor", "heavy_iron_bars", "wrought_iron_fence", 
    "wrought_iron_fence_gate", "heavy_iron_chain", "heavy_iron_ladder"
];

const corrugatedTypes = ["corrugated_iron", "corrugated_iron_stairs", "corrugated_iron_slab"];

ServerEvents.recipes(event => {
    
    baseBlocks.forEach(block => {
        const clean = `oxide:${block}`;
        const weathered = `oxide:weathered_${block}`;
        const rusted = `oxide:rusted_${block}`;

        // Weathering Mechanics
        event.recipes.create.filling(weathered, [Fluid.of('minecraft:water'), clean]);
        event.recipes.create.splashing(weathered, clean);
        event.recipes.create.filling(rusted, [Fluid.of('minecraft:water'), weathered]);
        
        event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{ "item": clean }],
            "results": [{ "id": weathered }]
        });
        event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{ "item": weathered }],
            "results": [{ "id": rusted }]
        });

        event.recipes.create.sandpaper_polishing(weathered, rusted);
        event.recipes.create.sandpaper_polishing(clean, weathered);
    });

    colors.forEach(color => {
        corrugatedTypes.forEach(corr => {
            const clean = `oxide:${color}_${corr}`;
            const weathered = `oxide:weathered_${color}_${corr}`;
            const rusted = `oxide:rusted_${corr}`; 

            event.recipes.create.filling(weathered, [Fluid.of('minecraft:water'), clean]);
            event.recipes.create.splashing(weathered, clean);
            event.recipes.create.filling(rusted, [Fluid.of('minecraft:water'), weathered]);
            
            event.custom({
                "type": "create_aquatic_ambitions:channeling",
                "ingredients": [{ "item": clean }],
                "results": [{ "id": weathered }]
            });
            event.custom({
                "type": "create_aquatic_ambitions:channeling",
                "ingredients": [{ "item": weathered }],
                "results": [{ "id": rusted }]
            });

            event.recipes.create.sandpaper_polishing(clean, weathered);
        });
    });

    corrugatedTypes.forEach(corr => {
        const rusted = `oxide:rusted_${corr}`;
        const weatheredGray = `oxide:weathered_gray_${corr}`;

        event.recipes.create.sandpaper_polishing(weatheredGray, rusted);
    });
});