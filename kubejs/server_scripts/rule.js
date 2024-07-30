// 初始化玩家数据
PlayerEvents.loggedIn(event => {
    const player = event.player;
    const data = player.persistentData;
    if (!data.contains('can_travel_to_nether')) {
        data.putBoolean('can_travel_to_nether', false);
    }
    if (!data.contains('can_travel_to_end')) {
        data.putBoolean('can_travel_to_end', false);
    }
});

// 监听玩家食用特定食物事件
ItemEvents.foodEaten(event => {
    const player = event.player;
    const item = event.item;

    // 特定食物1：下界蛋糕
    if (item.id === 'kubejs:nether_cake') {
        player.persistentData.putBoolean('can_travel_to_nether', true);
        player.tell('§5你现在可以去下界了!');
    }

    // 特定食物2：末地蛋糕
    if (item.id === 'kubejs:end_cake') {
        player.persistentData.putBoolean('can_travel_to_end', true);
        player.tell('§5你现在可以去末地了!');
    }
});

// 限制维度传送
ServerEvents.tick(event => {
    const players = event.server.players;
    
    players.forEach(player => {
        const data = player.persistentData;
        const currentDimension = player.level.dimension;

        // 检查特定维度的权限
        if (currentDimension === 'minecraft:the_nether' && !data.getBoolean('can_travel_to_nether')) {
            const overworld = player.server.getLevel('minecraft:overworld');
            player.changeDimension(overworld);
            player.tell('§9你还不能去下界!');
        }

        if (currentDimension === 'minecraft:the_end' && !data.getBoolean('can_travel_to_end')) {
            const overworld = player.server.getLevel('minecraft:overworld');
            player.changeDimension(overworld);
            player.tell('§9你还不能去末地!');
        }
    });
});