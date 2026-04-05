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

    event.remove({ id: 'minecraft:recipes/diamond_sword' })
    event.remove({ id: 'farmersdelight:cooking/crab_cakes' })
    event.remove({ id: 'farmersdelight:cooking/safety_net' })
    event.remove({ id: 'hybrid-aquatic:recipes/raw_crab' })
    event.remove({ id: 'hybrid-aquatic:recipes/raw_fish_meat_small' })
    event.remove({ id: 'hybrid-aquatic:recipes/raw_fish_meat_medium' })
    event.remove({ id: 'hybrid-aquatic:recipes/raw_fish_steak' })
    event.remove({ id: 'hybrid-aquatic:recipes/trident' })
    event.remove({ id: 'upgrade-aquatic:recipe/trident' })
    event.remove({ id: 'create-aquatic-ambitions:recipe/crafting/materials/trident' })
    event.remove({ id: 'youkaishomecoming:recipes/crab_roe' })
    event.remove({ id: 'beautify:recipes/hanging_pot' })
    event.remove({ id: 'dustydecorations:recipes/rope' })
    event.remove({ id: 'dustydecorations:recipes/wedged_knife' })
    event.remove({ id: 'dustydecorations:recipes/wedged_cleaver' })
    event.remove({ id: 'dustydecorations:recipes/pots_and_pans_stack' })

    event.remove({ output: 'create_sa:rose_quartz_sword' })
    event.remove({ output: 'create_sa:rose_quartz_axe' })
    event.remove({ output: 'create_sa:rose_quartz_pickaxe' })
    event.remove({ output: 'create_sa:rose_quartz_shovel' })

    event.custom({
        type: "farmersdelight:cooking",
        recipe_book_tab: "meals", 
        ingredients: [
            { item: 'youkaisfeasts:crab_meat' },
            { tag: 'c:dough' },
            { item: 'minecraft:milk_bucket' },
            { item: 'minecraft:egg' },
            { item: 'farmersdelight:onion' }
        ],
        result: { 
            id: 'crabbersdelight:crab_cakes',
            count: 1 
        },
        experience: 2.0,
        cookingtime: 200
    })

    event.recipes.farmersdelight.cutting(
        '#c:small_fish',           
        '#c:tools/knife',           
        [                           
            'hybrid-aquatic:raw_fish_meat', 
            'crabbersdelight:fish_bones'
        ]
    )
    
    event.recipes.farmersdelight.cutting(
        '#c:medium_fish',           
        '#c:tools/knife',           
        [                           
            '2x hybrid-aquatic:raw_fish_meat', 
            'crabbersdelight:fish_bones'
        ]
    )
    
    event.recipes.farmersdelight.cutting(
        '#c:large_fish', 
        '#c:tools/knife', 
        [
            'hybrid-aquatic:raw_fish_steak', 
            'crabbersdelight:fish_bones'
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
        S: 'armersdelight:straw',
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

    event.smithing(
        'create_sa:rose_quartz_sword', 
        'minecraft:air',                
        'minecraft:golden_sword', 
        'create:polished_rose_quartz'
    )

    event.smithing(
        'create_sa:rose_quartz_axe', 
        'minecraft:air',                
        'minecraft:golden_axe', 
        'create:polished_rose_quartz'
    )

    event.smithing(
        'create_sa:rose_quartz_pickaxe', 
        'minecraft:air',                
        'minecraft:golden_pickaxe', 
        'create:polished_rose_quartz'
    )

    event.smithing(
        'create_sa:rose_quartz_shovel', 
        'minecraft:air',                
        'minecraft:golden_shovel', 
        'create:polished_rose_quartz'
    )

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
        '  ',
        'N N',
        'I I'
    ], {
        I: 'minecraft:iron_ingot',
        N: 'minecraft:iron_nugget'
    })
})