ServerEvents.recipes(event => {

  // ----------------------------
  // SAFE GUARD HELPERS
  // ----------------------------

  const hasMod = (id) => Platform.isLoaded(id);

  const safe = (mod, fn) => {
    if (!mod || Platform.isLoaded(mod)) fn();
  };

  const fluid = (id, amount) => Fluid.of(id, amount);

  // ----------------------------
  // CREATE_THINGS_AND_MISC SAFEGUARD
  // ----------------------------

  safe('create_things_and_misc', () => {

    // ----------------------------
    // SAILS
    // ----------------------------

    const sail = (out, plank) => {
      event.shaped(`2x ${out}`, [
        'WS',
        'SA'
      ], {
        W: plank,
        S: '#forge:rods/wooden',
        A: 'create:andesite_alloy'
      });
    };

    sail('create_things_and_misc:acacia_sail', 'minecraft:acacia_planks');
    sail('create_things_and_misc:birch_sail', 'minecraft:birch_planks');
    sail('create_things_and_misc:cherry_sail', 'minecraft:cherry_planks');
    sail('create_things_and_misc:crimson_sail', 'minecraft:crimson_planks');
    sail('create_things_and_misc:dark_oak_sail', 'minecraft:dark_oak_planks');
    sail('create_things_and_misc:jungle_sail', 'minecraft:jungle_planks');
    sail('create_things_and_misc:oak_sail', 'minecraft:oak_planks');
    sail('create_things_and_misc:spruce_sail', 'minecraft:spruce_planks');
    sail('create_things_and_misc:warped_sail', 'minecraft:warped_planks');
    sail('create_things_and_misc:mangrove_sail', 'minecraft:mangrove_planks');
    sail('create_things_and_misc:bamboo_sail', 'minecraft:bamboo_block');

    if (Platform.isLoaded('nethers_exoticism')) {
      sail('create_things_and_misc:jaboticaba_sail', 'nethers_exoticism:jaboticaba_planks');
      sail('create_things_and_misc:ramboutan_sail', 'nethers_exoticism:ramboutan_planks');
    }

    if (Platform.isLoaded('wildbackport')) {
      sail('create_things_and_misc:mangrove_sail', 'wildbackport:mangrove_planks');
    }

    if (Platform.isLoaded('unusualend')) {
      sail('create_things_and_misc:chorus_sail', 'unusualend:chorus_nest_planks');
    }

    // ----------------------------
    // SIMPLE ITEMS
    // ----------------------------

    event.shaped('create_things_and_misc:glue_packaging', [
      ' A',
      'B '
    ], {
      A: 'create:iron_sheet',
      B: 'minecraft:iron_nugget'
    });

    event.shaped('create_things_and_misc:sticky_boots_boots', [
        'A A',
        'B B'
    ], {
        A: 'create:sticker',
        B: 'minecraft:slime_block'
    }
    )

    event.shaped('create_things_and_misc:zinc_knife', [
        ' A',
        'B '
    ], {
        A: 'create:zinc_ingot',
        B: 'minecraft:stick'
    });

    event.shaped('create_things_and_misc:sprinkler', [
        ' A ',
        'ABA',
        'CDC'
    ], {
        A: 'create_things_and_misc:sprinkler_head',
        B: 'create:propeller',
        C: 'create:copper_casing',
        D: 'create:fluid_tank'
    });

    event.shaped('create_things_and_misc:neon_tube', [
        'A',
        'B',
        'A'
    ], {
        A: '#c:glass_blocks',
        B: 'create:electron_tube'
    });

    // SHAPELESS //

    event.shapeless('create_things_and_misc:empty_card', [
      'create:copper_sheet',
      'minecraft:paper'
    ]);
    
    event.shapeless("create_things_and_misc:andesite_casing_trapdoor", [
      "create:andesite_casing",
      "#wooden_trapdoors"
    ]);
    event.shapeless("create_things_and_misc:copper_casing_trapdoor", [
      "create:copper_casing",
      "#wooden_trapdoors"
    ]);
    event.shapeless("create_things_and_misc:brass_casing_trapdoor", [
      "create:brass_casing",
      "#wooden_trapdoors"
    ]);

    // ----------------------------
    // FIXED COMPLEX SHAPES (SAFE STRINGS ONLY)
    // ----------------------------

    event.shaped('create_things_and_misc:brass_knife', [
      ' A',
      'B '
    ], {
      A: 'create:brass_ingot',
      B: 'minecraft:stick'
    });

    event.shaped('2x create_things_and_misc:brass_speaker', [
      ' A ',
      'BCC',
      'BD '
    ], {
      A: 'create:railway_casing',
      B: 'create:filter',
      C: 'create_things_and_misc:vibration_mechanism',
      D: 'create:railway_casing'
    });

    event.shaped('create_things_and_misc:card_reader', [
      'AAA',
      'BCB',
      'ADA'
    ], {
      A: 'create:brass_sheet',
      B: 'minecraft:stone',
      C: 'minecraft:redstone',
      D: 'minecraft:dried_kelp'
    });

    event.shaped('create_things_and_misc:card_press', [
      'AAA',
      'BCB',
      'DDD'
    ], {
      A: 'create:brass_sheet',
      B: 'create:mechanical_press',
      C: 'minecraft:stone',
      D: 'create:brass_casing'
    });

    event.shaped('create_things_and_misc:portable_whistle', [
      ' AA',
      'BC '
    ], {
      A: 'create:golden_sheet',
      B: 'minecraft:copper_ingot',
      C: 'minecraft:gold_ingot'
    });

    event.shaped('create_things_and_misc:radar', [
      'A A',
      'BCB',
      'AAA'
    ], {
      A: 'create:andesite_alloy',
      B: 'create:display_board',
      C: 'create_things_and_misc:vibration_mechanism'
    });

    event.shaped('create_things_and_misc:train_stop', [
      ' A ',
      'BCD'
    ], {
      A: 'create:andesite_casing',
      B: 'create:metal_girder',
      C: 'create:track',
      D: 'create:metal_girder'
    });

    // ----------------------------
    // CHANCE CRUSHING (VALID)
    // ----------------------------

    event.recipes.createCrushing(
      [
        CreateItem.of('create_things_and_misc:crushed_magma', 2),
        CreateItem.of('create_things_and_misc:crushed_magma', 0.25),
        CreateItem.of('create:scoria', 0.125)
      ],
      'minecraft:magma_block'
    );

    // ----------------------------
    // ITEM APPLICATION (SAFE FORM)
    // ----------------------------

    event.recipes.create.item_application(
      'create_things_and_misc:brass_sticky_launcher',
      ['create_things_and_misc:sticky_launcher', 'create:brass_block']
    );

    event.recipes.create.item_application(
      'create_things_and_misc:sticky_launcher',
      ['create:sticker', 'minecraft:copper_block']
    );

    // ----------------------------
    // PRESSING / MIXING (USING YOUR HELPERS)
    // ----------------------------

    event.recipes.createPressing(
      'create_things_and_misc:experience_sheet',
      'create:experience_nugget'
    );
    event.recipes.createPressing(
     'create_things_and_misc:rose_quartz_sheet',
     'create:polished_rose_quartz'
    );

    event.recipes.createMixing(
      fluid('create_things_and_misc:diluted_bonemeal', 100),
      [
        Item.of('minecraft:bone_meal', 5),
        fluid('minecraft:water', 100)
      ]
    );

    event.recipes.createMixing(
      fluid('create_things_and_misc:slime', 100),
      ['minecraft:slime_ball']
    );

    event.recipes.createMixing(
      'minecraft:magma_cream',
      ['create_things_and_misc:crushed_magma', 'minecraft:slime_ball']
    );

    // ----------------------------
    // FILLING (SAFE)
    // ----------------------------

    event.recipes.createFilling('create_things_and_misc:stoup_gun_water', [Item.of('create_things_and_misc:spout_gun'), fluid('minecraft:water', 1000)]);
    event.recipes.createFilling('create_things_and_misc:spout_gun_honey', [Item.of('create_things_and_misc:spout_gun'), fluid('create:honey', 1000)]);
    event.recipes.createFilling('create_things_and_misc:spout_gun_lava', [Item.of('create_things_and_misc:spout_gun'), fluid('minecraft:lava', 1000)]);
    event.recipes.createFilling('create_things_and_misc:slime_cake', [Item.of('create:blaze_cake_base'), fluid('create_things_and_misc:slime', 250)]);
    event.recipes.createFilling('create_things_and_misc:spout_gun_chocolate', [Item.of('create_things_and_misc:spout_gun'), fluid('create:chocolate', 1000)]);
    event.recipes.createFilling('create_things_and_misc:spout_gun_slime', [Item.of('create_things_and_misc:spout_gun'), fluid('create_things_and_misc:slime', 1000)]);

    event.recipes.createFilling('create:super_glue', [Item.of('create_things_and_misc:glue_packaging'), fluid('create_things_and_misc:slime', 100)]);

    // ----------------------------
    // EMPTYING
    // ----------------------------

    event.recipes.createEmptying(
      ['minecraft:bucket', fluid('create_things_and_misc:slime', 1000)],
      'create_things_and_misc:slime_bucket'
    );

    // ----------------------------
    // MECHANICAL CRAFTING (FIXED PATTERNS)
    // ----------------------------

    event.recipes.create.mechanical_crafting(
      'create_things_and_misc:blaze_ballon_fire',
      [
        ' A  ',
        'LKKS',
        'LR  '
      ],
      {
        A: 'create:blaze_burner',
        L: 'create:metal_girder',
        K: 'create:fluid_tank',
        S: 'create:white_sail',
        R: 'create:precision_mechanism'
      }
    );

    event.recipes.create.mechanical_crafting(
      'create_things_and_misc:spout_gun',
      [
        ' A  ',
        'LKKS',
        'LR  '
      ],
      {
        A: 'create:fluid_tank',
        L: 'create:fluid_pipe',
        K: 'create:copper_sheet',
        S: 'create:spout',
        R: 'create:precision_mechanism'
      }
    );

    // ----------------------------
    // STONECUTTING
    // ----------------------------

    event.recipes.stonecutting(Item.of('create_things_and_misc:brass_bricks', 2),
         'create:brass_sheet')
    event.recipes.stonecutting(Item.of('create_things_and_misc:brass_tiles', 2),
         'create:brass_sheet')
    event.recipes.stonecutting(Item.of('create_things_and_misc:sturdy_sheet_block', 2),
         'create:sturdy_sheet')

    // ----------------------------
    // SHAPELESS CRAFTING
    // ----------------------------

    event.recipes.shapeless('create_things_and_misc:powdered_obsidian_block',
        Item.of('create:powdered_obsidian', 9)
    );

    // ----------------------------
    // DEPLOYING
    // ----------------------------

    event.recipes.createDeploying(
      'create_things_and_misc:empty_ticket',
      ['minecraft:paper', 'minecraft:shears']
    );

    // ----------------------------
    // SEQUENCED ASSEMBLY
    // ----------------------------

    event.recipes.createSequencedAssembly(
      'create_things_and_misc:mending_rune',
      'create_things_and_misc:experience_sheet',
      [
        event.recipes.createDeploying('create_things_and_misc:incomplete_mending_rune',
          ['create_things_and_misc:incomplete_mending_rune', 'create_things_and_misc:rose_quartz_sheet']
        ),
        event.recipes.createDeploying('create_things_and_misc:incomplete_mending_rune',
          ['create_things_and_misc:incomplete_mending_rune', 'create:experience_nugget']
        )
      ]
    ).transitionalItem('create_things_and_misc:incomplete_mending_rune').loops(10);

    event.recipes.createSequencedAssembly(
      'create_things_and_misc:vibration_mechanism',
      'create_things_and_misc:rose_quartz_sheet',
      [
        event.recipes.createDeploying('create_things_and_misc:incomplete_vibration_mechanism',
          ['create_things_and_misc:incomplete_vibration_mechanism', 'minecraft:amethyst_shard']
        ),
        event.recipes.createDeploying('create_things_and_misc:incomplete_vibration_mechanism',
          ['create_things_and_misc:incomplete_vibration_mechanism', 'create:cogwheel']
        )
      ]
    ).transitionalItem('create_things_and_misc:incomplete_vibration_mechanism').loops(5);

  });

});