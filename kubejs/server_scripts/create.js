ServerEvents.recipes(event => {
    event.recipes.create.item_application(Item.of('kubejs:iron_casing'), ['minecraft:cobblestone', 'ad_astra:steel_ingot'])
    event.recipes.create.item_application(Item.of('kubejs:desh_casing'), ['ad_astra:iron_block', 'ad_astra:desh_ingot'])
    event.recipes.create.item_application(Item.of('kubejs:ostrum_casing'), ['ad_astra:desh_block', 'ad_astra:ostrum_ingot'])
    event.recipes.create.item_application(Item.of('minecraft:end_stone'), ['minecraft:cobblestone', 'minecraft:ender_pearl'])
    event.recipes.create.deploying(Item.of('ad_astra:wheel'), ['ad_astra:steel_plate', 'create:belt_connector'])
    event.recipes.create.mixing(Item.of('create:andesite_alloy', 2),
        ['minecraft:andesite', 'architects_palette:algal_brick'
    ])
    event.recipes.create.compacting('minecraft:dripstone_block', [Fluid.water(200), 'create:limestone'])
    event.recipes.create.compacting('2x create:asurine', ['minecraft:diorite', 'minecraft:andesite', 'create:cinder_flour'])
    event.recipes.create.compacting('2x create:crimsite', ['minecraft:diorite', 'minecraft:granite', 'create:cinder_flour'])
    event.recipes.create.compacting('2x create:ochrum', ['minecraft:diorite', 'minecraft:tuff', 'create:cinder_flour'])
    event.recipes.create.compacting('2x create:veridium', ['minecraft:diorite', 'minecraft:calcite', 'create:cinder_flour'])
    event.recipes.create.compacting('minecraft:diamond', '9x kubejs:diamond_nugget')
    event.recipes.create.compacting('deeperdarker:sculk_stone', '6x minecraft:sculk')

    event.recipes.create.crushing('2x ad_astra:sky_stone', 'ad_astra:sky_stone')
    
    event.recipes.create.milling('minecraft:sand', 'minecraft:gravel')
    event.recipes.create.milling('2x ad_astra:sky_stone', 'ad_astra:sky_stone')

    event.recipes.create.splashing('minecraft:quartz', 'minecraft:soul_sand')
    event.recipes.create.splashing('minecraft:netherrack', 'minecraft:blackstone')

    event.recipes.create.pressing('kubejs:diamond_nugget', 'minecraft:coal_block')

    event.recipes.create.mixing('enderitemod:cracked_enderite_ore', ['minecraft:ancient_debris', '16x minecraft:ender_pearl'])
    
    let core = 'create:precision_mechanism'
    event.recipes.create.sequenced_assembly(Item.of('kubejs:control_core'),
        'minecraft:quartz_block',
        [
            event.recipes.create.deploying(core, [core, 'create:precision_mechanism']),
            event.recipes.create.deploying(core, [core, 'create:electron_tube']),
            event.recipes.create.deploying(core, [core, 'create:copper_nugget'])
        ]).loops(3)
            .transitionalItem(core)
    event.recipes.create.sequenced_assembly(Item.of('ad_astra:launch_pad'),
        'minecraft:iron_block',
        [
            event.recipes.create.pressing('minecraft:iron_block', 'minecraft:iron_block')
        ]).loops(5)
            .transitionalItem('minecraft:iron_block')
    let outerwalls = (tierId, materialId) => {
        let id = 'kubejs:tier_' + tierId + '_rocket_outerwall'
        let material = 'ad_astra:' + materialId + '_plate'
        event.recipes.create.sequenced_assembly(Item.of(id),
            material,
            [
                event.recipes.create.pressing(material, material)
            ]).loops(4)
                .transitionalItem(material)
    }
    outerwalls('1', 'steel')
    outerwalls('2', 'desh')
    outerwalls('3', 'ostrum')
    outerwalls('4', 'calorite')
    let frames = (tierId, materialId) => {
        let id = 'kubejs:tier_' + tierId + '_rocket_frame'
        let material = 'ad_astra:' + materialId + '_block'
        event.recipes.create.sequenced_assembly(Item.of(id),
            material,
            [
                event.recipes.create.pressing(material, material)
            ]).loops(6)
                .transitionalItem(material)
    }
    frames('1', 'steel')
    frames('2', 'desh')
    frames('3', 'ostrum')
    frames('4', 'calorite')
    event.recipes.create.sequenced_assembly(Item.of('minecraft:ancient_debris'),
        'minecraft:netherrack',
        [
            event.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'minecraft:diamond']),
            event.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'minecraft:gold_ingot']),
            event.recipes.create.deploying('minecraft:netherrack', ['minecraft:netherrack', 'minecraft:quartz']),
            event.recipes.create.pressing('minecraft:netherrack', 'minecraft:netherrack')
        ]).loops(8).transitionalItem('minecraft:netherrack')
    
})