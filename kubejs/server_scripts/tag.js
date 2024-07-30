ServerEvents.tags('item', event => {
    event.add('kubejs:saws', ['kubejs:stone_saw','kubejs:iron_saw','kubejs:diamond_saw','kubejs:netherite_saw'])
    let tools = (tem, mod) => {
        let id = mod + ':diamond_' + tem
        event.add('forge:tools/diamond', id)
                //id + '_pickaxe', id + '_axe', id + '_hoe', id + '_shovel', id + '_wand'
    }
    tools('pickaxe', 'minecraft')
    tools('axe', 'minecraft')
    tools('hoe', 'minecraft')
    tools('shovel', 'minecraft')
    tools('wand', 'constructionwand')
})