ServerEvents.recipes(event => {

    const toRemove = [
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
        "createmetallurgy:tungsten_wire_spool",
        "create_blaze_burner_fuels:coke_coal",
        "create_blaze_burner_fuels:refined_coke_coal",
        "createmetallurgy:molten_osmium_bucket",
        "createmetallurgy:molten_silver_bucket",
        "createmetallurgy:molten_tin_bucket",
        "createmetallurgy:molten_invar_bucket",
        "createmetallurgy:molten_electrum_bucket",
        "createmetallurgy:molten_void_steel_bucket",
        "createmetallurgy:molten_necromium_bucket",
        "createbigcannons:basin_foundry_lid",
    ];

    const fluidsToRemove = [
        "createmetallurgy:molten_invar",
        "createmetallurgy:molten_electrum",
        "createmetallurgy:molten_void_steel",
        "createmetallurgy:molten_necromium",
        "createmetallurgy:molten_osmium",
        "createmetallurgy:molten_silver",
        "createmetallurgy:molten_tin",
    ];

    toRemove.forEach(item => {
        event.remove({ id: item });
        event.remove({ output: item });
        event.remove({ input: item });
    });

    fluidsToRemove.forEach(fluid => {
		event.remove({ id: Fluid.of(fluid) });
        event.remove({ output: Fluid.of(fluid) });
        event.remove({ input: Fluid.of(fluid) });
    });

    event.remove({ output: 'pipeorgans:tuning_wire' });
    event.remove({ output: 'createmetallurgy:industrial_crucible' });

    const colors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime',
        'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue',
        'brown', 'green', 'red', 'black'
    ];

    colors.forEach(color => {
        event.remove({ output: `createmetallurgy:${color}_light_bulb` });
    });

    event.stonecutting('2x createmetallurgy:tungsten_wire', 'createmetallurgy:tungsten_ingot');
    event.stonecutting('2x pipeorgans:tuning_wire', 'minecraft:copper_ingot');
	
    event.shaped('createmetallurgy:casting_table', ['III', 'I I', 'I I'], { I: 'tfmg:cast_iron_ingot' });
    event.shaped('createmetallurgy:casting_basin', ['I I', 'I I', 'III'], { I: 'tfmg:cast_iron_ingot' });
    event.shaped('createmetallurgy:foundry_lid',   ['III', 'I I', '   '], { I: 'tfmg:cast_iron_ingot' });
    event.shaped('createmetallurgy:faucet',        ['I I', ' I ', '   '], { I: 'tfmg:cast_iron_ingot' });
    
    event.shaped('createmetallurgy:foundry_basin', [
        'I I',
        'IBI',
        'III'
    ], {
        I: 'tfmg:cast_iron_ingot',
        B: 'tfmg:fireproof_bricks'
    });

    colors.forEach(color => {
        event.shaped(`createmetallurgy:${color}_light_bulb`, [
            ' G ',
            'WWW',
            ' I '
        ], {
            G: `minecraft:${color}_stained_glass`,
            W: 'createmetallurgy:tungsten_wire',
            I: 'create:iron_sheet'
        });
    });


	event.recipes.create.sequenced_assembly(
        [
			CreateItem.of('createmetallurgy:industrial_crucible', 1),
        ],
        'create:andesite_alloy',
        [
			event.recipes.create.deploying('createmetallurgy:incomplete_industrial_crucible', ['createmetallurgy:incomplete_industrial_crucible', 'tfmg:fireproof_bricks',]),
			event.recipes.create.deploying('createmetallurgy:incomplete_industrial_crucible', ['createmetallurgy:incomplete_industrial_crucible', 'createmetallurgy:obdurium_sheet',]),
			event.recipes.createmetallurgy.grinding('createmetallurgy:incomplete_industrial_crucible', 'createmetallurgy:incomplete_industrial_crucible'),
            event.recipes.create.filling('createmetallurgy:incomplete_industrial_crucible', [Fluid.of('createmetallurgy:molten_tungsten'), 'createmetallurgy:incomplete_industrial_crucible'])
        ]
    )
    .transitionalItem('createmetallurgy:incomplete_industrial_crucible')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        [
			CreateItem.of('createmetallurgy:ghast_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:cute_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:old_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:strider_transfer_ladle', 0.25),
        ],
        'create:andesite_alloy',
        [
			event.recipes.create.deploying('createmetallurgy:incomplete_ladle_frame', ['createmetallurgy:incomplete_ladle_frame', 'tfmg:steel_ingot',]),
			event.recipes.createmetallurgy.grinding('createmetallurgy:incomplete_ladle_frame', 'createmetallurgy:incomplete_ladle_frame'),
			event.recipes.create.deploying('createmetallurgy:incomplete_ladle_frame', ['createmetallurgy:incomplete_ladle_frame', 'tfmg:fireproof_brick',]),
			event.recipes.create.pressing('createmetallurgy:incomplete_ladle_frame', 'createmetallurgy:incomplete_ladle_frame'),
        ]
    )
    .transitionalItem('createmetallurgy:incomplete_ladle_frame')
    .loops(1)
	
	event.recipes.create.sequenced_assembly(
        [
			CreateItem.of('createmetallurgy:ghast_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:cute_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:old_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:strider_transfer_ladle', 0.25),
        ],
        'create:andesite_alloy',
        [
			event.recipes.create.deploying('createmetallurgy:incomplete_ladle_frame', ['createmetallurgy:incomplete_ladle_frame', 'tfmg:steel_ingot',]),
			event.recipes.createmetallurgy.grinding('createmetallurgy:incomplete_ladle_frame', 'createmetallurgy:incomplete_ladle_frame'),
			event.recipes.create.deploying('createmetallurgy:incomplete_ladle_frame', ['createmetallurgy:incomplete_ladle_frame', 'tfmg:fireproof_brick',]),
			event.recipes.create.pressing('createmetallurgy:incomplete_ladle_frame', 'createmetallurgy:incomplete_ladle_frame'),
        ]
    )
    .transitionalItem('createmetallurgy:incomplete_ladle_frame')
    .loops(1)
	
	event.recipes.create.sequenced_assembly(
        [
			CreateItem.of('createmetallurgy:ghast_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:cute_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:old_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:strider_transfer_ladle', 0.25),
        ],
        'create:andesite_alloy',
        [
			event.recipes.create.deploying('createmetallurgy:incomplete_ladle_frame', ['createmetallurgy:incomplete_ladle_frame', 'tfmg:steel_ingot',]),
			event.recipes.createmetallurgy.grinding('createmetallurgy:incomplete_ladle_frame', 'createmetallurgy:incomplete_ladle_frame'),
			event.recipes.create.deploying('createmetallurgy:incomplete_ladle_frame', ['createmetallurgy:incomplete_ladle_frame', 'tfmg:fireproof_brick',]),
			event.recipes.create.pressing('createmetallurgy:incomplete_ladle_frame', 'createmetallurgy:incomplete_ladle_frame'),
        ]
    )
    .transitionalItem('createmetallurgy:incomplete_ladle_frame')
    .loops(1)
	
	event.recipes.create.sequenced_assembly(
        [
			CreateItem.of('createmetallurgy:ghast_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:cute_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:old_transfer_ladle', 0.25),
			CreateItem.of('createmetallurgy:strider_transfer_ladle', 0.25),
        ],
        'create:andesite_alloy',
        [
			event.recipes.create.deploying('createmetallurgy:incomplete_ladle_frame', ['createmetallurgy:incomplete_ladle_frame', 'tfmg:steel_ingot',]),
			event.recipes.createmetallurgy.grinding('createmetallurgy:incomplete_ladle_frame', 'createmetallurgy:incomplete_ladle_frame'),
			event.recipes.create.deploying('createmetallurgy:incomplete_ladle_frame', ['createmetallurgy:incomplete_ladle_frame', 'tfmg:fireproof_brick',]),
			event.recipes.create.pressing('createmetallurgy:incomplete_ladle_frame', 'createmetallurgy:incomplete_ladle_frame'),
        ]
    )
    .transitionalItem('createmetallurgy:incomplete_ladle_frame')
    .loops(1)
	
    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_cast_iron", 90), "createbigcannons:cast_iron_ingot")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_cast_iron", 90), "tfmg:cast_iron_sheet")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_cast_iron", 10), "createbigcannons:cast_iron_nugget")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy
        .bulk_melting(
        Fluid.of("createbigcannons:molten_cast_iron", 810),
        "createbigcannons:cast_iron_block",
        )
        .processingTime(250)
        .set("minHeatRequirement", 8)
        .set("maxHeatRequirement", 50);
    event.recipes.createmetallurgy
        .casting_in_table("createbigcannons:cast_iron_ingot", [
        Fluid.of("createbigcannons:molten_cast_iron", 90),
        "createmetallurgy:graphite_ingot_mold",
        ])
        .processingTime(100);
    event.recipes.createmetallurgy
        .casting_in_table("tfmg:cast_iron_sheet", [
        Fluid.of("createbigcannons:molten_cast_iron", 90),
        "createmetallurgy:graphite_plate_mold",
        ])
        .processingTime(100);
    event.recipes.createmetallurgy
        .casting_in_table("createbigcannons:cast_iron_nugget", [
        Fluid.of("createbigcannons:molten_cast_iron", 10),
        "createmetallurgy:graphite_nugget_mold",
        ])
        .processingTime(10);
    event.recipes.createmetallurgy
        .casting_in_basin("createbigcannons:cast_iron_block", [
        Fluid.of("createbigcannons:molten_cast_iron", 810),
        ])
        .processingTime(200);

    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_bronze", 90), "createbigcannons:bronze_ingot")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_bronze", 10), "createbigcannons:bronze_scrap")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy
        .bulk_melting(
        Fluid.of("createbigcannons:molten_bronze", 810),
        "createbigcannons:bronze_block",
        )
        .processingTime(250)
        .set("minHeatRequirement", 10)
        .set("maxHeatRequirement", 50);
    event.recipes.createmetallurgy
        .alloying(Fluid.of("createbigcannons:molten_bronze", 20), [
        Fluid.of("createmetallurgy:molten_brass", 144),
        Item.of("create:cinder_flour", 1),
        ])
        .heated();
    event.recipes.createmetallurgy
        .casting_in_table("createbigcannons:bronze_ingot", [
        Fluid.of("createbigcannons:molten_bronze", 90),
        "createmetallurgy:graphite_ingot_mold",
        ])
        .processingTime(100);
    event.recipes.createmetallurgy
        .casting_in_table("createbigcannons:bronze_scrap", [
        Fluid.of("createbigcannons:molten_bronze", 10),
        "createmetallurgy:graphite_nugget_mold",
        ])
        .processingTime(10);
    event.recipes.createmetallurgy
        .casting_in_basin("createbigcannons:bronze_block", [
        Fluid.of("createbigcannons:molten_bronze", 810),
        ])
        .processingTime(200);

    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_nethersteel", 90), "createbigcannons:nethersteel_ingot")
        .processingTime(80)
        .superheated();
    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_nethersteel", 10), "createbigcannons:nethersteel_nugget")
        .processingTime(80)
        .superheated();
    event.recipes.createmetallurgy
        .bulk_melting(
        Fluid.of("createbigcannons:molten_nethersteel", 810),
        "createbigcannons:nethersteel_block",
        )
        .processingTime(250)
        .set("minHeatRequirement", 15)
        .set("maxHeatRequirement", 50);
	event.recipes.createmetallurgy
        .alloying(Fluid.of("createbigcannons:molten_nethersteel", 720), [
        Fluid.of("createbigcannons:molten_cast_iron", 720),
        Item.of("minecraft:netherite_scrap", 1),
        ])
        .superheated();
    event.recipes.createmetallurgy
        .casting_in_table("createbigcannons:nethersteel_ingot", [
        Fluid.of("createbigcannons:molten_nethersteel", 90),
        "createmetallurgy:graphite_ingot_mold",
        ])
        .processingTime(100);
    event.recipes.createmetallurgy
        .casting_in_table("createbigcannons:nethersteel_nugget", [
        Fluid.of("createbigcannons:molten_nethersteel", 10),
        "createmetallurgy:graphite_nugget_mold",
        ])
        .processingTime(10);
    event.recipes.createmetallurgy
        .casting_in_basin("createbigcannons:nethersteel_block", [
        Fluid.of("createbigcannons:molten_nethersteel", 810),
        ])
        .processingTime(200);
        
    event.recipes.createmetallurgy.melting(
        Fluid.of("tfmg:molten_steel", 90), "tfmg:steel_ingot")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy.melting(
        Fluid.of("tfmg:molten_steel", 10), "tfmg:steel_nugget")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy
        .bulk_melting(
        Fluid.of("tfmg:molten_steel", 810),
        "tfmg:steel_block",
        )
        .processingTime(250)
        .set("minHeatRequirement", 10)
        .set("maxHeatRequirement", 50);
    event.recipes.createmetallurgy
        .casting_in_table("tfmg:steel_ingot", [
        Fluid.of("tfmg:molten_steel", 90),
        "createmetallurgy:graphite_ingot_mold",
        ])
        .processingTime(100);
    event.recipes.createmetallurgy
        .casting_in_table("tfmg:steel_nugget", [
        Fluid.of("tfmg:molten_steel", 10),
        "createmetallurgy:graphite_nugget_mold",
        ])
        .processingTime(10);
  event.recipes.createmetallurgy
    .casting_in_basin("tfmg:steel_block", [
      Fluid.of("tfmg:molten_steel", 810),
    ])
    .processingTime(200);
});