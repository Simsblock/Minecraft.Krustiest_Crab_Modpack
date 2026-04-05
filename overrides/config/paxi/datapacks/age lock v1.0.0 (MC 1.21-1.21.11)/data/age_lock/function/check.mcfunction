# Desc: Checks for mobs with specific name and silences them
#
# Called by: age_lock:detect (adv)

tag @s add age_lock.self

execute as @n[name="age lock", distance=..16] run function age_lock:apply
execute as @n[name="Age lock", distance=..16] run function age_lock:apply
execute as @n[name="age_lock", distance=..16] run function age_lock:apply
execute as @n[name="Age Lock", distance=..16] run function age_lock:apply

tag @s remove age_lock.self
advancement revoke @s only age_lock:detect
