const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GROUP MENU* ]----- 🔰
Hallo, ${pushname} 👋
Have a nice day for users, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
The following are the features of this bot!✨
If you don't understand, type *${prefix}command*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}welcome* ⟪ 1/0 ⟫
┃│➸ *${prefix}leveling* ⟪ 1/0 ⟫
┃│➸ *${prefix}event* ⟪ 1/0 ⟫
┃│➸ *${prefix}simih* ⟪ 1/0 ⟫
┃│➸ *${prefix}nsfw* ⟪ 1/0 ⟫
┃│➸ *${prefix}grup* ⟪ open/close ⟫
┃│➸ *${prefix}add*
┃│➸ *${prefix}kick*
┃│➸ *${prefix}hedsot*
┃│➸ *${prefix}linkgrup*
┃│➸ *${prefix}promote*
┃│➸ *${prefix}demote*
┃│➸ *${prefix}setname*
┃│➸ *${prefix}setdesc*
┃│➸ *${prefix}leave*
┃│➸ *${prefix}tagall*
┃│➸ *${prefix}admin*
┃│➸ *${prefix}level*
┃│➸ *${prefix}hidetag*
┃│➸ *${prefix}hidetag5*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.groupm = groupm
