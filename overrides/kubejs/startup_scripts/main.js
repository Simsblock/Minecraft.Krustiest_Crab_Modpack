StartupEvents.registry('item', event => {
    event.create('incomplete_viewfinder', 'create:sequenced_assembly')
         .displayName('Incomplete Viewfinder')
         .texture('vista:item/viewfinder') 
    event.create('incomplete_television', 'create:sequenced_assembly')
         .displayName('Incomplete Television')
         .texture('create_connected:item/incomplete_control_chip') 
})

StartupEvents.registry('fluid', event => {
  event.create('molten_platinum')
    .displayName('Molten Platinum')
    .type(type => type
      .renderType(3)
      .stillTexture('createmetallurgy:fluid/silver/still')
      .flowingTexture('createmetallurgy:fluid/silver/flowing')
    )
})