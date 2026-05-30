
ServerEvents.tags('enchantment', event => {
	
	const ALLOW_ENCHANTING = [
		// Vanilla
		'minecraft:vanishing_curse',
		'minecraft:binding_curse',
		'minecraft:wind_burst',
		
		// Encore
		'enchantencore:ownership_curse',
		'enchantencore:caravan_curse',
		'enchantencore:undying_curse',
		'enchantencore:hiding_curse',
		'enchantencore:reach_curse',
		'enchantencore:fragility_curse',
		'enchantencore:welfare_curse',
		'enchantencore:randomness_curse',
		'enchantencore:death_curse',
		'enchantencore:breeze_curse',
		'enchantencore:crank_curse',
	]

	const TABLE_TAGS = [
		'minecraft:in_enchanting_table',
		'minecraft:non_treasure',
	];

	const REMOVE_FROM_TAGS = [
		'minecraft:treasure',
		'minecraft:double_trade_price',
	];

    ALLOW_ENCHANTING.forEach(ench => {
        TABLE_TAGS.forEach(tag => event.add(tag, ench));
        REMOVE_FROM_TAGS.forEach(tag => event.remove(tag, ench));
    });
});