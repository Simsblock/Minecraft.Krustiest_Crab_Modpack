# Desc: Fails to age lock so returns nametag
#
# Called by: age_lock:check

$give @p[gamemode=!creative,tag=age_lock.self] name_tag[custom_name='$(name)'] 1

# for pre-1.21.4
data modify entity @s CustomName set value ''
data remove entity @s CustomName

title @p[tag=age_lock.self] actionbar {text: "Failed to age lock, entity is not a baby", color: "red"}
