# Desc: remove age lock name
#
# Called by: age_lock:apply

execute as @e[tag=age_lock.locking] run data remove entity @s CustomName
execute as @e[tag=age_lock.locking] run data remove entity @s CustomNameVisible
tag @e remove age_lock.locking
