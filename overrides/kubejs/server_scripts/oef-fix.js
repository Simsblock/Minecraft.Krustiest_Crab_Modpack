// This exists due to an issue with OEF: https://github.com/Tower-of-Sighs/OneEnough/issues/6
ServerEvents.recipes(event => {
    
    const fluidsToRemove = [
        "tfmg:molten_steel",
        "createmetallurgy:molten_steel",
        "createmetallurgy:molten_slag",
        "createbb:hydrogen"
    ];

    fluidsToRemove.forEach(fluid => {
		event.remove({ id: Fluid.of(fluid) });
        event.remove({ output: Fluid.of(fluid) });
        event.remove({ input: Fluid.of(fluid) });
    });

    //steel
    
    event.custom({
        "type": "tfmg:industrial_blasting",
        "hot_air_usage": 20,
        "ingredients": [
            {
                "item": "create:crushed_raw_iron"
            },
            {
                "tag": "tfmg:flux"
            }
        ],
        "processing_time": 20,
        "results": [
            {
                "amount": 144,
                "id": "createbigcannons:molten_steel"
            },
            {
                "amount": 144,
                "id": "tfmg:molten_slag"
            },
            {
                "amount": 200,
                "id": "tfmg:furnace_gas"
            }
        ]
    })

    event.custom({
        "type": "tfmg:industrial_blasting",
        "hot_air_usage": 40,
        "ingredients": [
            {
                "item": "minecraft:raw_iron"
            },
            {
                "tag": "tfmg:flux"
            }
        ],
        "processing_time": 40,
        "results": [
            {
                "amount": 288,
                "id": "createbigcannons:molten_steel"
            },
            {
                "amount": 288,
                "id": "tfmg:molten_slag"
            },
            {
                "amount": 200,
                "id": "tfmg:furnace_gas"
            }
        ]
    })

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowed_vat_types": [
            "tfmg:firebrick_lined_vat"
        ],
        "ingredients": [
            {
                "item": "create:crushed_raw_iron"
            },
            {
                "tag": "tfmg:flux"
            },
            {
                "item": "tfmg:coal_coke_dust"
            }
        ],
        "machines": [
            "tfmg:graphite_electrode",
            "tfmg:graphite_electrode",
            "tfmg:graphite_electrode"
        ],
        "min_size": 9,
        "processing_time": 20,
        "results": [
            {
            "chance": 0.9,
            "id": "tfmg:coal_coke_dust"
            },
            {
            "amount": 144,
            "id": "createbigcannons:molten_steel"
            },
            {
            "amount": 288,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_steel", 90), "tfmg:steel_ingot")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_steel", 90), "tfmg:heavy_plate")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_steel", 45), "2x tfmg:rebar")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_steel", 45), "2x tfmg:screw")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy.melting(
        Fluid.of("createbigcannons:molten_steel", 10), "tfmg:steel_nugget")
        .processingTime(80)
        .heated();
    event.recipes.createmetallurgy
        .bulk_melting(
        Fluid.of("createbigcannons:molten_steel", 810),
        "tfmg:steel_block",
        )
        .processingTime(250)
        .set("minHeatRequirement", 10)
        .set("maxHeatRequirement", 50);
    event.recipes.createmetallurgy
        .casting_in_table("tfmg:steel_ingot", [
        Fluid.of("createbigcannons:molten_steel", 90),
        "createmetallurgy:graphite_ingot_mold",
        ])
        .processingTime(100);
    event.recipes.createmetallurgy
        .casting_in_table("tfmg:heavy_plate", [
        Fluid.of("createbigcannons:molten_steel", 90),
        "createmetallurgy:graphite_plate_mold",
        ])
        .processingTime(100);
    event.recipes.createmetallurgy
        .casting_in_table("tfmg:steel_nugget", [
        Fluid.of("createbigcannons:molten_steel", 10),
        "createmetallurgy:graphite_nugget_mold",
        ])
        .processingTime(10);
    event.recipes.createmetallurgy
    .casting_in_basin("tfmg:steel_block", [
      Fluid.of("createbigcannons:molten_steel", 810),
    ])
    .processingTime(200);
 
    event.custom({
        "type": "createmetallurgy:entity_melting",
        "entity": {
            "type": "minecraft:wither_skeleton",
            "damage": 4
        },
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "createmetallurgy:molten_iron"
            }
        ],
        "minHeatRequirement": 9,
        "results": [
            {
                "amount": 100,
                "id": "createbigcannons:molten_steel"
            },
            {
                "amount": 200,
                "id": "tfmg:molten_slag"
            }
        ]
    })


    // slag

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:storage_blocks/raw_zinc"
            }
            }
        ],
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [
            {
            "tag": "c:storage_blocks/raw_zinc"
            }
        ],
        "minHeatRequirement": 2,
        "processing_time": 224,
        "results": [
            {
            "amount": 810,
            "id": "createmetallurgy:molten_zinc"
            },
            {
            "amount": 405,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:storage_blocks/raw_iron"
            }
            }
        ],
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [
            {
            "tag": "c:storage_blocks/raw_iron"
            }
        ],
        "minHeatRequirement": 7,
        "processing_time": 224,
        "results": [
            {
            "amount": 810,
            "id": "createmetallurgy:molten_iron"
            },
            {
            "amount": 405,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:storage_blocks/raw_copper"
            }
            }
        ],
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [
            {
            "tag": "c:storage_blocks/raw_copper"
            }
        ],
        "minHeatRequirement": 5,
        "processing_time": 224,
        "results": [
            {
            "amount": 810,
            "id": "createmetallurgy:molten_copper"
            },
            {
            "amount": 405,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:storage_blocks/raw_nickel"
            }
            }
        ],
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [
            {
            "tag": "c:storage_blocks/raw_nickel"
            }
        ],
        "minHeatRequirement": 7,
        "processing_time": 224,
        "results": [
            {
            "amount": 810,
            "id": "createmetallurgy:molten_nickel"
            },
            {
            "amount": 405,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:storage_blocks/raw_lithium"
            }
            }
        ],
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [
            {
            "tag": "c:storage_blocks/raw_lithium"
            }
        ],
        "minHeatRequirement": 0,
        "processing_time": 224,
        "results": [
            {
            "amount": 810,
            "id": "createmetallurgy:molten_lithium"
            },
            {
            "amount": 405,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:storage_blocks/raw_gold"
            }
            }
        ],
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [
            {
            "tag": "c:storage_blocks/raw_gold"
            }
        ],
        "minHeatRequirement": 5,
        "processing_time": 224,
        "results": [
            {
            "amount": 810,
            "id": "createmetallurgy:molten_gold"
            },
            {
            "amount": 405,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:storage_blocks/raw_lead"
            }
            }
        ],
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [
            {
            "tag": "c:storage_blocks/raw_lead"
            }
        ],
        "minHeatRequirement": 1,
        "processing_time": 224,
        "results": [
            {
            "amount": 810,
            "id": "createmetallurgy:molten_lead"
            },
            {
            "amount": 405,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:storage_blocks/raw_tungsten"
            }
            }
        ],
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [
            {
            "tag": "c:storage_blocks/raw_tungsten"
            }
        ],
        "minHeatRequirement": 17,
        "processing_time": 224,
        "results": [
            {
            "amount": 810,
            "id": "createmetallurgy:molten_tungsten"
            },
            {
            "amount": 405,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "item": "create:crushed_raw_lead"
            }
        ],
        "processing_time": 48,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_lead"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:raw_materials/lead"
            }
            }
        ],
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "tag": "c:raw_materials/lead"
            }
        ],
        "processing_time": 40,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_lead"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:raw_materials/nickel"
            }
            }
        ],
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "tag": "c:raw_materials/nickel"
            }
        ],
        "processing_time": 40,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_nickel"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:raw_materials/copper"
            }
            }
        ],
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "tag": "c:raw_materials/copper"
            }
        ],
        "processing_time": 40,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_copper"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:raw_materials/iron"
            }
            }
        ],
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "tag": "c:raw_materials/iron"
            }
        ],
        "processing_time": 40,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_iron"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:raw_materials/zinc"
            }
            }
        ],
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "tag": "c:raw_materials/zinc"
            }
        ],
        "processing_time": 40,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_zinc"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:raw_materials/lithium"
            }
            }
        ],
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "tag": "c:raw_materials/lithium"
            }
        ],
        "processing_time": 40,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_lithium"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:raw_materials/tungsten"
            }
            }
        ],
        "type": "createmetallurgy:melting",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "tag": "c:raw_materials/tungsten"
            }
        ],
        "processing_time": 40,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_tungsten"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "neoforge:conditions": [
            {
            "type": "neoforge:not",
            "value": {
                "type": "neoforge:tag_empty",
                "tag": "c:raw_materials/gold"
            }
            }
        ],
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "tag": "c:raw_materials/gold"
            }
        ],
        "processing_time": 40,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_gold"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "type": "createmetallurgy:melting",
        "heat_requirement": "superheated",
        "ingredients": [
            {
            "item": "createmetallurgy:crushed_raw_tungsten"
            }
        ],
        "processing_time": 48,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_tungsten"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "item": "create:crushed_raw_nickel"
            }
        ],
        "processing_time": 48,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_nickel"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "item": "create:crushed_raw_gold"
            }
        ],
        "processing_time": 48,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_gold"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "item": "create:crushed_raw_iron"
            }
        ],
        "processing_time": 48,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_iron"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "item": "create:crushed_raw_copper"
            }
        ],
        "processing_time": 48,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_copper"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

    event.custom({
        "type": "createmetallurgy:melting",
        "heat_requirement": "heated",
        "ingredients": [
            {
            "item": "create:crushed_raw_zinc"
            }
        ],
        "processing_time": 48,
        "results": [
            {
            "amount": 90,
            "id": "createmetallurgy:molten_zinc"
            },
            {
            "amount": 45,
            "id": "tfmg:molten_slag"
            }
        ]
    })

})