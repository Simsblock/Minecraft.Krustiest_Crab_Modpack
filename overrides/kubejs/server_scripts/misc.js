// RECIPES

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

    event.remove({ output: 'tfmg:pipe_bomb' })

    event.remove({ output: 'create_connected:fan_seething_catalyst' }) //op -> creative item
    
    event.remove({ output: 'petrolsparts:pneumatic_tube' })     //bugged item

    event.remove({ output: 'simulated:rope_coupling' })

    event.remove({ output: 'create_radar:binoculars' })
    event.remove({ output: 'create_radar:monitor' })

    event.remove({ output: 'exposure:camera' })
    event.remove({ output: 'exposure:lightroom' })

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

    event.shaped('simulated:rope_coupling', [
        '   ',
        'ISI',
        '   '
    ], {
        I: 'minecraft:iron_nugget',
        S: 'supplementaries:rope'
    })

    event.shaped('create_radar:binoculars', [
        '   ',
        'SCS',
        '   '
    ], {
        C: 'create:copper_sheet',
        S: 'minecraft:spyglass'
    })

    event.shaped('3x create_radar:monitor', [
        'CRC',
        ' B ',
        ' P '
    ], {
        R: 'create_optical:rose_quartz_catalyst_coil',
        C: 'create_connected:control_chip',
        B: 'create:brass_casing',
        P: 'create:precision_mechanism'
    })

    event.shaped('create_radar:radar_warning_receiver', [
        'ASA',
        'CEC',
        'AVA'
    ], {
        E: 'create:electron_tube',
        S: 'minecraft:echo_shard',
        V: 'create_things_and_misc:vibration_mechanism',
        A: 'create:andesite_alloy',
        C: 'create_connected:control_chip',
    })

    event.shaped('exposure:camera', [
        'TAB',
        'AOA',
        'DAA'
    ], {
        T: 'minecraft:iron_trapdoor',
        O: 'create_optical:optical_device',
        D: 'minecraft:dried_kelp',
        A: 'tfmg:aluminum_sheet',
        B: '#c:buttons',
    })

    event.shaped('exposure:lightroom', [
        'CCC',
        'RAR',
        'DDD'
    ], {
        A: 'create:andesite_casing',
        R: 'create:rose_quartz_lamp',
        C: 'tfmg:cast_iron_sheet',
        D: '#c:dyes',
    })

    event.recipes.create.sequenced_assembly([
        'vista:viewfinder'
    ], 'create:mechanical_bearing', [
        event.recipes.createDeploying('kubejs:incomplete_viewfinder', ['kubejs:incomplete_viewfinder', 'exposure:interplanar_projector']),
        event.recipes.createDeploying('kubejs:incomplete_viewfinder', ['kubejs:incomplete_viewfinder', 'create_optical:optical_device']),
        event.recipes.createDeploying('kubejs:incomplete_viewfinder', ['kubejs:incomplete_viewfinder', 'minecraft:tinted_glass']),
    ]).transitionalItem('kubejs:incomplete_viewfinder')
    .loops(1)

    event.recipes.create.sequenced_assembly([
        'vista:television'
    ], 'create:mechanical_bearing', [
        event.recipes.createDeploying('kubejs:incomplete_television', ['kubejs:incomplete_television', 'create_connected:control_chip']),
        event.recipes.createDeploying('kubejs:incomplete_television', ['kubejs:incomplete_television', 'create_optical:copper_coil']),
        event.recipes.createDeploying('kubejs:incomplete_television', ['kubejs:incomplete_television', 'create:electron_tube']),
        event.recipes.createDeploying('kubejs:incomplete_television', ['kubejs:incomplete_television', 'create_optical:optical_device']),
        event.recipes.createDeploying('kubejs:incomplete_television', ['kubejs:incomplete_television', 'minecraft:tinted_glass']),
    ]).transitionalItem('kubejs:incomplete_television')
    .loops(1)

    event.custom({
        "type": "dndesires:hydraulic_compacting",
        "heat_requirement": "none",
        "ingredients": [
            { "type": "neoforge:tag", "amount": 100, "tag": "c:lava" },
            { "type": "neoforge:tag", "amount": 100, "tag": "c:water" }
        ],
        "results": [
            { "id": "minecraft:cobblestone", "count": 10 },
            { "id": "minecraft:lava", "amount": 100 }
        ]
    }).id('kubejs:hydraulic/cobblestone')

    event.custom({
		"type": "dndesires:hydraulic_compacting",
		"heat_requirement": "superheated",
		"ingredients": [
			{ "item": "createmetallurgy:graphite" },
            { "item": "createmetallurgy:graphite" },
            { "item": "createmetallurgy:graphite" },
            { "item": "createmetallurgy:graphite" },
            { "item": "createmetallurgy:graphite" },
		],
		"results": [
			{ "id": "minecraft:diamond", "count": 1 }
		]
	}).id('kubejs:hydraulic/diamond')
})

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('petrolsparts:pneumatic_tube')
    event.remove('create_connected:fan_seething_catalyst')
})