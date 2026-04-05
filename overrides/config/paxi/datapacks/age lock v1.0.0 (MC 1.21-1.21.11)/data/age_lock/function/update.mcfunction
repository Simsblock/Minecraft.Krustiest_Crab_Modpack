# Desc: Update age locked mobs (they expire after a year)
#
# Called by: #minecraft:load

schedule function age_lock:update 1d replace

execute as @e[tag=age_lock.locked] run data modify entity @s Age set value -2e8
