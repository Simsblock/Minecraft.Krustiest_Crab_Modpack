ServerEvents.recipes(event => {
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
            "item": "minecraft:potent_sulfur"
            }
        ],
        "results": [
            {
            "id": "tfmg:sulfur_dust",
            "chance": 1
            },            
            {
            "id": "tfmg:sulfur_dust",
            "chance": 0.8
            },
            {
            "id": "tfmg:sulfur_dust",
            "chance": 0.9
            }
        ],
    })

	event.custom({
		"type": "dndesires:hydraulic_compacting",
		"heat_requirement": "superheated",
		"ingredients": [
			{ "item": "minecraft:blackstone" },
			{ "item": "minecraft:blackstone" },
			{ "type": "neoforge:tag", "amount": 500, "tag": "c:lava" },
			{ "type": "neoforge:single", "amount": 100, "fluid": "brewinandchewin:withering_dross" }
		],
		"results": [
			{ "id": "tfmg:lignite", "count": 2 }
		]
	}).id('kubejs:hydraulic/lignite')

    event.custom({
		"type": "dndesires:hydraulic_compacting",
		"heat_requirement": "superheated",
		"ingredients": [
			{ "item": "minecraft:packed_mud" },
			{ "item": "minecraft:packed_mud" },
			{ "type": "neoforge:tag", "amount": 500, "tag": "c:lava" },
			{ "type": "neoforge:single", "amount": 100, "fluid": "brewinandchewin:red_rum" }
		],
		"results": [
			{ "id": "tfmg:bauxite", "count": 2 }
		]
	}).id('kubejs:hydraulic/bauxite')

    event.custom({
		"type": "dndesires:hydraulic_compacting",
		"heat_requirement": "superheated",
		"ingredients": [
			{ "item": "minecraft:tuff" },
			{ "item": "minecraft:tuff" },
			{ "type": "neoforge:tag", "amount": 500, "tag": "c:lava" },
			{ "type": "neoforge:single", "amount": 100, "fluid": "brewinandchewin:saccharine_rum" }
		],
		"results": [
			{ "id": "tfmg:galena", "count": 2 }
		]
	}).id('kubejs:hydraulic/galena')

    event.custom({
		"type": "dndesires:hydraulic_compacting",
		"heat_requirement": "superheated",
		"ingredients": [
			{ "item": "minecraft:calcite" },
			{ "item": "minecraft:calcite" },
			{ "type": "neoforge:tag", "amount": 500, "tag": "c:lava" },
			{ "type": "neoforge:single", "amount": 100, "fluid": "brewinandchewin:steel_toe_stout" }
		],
		"results": [
			{ "id": "create:limestone", "count": 2 }
		]
	}).id('kubejs:hydraulic/limestone')

})