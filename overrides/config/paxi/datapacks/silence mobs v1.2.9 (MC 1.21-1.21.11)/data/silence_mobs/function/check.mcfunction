# Desc: Checks for mobs with specific name and silences them
#
# Called by: silence_mobs:detect (adv)

execute as @n[name="silence me", distance=..16] run function silence_mobs:apply
execute as @n[name="Silence me", distance=..16] run function silence_mobs:apply
execute as @n[name="silence_me", distance=..16] run function silence_mobs:apply
execute as @n[name="Silence Me", distance=..16] run function silence_mobs:apply

advancement revoke @s only silence_mobs:detect
