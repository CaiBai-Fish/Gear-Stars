ServerEvents.recipes(event => {
    //Saw 手锯
    event.shaped(Item.of('kubejs:stone_saw', 1),[
        'ACC',
        'ABC'
    ],{
        A:'minecraft:stick',
        B:'minecraft:flint',
        C:'kubejs:stone_rod'
    })
    event.shaped(Item.of('kubejs:iron_saw', 1),[
        'ACC',
        'ABC'
    ],{
        A:'minecraft:stick',
        B:'minecraft:flint',
        C:'createaddition:iron_rod'
    })
    event.shaped(Item.of('kubejs:diamond_saw', 1),[
        'ACC',
        'ABC'
    ],{
        A:'minecraft:stick',
        B:'minecraft:diamond',
        C:'createaddition:iron_rod'
    })
    event.shaped(Item.of('kubejs:stone_rod',1),[
        'A',
        'A'
    ],{
        A:'#forge:cobblestone'
    })
    //Mechanism 构件
    event.shapeless(Item.of('kubejs:andesite_mechanism', 1), ['create:andesite_alloy','create:cogwheel','#kubejs:saws','#minecraft:logs'])
        .damageIngredient('#kubejs:saws', 1)
    event.shaped(Item.of('kubejs:copper_mechanism', 1), [
        'ABA'
    ],{
        A:'create:copper_sheet',
        B:'kubejs:andesite_mechanism'
    })
    //Machine 机器
    event.shaped(Item.of('kubejs:andesite_machine',1),[         //安山机器
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'kubejs:andesite_mechanism',
        B:'create:andesite_casing'
    })
    event.shaped(Item.of('kubejs:copper_machine', 1),[          //铜机器
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'kubejs:copper_mechanism',
        B:'create:copper_casing'
    })
    event.shaped(Item.of('kubejs:brass_machine', 1), [           //黄铜机器
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'create:precision_mechanism',
        B:'create:brass_casing'
    })
    event.shaped(Item.of('kubejs:iron_machine', 1), [           //精钢机器
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'kubejs:iron_mechanism',
        B:'kubejs:iron_casing'
    })
    event.shaped(Item.of('kubejs:desh_machine', 1), [           //戴斯机器
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'kubejs:desh_mechanism',
        B:'kubejs:desh_casing'
    })
    event.shaped(Item.of('kubejs:ostrum_machine', 1), [         //紫金机器
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'kubejs:ostrum_mechanism',
        B:'kubejs:ostrum_casing'
    })
    //模板
    let template = (tid, input) => {
        let id = 'kubejs:' + tid + '_template'
        let oid = 'kubejs:' + tid + '_mechanism'
        event.shaped(Item.of(id, 2),[
            'ABA',
            'ACA',
            'AAA'
        ],{
            A:oid,
            B:'kubejs:base_template',
            C:input
        })
    }
    template('andesite', 'create:andesite_alloy')
    template('copper', 'minecraft:copper_ingot')
    template('iron', 'ad_astra:steel_ingot')
    template('desh', 'ad_astra:desh_ingot');
    template('ostrum', 'ad_astra:ostrum_ingot')
    template('calorite', 'ad_astra:calorite_ingot')
    event.shaped(Item.of('kubejs:base_template', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'#forge:stone',
        B:'minecraft:diamond'
    })
    event.shaped(Item.of('kubejs:base_template', 3),[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'#forge:stone',
        C:'minecraft:diamond',
        B:'kubejs:base_template'
    })

    //Others 杂项
    //锻造台
    event.smithing('kubejs:netherite_saw', 'kubejs:diamond_saw', 'minecraft:netherite_ingot') 
    event.smithing('create:adjustable_chain_gearshift', 'create:encased_chain_drive', 'minecraft:redstone')
    event.smithing('create:sequenced_gearshift', 'create:encased_chain_drive', 'create:electron_tube')

    event.smithing('create:encased_fan', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'create:propeller')
    event.smithing('create:mechanical_press', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'minecraft:iron_block')
    event.smithing('create:mechanical_mixer', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'create:whisk')
    event.smithing('create:contraption_controls', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'create:electron_tube')
    event.smithing('4x railways:semaphore', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'create:electron_tube')
    event.smithing('create:deployer', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'create:brass_hand')
    event.smithing('create:mechanical_drill', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'kubejs:drill_head')
    event.smithing('create:mechanical_saw', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'kubejs:saw_blade')
    event.smithing('create:nozzle', 'kubejs:andesite_template', 'kubejs:andesite_machine', '#minecraft:wool')
    event.smithing('create:schematicannon', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'minecraft:dispenser')
    event.smithing('create:mechanical_piston', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'create:piston_extension_pole')
    event.smithing('create:windmill_bearing', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'create:shaft')
    event.smithing('create:cart_assembler', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'minecraft:rail')
    event.smithing('create:sticker', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'minecraft:slime_block')
    event.smithing('create:gantry_carriage', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'create:cogwheel')
    event.smithing('createaddition:rolling_mill', 'kubejs:andesite_template', 'kubejs:andesite_machine', 'create:shaft')
    
    event.smithing('create:mechanical_bearing', 'kubejs:andesite_template', 'create:windmill_bearing', 'create:cogwheel')
    
    event.smithing('create:spout', 'kubejs:copper_template', 'kubejs:copper_machine', 'minecraft:hopper')
    event.smithing('create:item_drain', 'kubejs:copper_template', 'kubejs:copper_machine', 'minecraft:bucket')
    
    event.smithing('create:rotation_speed_controller', 'kubejs:brass_template', 'kubejs:brass_machine', 'create:cogwheel')
    event.smithing('create:mechanical_arm', 'kubejs:brass_template', 'kubejs:brass_machine', 'create:brass_hand')
    event.smithing('create:content_observer', 'kubejs:brass_template', 'kubejs:brass_machine', 'minecraft:observer')
    event.smithing('create:stockpile_switch', 'kubejs:brass_template', 'kubejs:brass_machine', 'minecraft:comparator')
    event.smithing('create:smart_chute', 'kubejs:brass_template', 'kubejs:brass_machine', 'create:chute')

    event.smithing('ad_astra:fuel_refinery', 'kubejs:iron_template', 'kubejs:iron_machine', 'minecraft:furnace')
    event.smithing('ad_astra:oxygen_loader', 'kubejs:iron_template', 'kubejs:iron_machine', 'ad_astra:gas_tank')
    event.smithing('ad_astra:coal_generator', 'kubejs:iron_template', 'kubejs:iron_machine', 'quark:deepslate_furnace')
    event.smithing('ad_astra:compressor', 'kubejs:iron_template', 'kubejs:iron_machine', 'minecraft:piston')
    event.smithing('ad_astra:etrionic_blast_furnace', 'kubejs:iron_template', 'kubejs:iron_machine', 'minecraft:blast_furnace')

    event.smithing('ad_astra:solar_panel', 'kubejs:desh_template', 'kubejs:desh_machine', 'minecraft:blue_stained_glass')
    event.smithing('ad_astra:water_pump', 'kubejs:desh_template', 'kubejs:desh_machine', 'create:mechanical_pump')
    event.smithing('ad_astra:gravity_normalizer', 'kubejs:desh_template', 'kubejs:desh_machine', 'ad_astra:etrionic_capacitor')
    event.smithing('ad_astra:oxygen_distributor', 'kubejs:desh_template', 'kubejs:desh_machine', 'ad_astra:fan')
    
    event.smithing('ad_astra:energizer', 'kubejs:ostrum_template', 'kubejs:ostrum_machine', 'minecraft:diamond_block')
    event.smithing('ad_astra:cryo_freezer', 'kubejs:ostrum_template', 'kubejs:ostrum_machine', 'ad_astra:ice_shard')
    event.smithing('ad_astra:oxygen_sensor', 'kubejs:ostrum_template', 'kubejs:ostrum_machine', 'minecraft:observer')

    event.smithing('ad_astra:steel_tank', 'kubejs:iron_template', 'kubejs:iron_mechanism', 'minecraft:bucket')
    event.smithing('ad_astra:desh_tank', 'kubejs:desh_template', 'kubejs:desh_mechanism', 'minecraft:bucket')
    event.smithing('ad_astra:ostrum_tank', 'kubejs:ostrum_template', 'kubejs:ostrum_mechanism', 'minecraft:bucket')
    event.smithing('ad_astra:calorite_tank', 'kubejs:calorite_template', 'kubejs:calorite_mechanism', 'minecraft:bucket')

    let taa = (tem, mod) => {
        let inputid = mod + ':iron_' + tem
        let outputid = mod + ':diamond_' + tem
        event.smithing(outputid, 'kubejs:diamond_template', 'minecraft:diamond', inputid)
    }
    taa('sword', 'minecraft')
    taa('helmet', 'minecraft')
    taa('chestplate', 'minecraft')
    taa('leggings', 'minecraft')
    taa('boots', 'minecraft')
    taa('shovel', 'minecraft')
    taa('pickaxe', 'minecraft')
    taa('axe', 'minecraft')
    taa('hoe', 'minecraft')
    taa('wand', 'constructionwand')
    event.smithing('constructionwand:infinity_wand', 'constructionwand:diamond_wand', 'minecraft:nether_star')
    let sim = (temp) => {
        let inputid = 'simplyswords:netherite_' + temp
        let outputid = 'simplyswords:runic_' + temp
        event.smithing(outputid, 'simplyswords:runic_tablet', inputid, 'minecraft:diamond')
        event.smithing(outputid, 'simplyswords:runic_tablet', outputid, 'minecraft:diamond')
    }
    sim('longsword')
    sim('twinblade')
    sim('rapier')
    sim('katana')
    sim('sai')
    sim('spear')
    sim('glaive')
    sim('warglaive')
    sim('cutlass')
    sim('claymore')
    sim('greathammer')
    sim('greataxe')
    sim('chakram')
    sim('scythe')
    sim('halberd')

    //切石机
    event.stonecutting('create:cuckoo_clock', 'kubejs:andesite_machine')
    event.stonecutting('create:millstone', 'kubejs:andesite_machine')
    event.stonecutting('create:depot', 'kubejs:andesite_machine')
    event.stonecutting('create:weighted_ejector', 'kubejs:andesite_machine')
    event.stonecutting('create:speedometer', 'kubejs:andesite_machine')
    event.stonecutting('create:stressometer', 'kubejs:andesite_machine')
    event.stonecutting('2x create:portable_storage_interface', 'kubejs:andesite_machine')
    event.stonecutting('create:mechanical_harvester', 'kubejs:andesite_machine')
    event.stonecutting('create:mechanical_plough', 'kubejs:andesite_machine')
    event.stonecutting('create:mechanical_roller', 'kubejs:andesite_machine')
    event.stonecutting('4x create:andesite_funnel', 'kubejs:andesite_machine')
    event.stonecutting('2x create:andesite_tunnel', 'kubejs:andesite_machine')
    event.stonecutting('2x create:redstone_contact', 'kubejs:andesite_machine')
    
    event.stonecutting('4x create:fluid_pipe', 'kubejs:copper_machine')
    event.stonecutting('create:mechanical_pump', 'kubejs:copper_machine')
    event.stonecutting('create:fluid_valve', 'kubejs:copper_machine')
    event.stonecutting('4x create:copper_valve_handle', 'kubejs:copper_machine')
    event.stonecutting('create:fluid_tank', 'kubejs:copper_machine')
    event.stonecutting('create:hose_pulley', 'kubejs:copper_machine')
    event.stonecutting('2x create:portable_fluid_interface', 'kubejs:copper_machine')
    event.stonecutting('2x create:steam_engine', 'kubejs:copper_machine')
    event.stonecutting('2x create:steam_whistle', 'kubejs:copper_machine')
    
    event.stonecutting('4x create:mechanical_crafter', 'kubejs:brass_machine')
    event.stonecutting('2x create:redstone_link', 'kubejs:brass_machine')
    event.stonecutting('create:display_link', 'kubejs:brass_machine')
    event.stonecutting('2x create:brass_tunnel', 'kubejs:brass_machine')
    event.stonecutting('4x create:brass_funnel', 'kubejs:brass_machine')
    event.stonecutting('create:peculiar_bell', 'kubejs:brass_machine')
    event.stonecutting('create:brown_toolbox', 'kubejs:brass_machine')
    event.stonecutting('4x create:pulse_repeater', 'kubejs:brass_machine')
    event.stonecutting('4x create:pulse_extender', 'kubejs:brass_machine')
    event.stonecutting('4x create:powered_latch', 'kubejs:brass_machine')
    event.stonecutting('4x create:powered_toggle_latch', 'kubejs:brass_machine')

    event.stonecutting('ad_astra:engine_frame', 'kubejs:iron_machine')
    event.stonecutting('ad_astra:fan', 'kubejs:iron_machine')
    event.stonecutting('ad_astra:oxygen_gear', 'kubejs:iron_machine')
    event.stonecutting('ad_astra:rocket_nose_cone', 'kubejs:iron_machine')
    event.stonecutting('ad_astra:rocket_fin', 'kubejs:iron_machine')
    event.stonecutting('ad_astra:gas_tank', 'kubejs:iron_machine')

    event.stonecutting('2x minecraft:oak_slab', 'minecraft:oak_planks')
    event.stonecutting('2x minecraft:spruce_slab', 'minecraft:spruce_planks')
    event.stonecutting('2x minecraft:birch_slab', 'minecraft:birch_planks')
    event.stonecutting('2x minecraft:jungle_slab', 'minecraft:jungle_planks')
    event.stonecutting('2x minecraft:acacia_slab', 'minecraft:acacia_planks')
    event.stonecutting('2x minecraft:dark_oak_slab', 'minecraft:dark_oak_planks')
    event.stonecutting('2x minecraft:mangrove_slab', 'minecraft:mangrove_planks')
    event.stonecutting('2x minecraft:crimson_slab', 'minecraft:crimson_planks')
    event.stonecutting('2x minecraft:warped_slab', 'minecraft:warped_planks')
    event.stonecutting('2x ad_astra:glacian_slab', 'ad_astra:glacian_planks')
    event.stonecutting('2x ad_astra:aeronos_slab', 'ad_astra:aeronos_planks')
    event.stonecutting('2x ad_astra:strophar_slab', 'ad_astra:strophar_planks')
    event.stonecutting('2x architects_palette:twisted_slab', 'architects_palette:twisted_planks')
    event.stonecutting('2x deeperdarker:echo_slab', 'deeperdarker:echo_planks')
    event.stonecutting('4x minecraft:pointed_dripstone', 'minecraft:dripstone_block')

    event.smoking('minecraft:coal_block', 'architects_palette:charcoal_block')
    event.smoking('minecraft:coal', 'minecraft:charcoal')
    //有序合成
    event.shaped(Item.of('create:andesite_alloy', 4),[
        'AA',
        'BB'
    ],{
        A:'minecraft:andesite',
        B:'architects_palette:algal_brick'
    })
    event.shaped(Item.of('create:andesite_alloy', 4),[
        'AA',
        'BB'
    ],{
        A:'architects_palette:algal_brick',
        B:'minecraft:andesite'
    })
    event.shaped(Item.of('kubejs:screwdriver', 1),[
        'B  ',
        ' AC',
        ' CA'
    ],{
        A:'createaddition:iron_rod',
        B:'minecraft:iron_nugget',
        C:'minecraft:blue_dye'
    })
    event.shaped(Item.of('create:water_wheel', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'#minecraft:wooden_slabs',
        B:'create:large_cogwheel'
    })
    event.shaped(Item.of('create:large_water_wheel', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'#minecraft:wooden_slabs',
        B:'create:water_wheel'
    })
    event.shaped(Item.of('kubejs:drill_head', 1),[
        'AA ',
        'ABC',
        ' CB'
    ],{
        A:'minecraft:iron_nugget',
        B:'ad_astra:steel_ingot',
        C:'create:iron_sheet'
    })
    event.shaped(Item.of('kubejs:saw_blade', 1),[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'ad_astra:steel_plate',
        B:'ad_astra:steel_ingot'
    })
    event.shaped(Item.of('create:flywheel', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'create:brass_ingot',
        B:'create:large_cogwheel'
    })
    event.shaped(Item.of('ad_astra:steel_cable', 4),[
        ' A ',
        'BBB',
        ' A '
    ], {
        A:'ad_astra:steel_plate',
        B:'createaddition:copper_wire'
    })
    event.shaped(Item.of('ad_astra:desh_cable', 4),[
        ' A ',
        'BBB',
        ' A '
    ], {
        A:'ad_astra:desh_plate',
        B:'createaddition:copper_wire'
    })
    event.shaped(Item.of('ad_astra:desh_fluid_pipe', 4),[
        'A',
        'B',
        'A'
    ],{
        A:'ad_astra:desh_plate',
        B:'minecraft:glass'
    })
    event.shaped(Item.of('ad_astra:ostrum_fluid_pipe', 4),[
        'A',
        'B',
        'A'
    ],{
        A:'ad_astra:ostrum_plate',
        B:'minecraft:glass'
    })
    event.shaped(Item.of('explorerscompass:explorerscompass', 1),[
        'ABA',
        'DCD',
        'ADA'
    ],{
        A:'minecraft:redstone',
        B:'create:precision_mechanism',
        C:'minecraft:compass',
        D:'kubejs:iron_mechanism'
    })
    event.shaped(Item.of('naturescompass:naturescompass', 1),[
        'ABA',
        'CDC',
        'ABA'
    ],{
        A:'#minecraft:saplings',
        B:'#minecraft:logs',
        C:'kubejs:iron_mechanism',
        D:'minecraft:compass'
    })
    event.shaped(Item.of('createaddition:barbed_wire', 1),[
        'ABA'
    ],{
        A:'createaddition:iron_wire',
        B:'minecraft:iron_bars'
    })
    event.shaped(Item.of('kubejs:rotor', 1),[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'createaddition:copper_wire',
        B:'createaddition:iron_rod'
    })
    event.shaped(Item.of('createaddition:electric_motor', 1),[
        'ABA',
        'CDC',
        'AFA'
    ],{
        A:'create:golden_sheet',
        B:'createaddition:spool',
        C:'kubejs:magnet',
        D:'kubejs:rotor',
        F:'createaddition:capacitor'
    })
    event.shaped(Item.of('createaddition:alternator', 1),[
        'ABA',
        'CDC',
        'AFA'
    ],{
        A:'create:iron_sheet',
        B:'createaddition:spool',
        C:'kubejs:magnet',
        D:'kubejs:rotor',
        F:'createaddition:capacitor'
    })
    event.shaped(Item.of('deeperdarker:heart_of_the_deep', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'deeperdarker:reinforced_echo_shard',
        B:'kubejs:incomplete_heart_of_the_deep'
    })
    event.shaped(Item.of('kubejs:incomplete_heart_of_the_deep', 1),[
        'AAAAA',
        'AABAA',
        'ABBBA',
        'AABAA',
        'AAAAA'
    ],{
        A:'kubejs:heart',
        B:'minecraft:echo_shard'
    })
    event.shaped(Item.of('ad_astra:cheese_block', 1),[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'ad_astra:cheese',
        B:'ad_astra:cheese_block'
    }).keepIngredient('ad_astra:cheese_block')
    event.shaped(Item.of('minecraft:elytra', 1),[
        ' AAA AAA ',
        'ACBBCBBCA',
        'ACBBCBBCA',
        'ACBB BBCA',
        ' ABB BBA ',
        ' ABB BBA ',
        '  AB BA  '
    ],{
        A:'minecraft:shulker_shell',
        B:'minecraft:phantom_membrane',
        C:'enderitemod:enderite_ingot'
    })
    let rocket = (tierId, materialId) => {
        event.shaped(Item.of('ad_astra:' + tierId + '_rocket'),[
            '   A   ',
            '  ACA  ',
            '  BCB  ',
            '  BCB  ',
            '  BCB  ',
            '  BCB  ',
            ' HCDCH ',
            'HFCFCFH',
            'HGGGGGH'
        ],{
            A:'ad_astra:rocket_nose_cone',
            B:'kubejs:' + tierId + '_rocket_outerwall',
            C:'kubejs:' + tierId + '_rocket_frame',
            D:'kubejs:control_core',
            H:'ad_astra:rocket_fin',
            F:'ad_astra:' + materialId + '_tank',
            G:'ad_astra:' + materialId + '_engine'
        })
    }
    rocket('tier_1', 'steel')
    rocket('tier_2', 'desh')
    rocket('tier_3', 'ostrum')
    rocket('tier_4', 'calorite')

    event.shaped(Item.of('ad_astra:tier_1_rover'),[
        'ACCA',
        'DGGD',
        'DFFD',
        'DFFD',
        'ABBA'
    ],{
        A:'ad_astra:wheel',
        B:'ad_astra:desh_engine',
        C:'createaddition:iron_rod',
        D:'ad_astra:desh_plate',
        G:'ad_astra:iron_block',
        F:'ad_astra:steel_plate'
    })
    event.shaped(Item.of('minecraft:hopper', 1),[
        'A A',
        'A A',
        ' A '
    ],{
        A:'create:iron_sheet'
    })
    event.shaped(Item.of('kubejs:extinguished_blaze_rod', 2),[
        'A',
        'A'
    ],{
        A:'minecraft:soul_sand'
    })
    event.shaped(Item.of('minecraft:echo_shard', 4),[
        ' A ',
        'ABA',
        ' A '
    ],{
        A:'minecraft:amethyst_shard',
        B:'minecraft:sculk'
    })

    event.shaped(Item.of('enderitemod:enderite_upgrade_smithing_template', 2),[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'minecraft:end_stone',
        B:'kubejs:base_template',
        C:'minecraft:netherite_ingot'
    })
    event.shaped(Item.of('kubejs:diamond_template', 1),[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'minecraft:iron_ingot',
        B:'kubejs:base_template',
        C:'minecraft:diamond'
    })

    event.shaped(Item.of('quark:pickarang', 1),[
        'ABC',
        '  B',
        '  A'
    ],{
        A:'minecraft:diamond',
        B:'#minecraft:planks',
        C:'quark:diamond_heart'
    })

    event.shaped(Item.of('ad_astra:wrench', 1),[
        'AA',
        'AB',
        ' C'
    ],{
        A:'ad_astra:steel_plate',
        B:'create:cogwheel',
        C:'createaddition:iron_rod'
    })

    event.shapeless(Item.of('createaddition:diamond_grit_sandpaper', 1),['minecraft:paper', 'createaddition:diamond_grit'])
    event.shapeless(Item.of('createaddition:portable_energy_interface', 1), ['ad_astra:iron_cable', 'createaddition:connector'])
    event.shapeless(Item.of('architects_palette:charcoal_block', 1), '9x minecraft:charcoal')
    event.shapeless(Item.of('minecraft:blaze_rod', 1), ['kubejs:extinguished_blaze_rod', 'minecraft:flint_and_steel']).damageIngredient('minecraft:flint_and_steel', 1)
    event.shapeless(Item.of('minecraft:gunpowder', 3), ['2x minecraft:charcoal', 'minecraft:blaze_powder'])
    event.shapeless(Item.of('minecraft:glowstone_dust', 2), ['minecraft:redstone', 'minecraft:blaze_powder'])
    event.shapeless(Item.of('minecraft:diamond', 1), '9x kubejs:diamond_nugget')
    event.shapeless(Item.of('kubejs:gun_book', 1), ['3x minecraft:gunpowder', 'minecraft:netherite_ingot'])
})