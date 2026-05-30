//https://github.com/DrMango14/Create-The_Factory_Must_Grow/tree/42e46f2cdffa1c1d4facab772fd578a0dc49da11/src/generated/resources/data/tfmg/recipe/vat_machine_recipe
ServerEvents.recipes(event => {

    const toErase = [
        "createbb:match",
        "createbb:sudafed",
        "createbb:sudafed_box",
        "createbb:aluminosilicate_chunk",
        "createbb:aluminosilicate_bit",
    ]

    toErase.forEach(item => {
        event.remove({ id: item });
        event.remove({ output: item });
        event.remove({ input: item });
    });

    event.remove({ type: 'create:crushing', output: "createbb:white_phosphorus" })
    event.remove({ type: 'create:mixing', output: "createbb:red_phosphorus" })
    event.remove({ type: 'create:mixing', output: "createbb:iodine" })

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "heat_level": 2,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "createmetallurgy:molten_aluminum"
            },
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "tfmg:liquid_silicon"
            },
            {
                "item": "minecraft:clay_ball"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 100,
        "results": [
            {
                "id": "createbb:aluminosilicate_catalyst"
            }
        ]
    }).id('kubejs:vat_machine_recipe/aluminosilicate_catalyst')

    event.recipes.create.mixing(['createbb:white_phosphorus', Fluid.of("tfmg:molten_slag", 100)], 
        [
            "supplementaries:ash",
            "supplementaries:ash",
            "supplementaries:ash",
            "supplementaries:ash",
            "minecraft:quartz",
            "minecraft:quartz",
            "tfmg:coal_coke_dust",
            "tfmg:coal_coke_dust"
        ]).heated().id('kubejs:mixing/white_phosphorus'
    )

    event.recipes.create.mixing(
        'createbb:iodine', 
        [
            Item.of('createbb:brine', 4),
            Fluid.of('createbb:oxygen', 250)
        ]
    ).superheated().id('kubejs:mixing/iodine')

    //meth recipe is fine in base mod

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "heat_level": 1,
        "ingredients": [
            {
                "item": "createbb:white_phosphorus",
            }
        ],
        "min_size": 1,
        "processing_time": 400,
        "results": [
            {
                "id": "createbb:red_phosphorus"
            }
        ]
    }).id('kubejs:vat_machine_recipe/red_phosphorus')

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "ingredients": [
            {
                "item": "createbb:copper_zinc_catalyst"
            },
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ],
        "machines": [
            "tfmg:electrode",
            "tfmg:electrode"
        ],
        "min_size": 1,
        "processing_time": 160,
        "results": [
            {
                "amount": 1000,
                "id": "tfmg:hydrogen"
            },
            {
                "amount": 500,
                "id": "createbb:oxygen"
            },
            {
                "id": "createbb:copper_zinc_catalyst"
            }
        ]
    }).id('kubejs:vat_machine_recipe/electrolysis')

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "heat_level": 1,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "tfmg:carbon_dioxide"
            },
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "tfmg:hydrogen"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 120,
        "results": [
            {
                "amount": 500,
                "id": "createbb:methanol"
            }
        ]
    }).id('kubejs:vat_machine_recipe/methanol')

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "heat_level": 2,
        "ingredients": [
            {
                "item": "createbb:nitrogen"
            },
            {
                "item": "createbb:nitrogen"
            },
            {
                "item": "createbb:nitrogen"
            },
            {
                "item": "createbb:nitrogen"
            },
            {
                "type": "neoforge:single",
                "amount": 1500,
                "fluid": "tfmg:hydrogen"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 180,
        "results": [
            {
                "amount": 1000,
                "id": "createbb:ammonia"
            }
        ]
    }).id('kubejs:vat_machine_recipe/ammonia')

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "heat_level": 2,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "createbb:methanol"
            },
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "tfmg:carbon_dioxide"
            },
            {
                "type": "neoforge:single",
                "amount": 250,
                "fluid": "tfmg:hydrogen"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 150,
        "results": [
            {
                "amount": 500,
                "id": "createbb:acetic_anhydride"
            }
        ]
    }).id('kubejs:vat_machine_recipe/acetic_anhydride')
    
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "heat_level": 2,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "tfmg:naphtha"
            },
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "tfmg:carbon_dioxide"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 200,
        "results": [
            {
                "amount": 500,
                "id": "createbb:phenylacetic_acid"
            },
            {
                "amount": 100,
                "id": "tfmg:molten_slag"
            }
        ]
    }).id('kubejs:vat_machine_recipe/phenylacetic_acid')

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "heat_level": 2,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "createbb:methanol"
            },
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "createbb:ammonia"
            },
            {
                "item": "createbb:aluminosilicate_catalyst"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 120,
        "results": [
            {
                "amount": 500,
                "id": "createbb:methylamine"
            },
            {
                "id": "createbb:aluminosilicate_catalyst"
            }
        ]
    }).id('kubejs:vat_machine_recipe/methylamine')

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "heat_level": 2,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "createbb:phenylacetic_acid"
            },
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "createbb:acetic_anhydride"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 200,
        "results": [
            {
                "amount": 500,
                "id": "createbb:phenylacetone"
            },
            {
                "amount": 250,
                "id": "tfmg:carbon_dioxide"
            }
        ]
    }).id('kubejs:vat_machine_recipe/phenylacetone')

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "heat_level": 1,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "createbb:phenylacetone"
            },
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "createbb:methylamine"
            },
            {
                "type": "neoforge:single",
                "amount": 500,
                "fluid": "tfmg:hydrogen"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 400,
        "results": [
            {
                "amount": 1000,
                "id": "createbb:liquid_blue_methamphetamine"
            }
        ]
    }).id('kubejs:vat_machine_recipe/liquid_blue_meth')

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat"
        ],
        "heat_level": 1,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "createbb:ammonia"
            },
            {
                "type": "neoforge:single",
                "amount": 1000, 
                "fluid": "tfmg:hot_air"
            }
        ],
        "machines": [
            "tfmg:mixing"
        ],
        "min_size": 1,
        "processing_time": 150,
        "results": [
            {
                "count": 10,
                "id": "createbb:nitrogen"
            },
            {
                "amount": 1500,
                "id": "minecraft:water"
            }
        ]
    }).id('kubejs:mixing/nitrogen')
})