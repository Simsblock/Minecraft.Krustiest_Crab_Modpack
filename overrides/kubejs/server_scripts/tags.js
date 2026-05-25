ServerEvents.tags('item', event => {

	const materials = ['steel', 'aluminum', 'lead']
    const woodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry'];
    
    materials.forEach(mat => {
        const sword = `tfmg:${mat}_sword`
        const pickaxe = `tfmg:${mat}_pickaxe`
        const shovel = `tfmg:${mat}_shovel`
        const axe = `tfmg:${mat}_axe`
        const hoe = `tfmg:${mat}_hoe`

        event.add('minecraft:swords', sword)
        event.add('c:tools/swords', sword)
        event.add('c:tools/melee_weapon', sword)
        event.add('minecraft:enchantable/sword', sword)
        event.add('minecraft:enchantable/weapon', sword)
        event.add('minecraft:enchantable/sharp_weapon', sword)
        event.add('minecraft:enchantable/fire_aspect', sword)
        event.add('minecraft:enchantable/durability', sword)

        event.add('minecraft:pickaxes', pickaxe)
        event.add('c:tools/pickaxes', pickaxe)
        event.add('c:tools/mining_tool', pickaxe)
        event.add('minecraft:enchantable/mining', pickaxe)
        event.add('minecraft:enchantable/mining_loot', pickaxe)
        event.add('minecraft:enchantable/durability', pickaxe)
        event.add('minecraft:enchantable/vanishing', pickaxe)

        event.add('minecraft:shovels', shovel)
        event.add('c:tools/shovels', shovel)
        event.add('c:tools/mining_tool', shovel)
        event.add('minecraft:enchantable/mining', shovel)
        event.add('minecraft:enchantable/durability', shovel)

        event.add('minecraft:axes', axe)
        event.add('c:tools/axes', axe)
        event.add('c:tools/mining_tool', axe)
        event.add('c:tools/melee_weapon', axe)
        event.add('minecraft:enchantable/mining', axe)
        event.add('minecraft:enchantable/sharp_weapon', axe)
        event.add('minecraft:enchantable/durability', axe)

        event.add('minecraft:hoes', hoe)
        event.add('c:tools/hoes', hoe)
        event.add('minecraft:enchantable/mining', hoe)
        event.add('minecraft:enchantable/durability', hoe)

        const allTools = [sword, pickaxe, shovel, axe, hoe]
        event.add('c:tools', allTools)
        event.add('minecraft:enchantable/vanishing', allTools)
    })

    woodTypes.forEach(type => {
        const chest = `woodworks:${type}_chest`;
        const trappedChest = `woodworks:trapped_${type}_chest`;
        
        event.add('create:chest_mounted_storage', chest)
        event.add('create:chest_mounted_storage', trappedChest)
    })

    const blades = ['tfmg:lithium_blade','tfmg:lit_lithium_blade'];
    
    blades.forEach(blade => {
        event.add('minecraft:swords', blade)
        event.add('c:tools/swords', blade)
        event.add('c:tools/melee_weapon', blade)
        event.add('minecraft:enchantable/sword', blade)
        event.add('minecraft:enchantable/weapon', blade)
        event.add('minecraft:enchantable/sharp_weapon', blade)
        event.add('minecraft:enchantable/fire_aspect', blade)
        event.add('minecraft:enchantable/durability', blade)
        event.add('c:tools', blade)
        event.add('minecraft:enchantable/vanishing', blade)
    })

    event.add('c:crabs', [
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
        'pastel:koi'
    ])
    event.add('c:large_fish', [
        '#hybrid-aquatic:large_fish',
    ])
    event.add('c:foods/cooked_fish', 'hybrid-aquatic:cooked_fish_meat')
    event.add('c:foods/cooked_fish', 'hybrid-aquatic:cooked_fish_steak')
    event.add('c:pots', [
        'minersdelight:copper_pot',
        'farmersdelight:cooking_pot',
        'youkaisfeasts:steamer_pot',
        'youkaisfeasts:small_iron_pot',
        'youkaisfeasts:short_iron_pot',
        'youkaisfeasts:stockpot',
    ])
    event.add('c:trident_materials', [
        //'hybrid-aquatic:shark_tooth',
        'upgrade_aquatic:thrasher_tooth',
        'create_aquatic_ambitions:spiky_shell',
    ])
})