ServerEvents.tags('item', event => {
    event.add('c:dough', ['farmersdelight:wheat_dough', 'create:dough'])
    event.add('c:crabs', [
        'crabbersdelight:crab_claw', 
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
    ])
    event.add('c:large_fish', [
        '#hybrid-aquatic:large_fish',
    ])
    event.add('c:foods/cooked_fish', 'hybrid-aquatic:cooked_fish_meat')
    event.add('c:foods/cooked_fish', 'hybrid-aquatic:cooked_fish_steak')
})

ServerEvents.recipes(event => {

    event.remove({ id: 'farmersdelight:cooking/crab_cakes' })
    event.remove({ id: 'hybrid-aquatic:recipes/raw_crab' })
    event.remove({ id: 'hybrid-aquatic:recipes/raw_fish_meat_small' })
    event.remove({ id: 'hybrid-aquatic:recipes/raw_fish_meat_medium' })
    event.remove({ id: 'hybrid-aquatic:recipes/raw_fish_steak' })
    event.remove({ id: 'youkaishomecoming:recipes/crab_roe' })

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

})