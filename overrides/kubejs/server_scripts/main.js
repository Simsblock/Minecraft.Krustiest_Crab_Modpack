ServerEvents.tags('item', event => {
    event.add('c:dough', ['farmersdelight:wheat_dough', 'create:dough'])
    event.add('c:crabs', [
        'hybrid-aquatic:coconut_crab_claw',
        'hybrid-aquatic:dungeness_crab_claw',
        'hybrid-aquatic:fiddler_crab_claw',
        'hybrid-aquatic:vampire_crab_claw',
        'hybrid-aquatic:flower_crab_claw',
        'hybrid-aquatic:ghost_crab_claw',
        'hybrid-aquatic:lightfoot_crab_claw',
        'hybrid-aquatic:yeti_crab_claw',
        'hybrid-aquatic:spider_crab_claw',
    ])
    event.add('c:small_fish', [
        '#hybrid-aquatic:small_fish',
    ])
    event.add('c:medium_fish', [
        '#hybrid-aquatic:medium_fish',
        'upgrade_aquatic:lionfish',
        'upgrade_aquatic:perch',
        'upgrade_aquatic:pike',
        'pastel:koi'
    ])
    event.add('c:large_fish', [
        '#hybrid-aquatic:large_fish',
    ])
    event.add('c:foods/cooked_fish', 'hybrid-aquatic:cooked_fish_meat')
    event.add('c:foods/cooked_fish', 'hybrid-aquatic:cooked_fish_steak')
    event.add('c:pots', [
        'minersdelight:copper_pot',
        'farmersdelight:cooking_pot',
        'youkaisfeasts:steamer_pot',
        'youkaisfeasts:small_iron_pot',
        'youkaisfeasts:short_iron_pot',
        'youkaisfeasts:stockpot',
    ])
    event.add('c:trident_materials', [
        //'hybrid-aquatic:shark_tooth',
        'upgrade_aquatic:thrasher_tooth',
        'create_aquatic_ambitions:spiky_shell',
    ])
})

