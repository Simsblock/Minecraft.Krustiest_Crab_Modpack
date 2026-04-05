# Desc: Safety revoke just in-case
#
# Called by: #minecraft:load

advancement revoke @a only age_lock:detect

scoreboard objectives add age_lock dummy

schedule function age_lock:update 1d replace
