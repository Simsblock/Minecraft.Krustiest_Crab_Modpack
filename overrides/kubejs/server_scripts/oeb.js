ServerEvents.generateData('before_mods', event => {
    event.text("oeb:replacements/raw_materials.json", JSON.stringify([
            {
                "matchBlock": [
                    "dndesires:asphalt",
                    "tfmg:asphalt"
                ],
                    "resultBlock": "tfmg:asphalt"
            },
            {
                "matchBlock": [
                    "minecraft:sulfur",
                    "tfmg:sulfur"
                ],
                    "resultBlock": "minecraft:sulfur"
            }
        ])
    )
})