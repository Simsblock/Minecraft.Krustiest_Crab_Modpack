// wiki cuz modrinth modpage got wrong wiki: https://docs.almostreliable.com/morejs/
MoreJS.villagerTrades(event => {
    
    event.removeTrades({
        output: "minecraft:enchanted_book",
        level: 1,
        professions: "minecraft:librarian",
    })
        event.removeTrades({
        output: "minecraft:enchanted_book",
        level: 2,
        professions: "minecraft:librarian",
    })
        event.removeTrades({
        output: "minecraft:enchanted_book",
        level: 3,
        professions: "minecraft:librarian",
    })
        event.removeTrades({
        output: "minecraft:enchanted_book",
        level: 4,
        professions: "minecraft:librarian",
    })
        event.removeTrades({
        output: "minecraft:enchanted_book",
        level: 5,
        professions: "minecraft:librarian",
    })

    event.addTrade(
        "minecraft:librarian", 
        5, 
        [Item.of("minecraft:diamond", 10), Item.of("minecraft:shield")],
        Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 3)
    );

    event.addTrade(
        "minecraft:librarian", 
        5,
        [Item.of("minecraft:clock", 3), Item.of("minecraft:blaze_rod", 5)], 
        Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 5)
    );

    event.addTrade(
        "minecraft:librarian", 
        5,
        [Item.of("minecraft:experience_bottle", 5), Item.of("create:rose_quartz", 5)], 
        Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1)
    );

    event.addTrade(
        "minecraft:librarian", 
        5,
        [Item.of("minecraft:recovery_compass", 1), Item.of("minecraft:ancient_debris", 1)], 
        Item.of('minecraft:enchanted_book').enchant('soulbound:soulbound', 1)
    );

});