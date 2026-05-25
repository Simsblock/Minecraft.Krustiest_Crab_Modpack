ServerEvents.highPriorityData(event => {
    event.addJson("oei:replacements/oei.json", [
        {
            "matchItems": [
                "dndesires:asphalt",
                "tfmg:asphalt"
            ],
            "resultItems": "tfmg:asphalt"
        },  
        {
            "matchItems": [
            "createbigcannons:cast_iron_ingot",
            "tfmg:cast_iron_ingot"
            ],
            "resultItems": "createbigcannons:cast_iron_ingot"
        },
        {
            "matchItems": [
            "createbigcannons:cast_iron_nugget",
            "tfmg:cast_iron_nugget"
            ],
            "resultItems": "createbigcannons:cast_iron_nugget"
        },
          {
            "matchItems": [
            "createbigcannons:steel_ingot",
            "createmetallurgy:steel_ingot",
            "tfmg:steel_ingot"
            ],
            "resultItems": "tfmg:steel_ingot"
        },
        {
            "matchItems": [
            "createbigcannons:steel_nugget",
            "createmetallurgy:steel_nugget",
            "tfmg:steel_nugget"
            ],
            "resultItems": "tfmg:steel_nugget"
        },
        {
            "matchItems": [
            "hybrid-aquatic:sulfur",
            "tfmg:sulfur_dust"
            ],
            "resultItems": "tfmg:sulfur_dust"
        },
            {
            "matchItems": [
            "minecraft:sulfur",
            "tfmg:sulfur"
            ],
            "resultItems": "minecraft:sulfur"
        }
    ])
})