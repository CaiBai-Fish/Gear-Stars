ServerEvents.recipes(event => {
    let andesite = 'kubejs:incomplete_andesite_mechanism'
    event.recipes.createSequencedAssembly(Item.of('kubejs:andesite_mechanism'),         //安山构件
        '#minecraft:wooden_slabs',
        [
            event.recipes.createDeploying(andesite, [andesite, 'create:andesite_alloy']),
            event.recipes.createDeploying(andesite, [andesite, 'create:andesite_alloy']),
            event.recipes.createDeploying(andesite, [andesite, '#kubejs:saws'])
        ]).loops(1)
            .transitionalItem(andesite)
    let precision = 'create:incomplete_precision_mechanism'
    event.recipes.createSequencedAssembly(Item.of('create:precision_mechanism'),        //精密构件
        'kubejs:andesite_mechanism',
        [
            event.recipes.createDeploying(precision, [precision, 'create:electron_tube']),
            event.recipes.createDeploying(precision, [precision, 'create:electron_tube']),
            event.recipes.createDeploying(precision, [precision, 'kubejs:screwdriver'])
        ]).loops(2)
            .transitionalItem(precision)
    let steel = 'kubejs:incomplete_iron_mechanism'
    event.recipes.createSequencedAssembly(Item.of('kubejs:iron_mechanism'),            //精钢构件
        'create:precision_mechanism',
        [
            event.recipes.createDeploying(steel, [steel, 'ad_astra:steel_plate']),
            event.recipes.createDeploying(steel, [steel, 'ad_astra:steel_plate']),
            event.recipes.createPressing(steel, steel),
            event.recipes.createDeploying(steel, [steel, 'kubejs:screwdriver'])
        ]).loops(4)
            .transitionalItem(steel)
    let desh = 'kubejs:incomplete_desh_mechanism'
    event.recipes.createSequencedAssembly(Item.of('kubejs:desh_mechanism'),             //戴斯构件
        'create:precision_mechanism',
        [
            event.recipes.createDeploying(desh, [desh, 'ad_astra:desh_plate']),
            event.recipes.createPressing(desh, desh),
            event.recipes.createDeploying(desh, [desh, 'ad_astra:desh_plate']),
            event.recipes.createPressing(desh, desh),
            event.recipes.createDeploying(desh, [desh, 'kubejs:screwdriver'])
        ]).loops(4)
            .transitionalItem(desh)
    let ostrum = 'kubejs:incomplete_ostrum_mechanism'
    event.recipes.createSequencedAssembly(Item.of('kubejs:ostrum_mechanism'),           //紫金构件
        'create:precision_mechanism',
        [
            event.recipes.createDeploying(ostrum, [ostrum, 'ad_astra:ostrum_plate']),
            event.recipes.createPressing(ostrum, ostrum),
            event.recipes.createDeploying(ostrum, [ostrum, 'ad_astra:ice_shard']),
            event.recipes.createDeploying(ostrum, [ostrum, 'kubejs:screwdriver'])
        ]).loops(4)
            .transitionalItem(ostrum)
    let calorite = 'kubejs:incomplete_calorite_mechanism'
    event.recipes.createSequencedAssembly(Item.of('kubejs:calorite_mechanism'),         //耐热构件
        'create:precision_mechanism',
        [
            event.recipes.createDeploying(calorite, [calorite, 'ad_astra:calorite_ingot']),
            event.recipes.createDeploying(calorite, [calorite, 'ad_astra:calorite_ingot']),
            event.recipes.createPressing(calorite, calorite),
            event.recipes.createDeploying(calorite, [calorite, 'ad_astra:ice_shard']),
            event.recipes.createDeploying(calorite, [calorite, 'ad_astra:calorite_ingot']),
            event.recipes.createDeploying(calorite, [calorite, 'kubejs:screwdriver'])
        ]).loops(4)
            .transitionalItem(calorite)
    //回响构件
    let echos = 'kubejs:incomplete_echo_mechanism'
    event.recipes.createSequencedAssembly(Item.of('kubejs:echo_mechanism'),
        'minecraft:sculk',
        [
            event.recipes.createDeploying(echos, [echos, 'minecraft:echo_shard']),
            event.recipes.createDeploying(echos, [echos, 'minecraft:echo_shard']),
            event.recipes.createDeploying(echos, [echos, 'deeperdarker:warden_carapace'])
        ]).loops(16)
            .transitionalItem(echos)
    //下界构件
    /*let nether = 'kubejs:incomplete_nether_mechanism'
    event.recipes.createSequencedAssembly(Item.of('kubejs:nehter_mechanism'),
        'kubejs:ostrum_mechanism',
        [
            event.recipes.createDeploying(nether, [nether, 'minecraft:blaze_powder']),
            event.recipes.createDeploying(nether, [nether, 'minecraft:netherrack'])
        ]).loops(16).transitionalItem(nether)
    //末影构件
    let end = 'kubejs:incomplete_end_mechanism'
    event.recipes.createSequencedAssembly(Item.of('kubejs:end_mechanism'),
        'kubejs:ostrum_mechanism',
        [
            event.recipes.createDeploying(Item.of(end, [end, 'minecraft:ender_pearl'])),
            event.recipes.createDeploying(Item.of(end), [end, 'minecraft:end_stone'])
        ]).loops(16).transitionalItem(end)*/
})