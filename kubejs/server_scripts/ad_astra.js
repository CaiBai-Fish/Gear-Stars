ServerEvents.recipes(event => {
    event.recipes.create.crushing('ad_astra:moon_sand', 'ad_astra:moon_cobblestone')
    event.recipes.create.crushing('ad_astra:mars_sand', 'ad_astra:mars_cobblestone')
    event.recipes.create.crushing('ad_astra:venus_sand', 'ad_astra:venus_cobblestone')
    event.recipes.create.crushing('ad_astra:moon_cobblestone', 'ad_astra:moon_stone')
    event.recipes.create.crushing('ad_astra:mars_cobblestone', 'ad_astra:mars_stone')
    event.recipes.create.crushing('ad_astra:venus_cobblestone', 'ad_astra:venus_stone')

    event.recipes.create.mixing('2x ad_astra:cheese_block', ['8x ad_astra:cheese', 'ad_astra:cheese_block'])

    event.recipes.create.splashing([Item.of('minecraft:iron_nugget').withChance(0.15), 
                                Item.of('ad_astra:desh_nugget').withChance(0.25),
                                Item.of('minecraft:diamond').withChance(0.01),
                                Item.of('ad_astra:ice_shard').withChance(0.04)], 'ad_astra:moon_sand')
    event.recipes.create.splashing([Item.of('minecraft:iron_nugget').withChance(0.15), 
                                Item.of('ad_astra:ostrum_nugget').withChance(0.25),
                                Item.of('minecraft:diamond').withChance(0.01),
                                Item.of('ad_astra:ice_shard').withChance(0.04)], 'ad_astra:mars_sand')
    event.recipes.create.splashing([Item.of('minecraft:iron_nugget').withChance(0.15),
                                Item.of('minecraft:gold_nugget').withChance(0.05),
                                Item.of('ad_astra:calorite_nugget').withChance(0.25),
                                Item.of('minecraft:diamond').withChance(0.01)], 'ad_astra:venus_sand')
    event.recipes.create.crushing([Item.of('ad_astra:ice_shard').withChance(0.5),
                                Item.of('create:copper_nugget').withChance(0.15),
                                Item.of('minecraft:iron_nugget').withChance(0.15),
                                Item.of('minecraft:lapis_lazuli').withChance(0.1)], 'ad_astra:glacio_stone')
    event.recipes.create.crushing([Item.of('minecraft:iron_nugget').withChance(0.25)], 'ad_astra:mercury_stone')
})