ServerEvents.recipes(event => {

    event.remove({ id: 'minecraft:diamond_sword' })
    event.remove({ id: 'minecraft:diamond_axe' })
    event.remove({ id: 'minecraft:diamond_pickaxe' })
    event.remove({ id: 'minecraft:diamond_shovel' })
    event.remove({ id: 'minecraft:diamond_hoe' })
    event.remove({ output: 'hybrid-aquatic:raw_crab' })
    event.remove({ output: 'youkaishomecoming:crab_roe' })
    event.remove({ output: 'dustydecorations:rope' })
    event.remove({ output: 'dustydecorations:wedged_knife' })
    event.remove({ output: 'dustydecorations:wedged_cleaver' })
    event.remove({ output: 'dustydecorations:pots_and_pans_stack' })

    event.remove({ output: 'minecraft:trident' })
    event.remove({ output: 'farmersdelight:safety_net' })
    event.remove({ output: 'beautify:hanging_pot' })

    event.remove({ output: 'create_sa:rose_quartz_sword' })
    event.remove({ output: 'create_sa:rose_quartz_axe' })
    event.remove({ output: 'create_sa:rose_quartz_pickaxe' })
    event.remove({ output: 'create_sa:rose_quartz_shovel' })

    //unhappy with this but havent found a simple solution to only use one rose quartz

    event.smithing(
        'create_sa:rose_quartz_sword', 
        'create:polished_rose_quartz',                    
        'minecraft:golden_sword',      
        'create:polished_rose_quartz' 
    )

    event.smithing(
        'create_sa:rose_quartz_axe', 
        'create:polished_rose_quartz',                
        'minecraft:golden_axe', 
        'create:polished_rose_quartz'
    )

    event.smithing(
        'create_sa:rose_quartz_pickaxe', 
        'create:polished_rose_quartz',                
        'minecraft:golden_pickaxe', 
        'create:polished_rose_quartz'
    )

    event.smithing(
        'create_sa:rose_quartz_shovel', 
        'create:polished_rose_quartz',                
        'minecraft:golden_shovel', 
        'create:polished_rose_quartz'
    )

    event.recipes.farmersdelight.cutting(
        '#c:small_fish',           
        '#c:tools/knife',           
        [                           
            'hybrid-aquatic:raw_fish_meat', 
            'dustydecorations:fishbones'
        ]
    )
    
    event.recipes.farmersdelight.cutting(
        '#c:medium_fish',           
        '#c:tools/knife',           
        [                           
            '2x hybrid-aquatic:raw_fish_meat', 
            'dustydecorations:fishbones'
        ]
    )
    
    event.recipes.farmersdelight.cutting(
        '#c:large_fish', 
        '#c:tools/knife', 
        [
            'hybrid-aquatic:raw_fish_steak', 
            'dustydecorations:fishbones'
        ]
    )

    event.recipes.farmersdelight.cutting(
        '#c:crabs', 
        '#c:tools/knife', 
        [
            'youkaisfeasts:crab_meat', 
            ChanceResult.of("youkaisfeasts:crab_roe", 0.50)
        ]
    )

    event.shapeless('youkaisfeasts:crab_meat', [
        '#c:crabs'
    ])

    event.shaped('3x supplementaries:rope', [
        ' S ',
        ' S ',
        '   '
    ], {
        S: 'farmersdelight:straw',
    })

    event.shapeless('4x supplementaries:rope', [
        'farmersdelight:safety_net'
    ])

    event.shaped('beautify:hanging_pot', [
        ' S ',
        ' P ',
        '   '
    ], {
        S: 'supplementaries:rope',
        P: 'minecraft:flower_pot'
    })

    event.shaped('farmersdelight:safety_net', [
        'SS ',
        'SS ',
        '   '
    ], {
        S: 'supplementaries:rope',
    })

    event.shaped('3x dustydecorations:rope', [
        ' S ',
        ' S ',
        ' S '
    ], {
        S: 'supplementaries:rope',
    })

    event.shapeless('dustydecorations:wedged_knife', [
        'farmersdelight:iron_knife',
    ])

    event.shapeless('dustydecorations:wedged_cleaver', [
        'dungeonsdelight:iron_cleaver'
    ])

    event.shapeless('3x dustydecorations:pots_and_pans', [
        '3x #c:pots'
    ])

    event.shaped('minecraft:trident', [
        ' MM',
        ' SM',
        'S  '
    ], {
        S: 'create_aquatic_ambitions:prismarine_alloy_rod',
        M: '#c:trident_materials'
    })

    event.shaped('minecraft:diamond_sword', [
        ' D ',
        ' D ',
        ' S '
    ], {
        D: 'minecraft:diamond',
        S: 'create_sa:zinc_handle'
    })

        event.shaped('minecraft:diamond_axe', [
        'DD ',
        'DS ',
        ' S '
    ], {
        D: 'minecraft:diamond',
        S: 'create_sa:zinc_handle'
    })

        event.shaped('minecraft:diamond_pickaxe', [
        'DDD',
        ' S ',
        ' S '
    ], {
        D: 'minecraft:diamond',
        S: 'create_sa:zinc_handle'
    })

        event.shaped('minecraft:diamond_shovel', [
        ' D ',
        ' S ',
        ' S '
    ], {
        D: 'minecraft:diamond',
        S: 'create_sa:zinc_handle'
    })

        event.shaped('minecraft:diamond_hoe', [
        'DD ',
        ' S ',
        ' S '
    ], {
        D: 'minecraft:diamond',
        S: 'create_sa:zinc_handle'
    })

    event.shaped('minecraft:chainmail_helmet', [
        'INI',
        'N N',
        '   '
    ], {
        I: 'minecraft:iron_ingot',
        N: 'minecraft:iron_nugget'
    })

    event.shaped('minecraft:chainmail_chestplate', [
        'N N',
        'INI',
        'NIN'
    ], {
        I: 'minecraft:iron_ingot',
        N: 'minecraft:iron_nugget'
    })

    event.shaped('minecraft:chainmail_leggings', [
        'NIN',
        'I I',
        'N N'
    ], {
        I: 'minecraft:iron_ingot',
        N: 'minecraft:iron_nugget'
    })

    event.shaped('minecraft:chainmail_boots', [
        '   ',
        'N N',
        'I I'
    ], {
        I: 'minecraft:iron_ingot',
        N: 'minecraft:iron_nugget'
    })

    MoreJS.villagerTrades((event) => {
        event.removeVanillaTrades('librarian', [1, 2, 3, 4, 5], (trade) => {
            return trade.output.id == 'minecraft:enchanted_book';
        });
    });

    MoreJS.villagerTrades((event) => {

        event.addTrade('librarian', 5, [
            '10x minecraft:diamond', 
            'minecraft:shield'
        ], Item.of('minecraft:book').enchant('minecraft:unbreaking', 3));

        event.addTrade('librarian', 5, [
            'minecraft:clock', 
            '5x minecraft:blaze_rod'
        ], Item.of('minecraft:book').enchant('minecraft:efficency', 5));

        event.addTrade('librarian', 5, [
            '5x minecraft:experience_bottle', 
            '5x create:rose_quartz'
        ], Item.of('minecraft:book').enchant('minecraft:mending', 1));

        event.addTrade('librarian', 5, [
            'minecraft:recovery_compass', 
            'minecraft:ancient_debris'
        ], Item.of('minecraft:book').enchant('soulbound:soulbound', 1));

    });

    ServerEvents.tags('enchantment', event => {

        const block_enchanting = [
            'minecraft:breach',
            'minecraft:protection',
            'minecraft:cleaving',
            'minecraft:power',
            'minecraft:sharpness',
            //'minecraft:sweeping_edge'
            'enchantencore:swift_slash',
            'enchantencore:sonic',
            'enchantencore:regrowth',
            'enchantencore:swift_slash',
        ]

        block_enchanting.forEach(ench => {
            event.remove('minecraft:in_enchanting_table', ench)
            event.remove('minecraft:on_random_loot', ench)
            event.remove('minecraft:tradeable', ench)
        })

        const remove_enchanting = [
            'minecraft:efficency',
            'minecraft:mending',
            'minecraft:fortune',
            'minecraft:looting',
            'minecraft:unbreaking',
            'soulbound:soulbound'
        ]

        remove_enchanting.forEach(ench => {
            event.remove('minecraft:in_enchanting_table', ench)
        })

        const allow_enchanting = [
            'minecraft:vanishing_curse',
            'minecraft:binding_curse',
            'minecraft:wind_burst',
            'enchantencore:ownership_curse',
            'enchantencore:caravan_curse',
            'enchantencore:undying_curse',
            'enchantencore:hiding_curse',
            'enchantencore:reach_curse',
            'enchantencore:fragility_curse',
            'enchantencore:welfare_curse',
            'enchantencore:randomness_curse',
            'enchantencore:death_curse',
            'enchantencore:breeze_curse',
            'enchantencore:crank_curse',
        ]

        allow_enchanting.forEach(ench => {
            event.add('minecraft:in_enchanting_table', ench)
        })
    })

})