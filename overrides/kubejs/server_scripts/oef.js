ServerEvents.generateData('before_mods', event => {
    event.text("oef:replacements/raw_materials.json", JSON.stringify([
			{
				"matchFluid": ["createbb:hydrogen", "tfmg:hydrogen"],
				"resultFluid": "tfmg:hydrogen"
			},
			{
				"matchFluid": ["createmetallurgy:molten_slag", "tfmg:molten_slag"],
				"resultFluid": "tfmg:molten_slag"
			},
			{
				"matchFluid": ["createbigcannons:molten_steel", "createmetallurgy:molten_steel", "tfmg:molten_steel"],
				"resultFluid": "createbigcannons:molten_steel"
			}
		])
	)
})