# Desc: Applies age lock, custom name and glowing effect
#
# Called by: age_lock:check

execute store result score $age age_lock run data get entity @s Age
data modify storage age_lock:temp name set from entity @s CustomName
execute if score $age age_lock matches 0.. run return run function age_lock:fail with storage age_lock:temp

data merge entity @s {CustomName:'age locked',CustomNameVisible:1b,Age:-2e8}
effect give @s minecraft:glowing 3 0 true
execute at @s run playsound minecraft:block.amethyst_block.resonate ambient @a[distance=..6] ~ ~ ~ .8 2
tag @s add age_lock.locking
tag @s add age_lock.locked

schedule function age_lock:remove_name 3s replace
