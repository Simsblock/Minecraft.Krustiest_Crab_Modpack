RecipeViewerEvents.removeEntries('item', event => {
    const BANNED = [
        'minecraft:breach',
        'minecraft:protection',
        'minecraft:cleaving',
        'minecraft:power',
        'minecraft:sharpness',
        'enchantencore:sonic',
        'enchantencore:regrowth',
    ];

    BANNED.forEach(id => {
        event.remove(`minecraft:enchanted_book[stored_enchantments={levels:{"${id}":1}}]`);
    });
});