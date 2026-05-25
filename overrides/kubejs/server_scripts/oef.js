ServerEvents.highPriorityData(event => {
    event.addJson("oef:replacements/oef.json", [
        {
            "matchFluid": [
            "createbb:hydrogen",
            "tfmg:hydrogen"
            ],
            "resultFluid": "tfmg:hydrogen"
        },
        {
            "matchFluid": [
            "createmetallurgy:molten_slag",
            "tfmg:molten_slag"
            ],
            "resultFluid": "tfmg:molten_slag"
        },
        {
            "matchFluid": [
            "createbigcannons:molten_steel",
            "createmetallurgy:molten_steel",
            "tfmg:molten_steel"
            ],
            "resultFluid": "createbigcannons:molten_steel"
        }
    ])
})