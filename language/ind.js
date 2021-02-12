exports.wait = () => {
	return`*「❗」WAIT CHEYY*`
}

exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「❗」ENABLE LEVELING*`
}

exports.lvloff = () => {
	return`*「❗」DISABLE LEVELING*`
}

exports.lvlnul = () => {
	return`*「❗」YOUR LEVEL IS STILL EMPTY*`
}

exports.lvlnoon = () => {
	return`*「❗」GRUB LEVEL IS NOT ACTIVATED YET*`
}

exports.noregis = () => {
	return`*「❗」NOT REGISTERED*\n*TO REGISTER ${prefix}register name/age* \n\n*example ${prefix}register Vai/20*`
}

exports.baned = () => {
	return`*「❗」SORRY MWTHE, YOU ARE BANNED HU HU HU :V*`
}

exports.rediregis = () => {
	return`*「 ALREADY REGISTERED 」*\n\n*you have registered previously >_<*`
}

exports.stikga = () => {
	return`*「 FAILED 」Better Luck Next Time brou*`
}

exports.linkga = () => {
	return`*「❗」LINK INVALID*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」BOT OWNER ONLY*`
}

exports.ownerg = () => {
	return`*「❗」GROUP OWNER ONLY*`
}

exports.admin = () => {
	return`*「❗」GROUP ADMIN ONLY*`
}

exports.badmin = () => {
	return`*「❗」MWONE BOT ADMIN AVANAM*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW IN ACTIVE*`
}

exports.bug = () => {
	return`*Any issue,contact owner*`
}

exports.wrongf = () => {
	return`*「🤔」Where's the text, bro?*`
}

exports.clears = () => {
	return`*「🚮」Clear all Success*`
}

exports.pc = () => {
	return`*「❗」REGISTRATION*\n\nTo find out if you have registered please check the message I sent\n\nNOTE:\n*if you haven't got the message. means you haven't saved your bot number*`
}

exports.registered = (username, userage, serialUser, time, sender, botName) => {
	return`*「 SUCCESSFUL REGISTRATION 」*\n User Info :\n\n*➸ Name : ${username}*\n*➸ Number : wa.me/${sender.split("@")[0]}*\n*➸ user age : ${userage}*\n*➸ time  : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTE : Nere chovve use cheythillel ban akkum ha :v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* not found\try writing *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*sorry ${pushname} abhi owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 Greetings 」*
➸ *Name* : ${pushname}
➸ *Number* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Sory ${pushname} limit finished*\n*limit will reset at 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
the rest of your limit : ${limitCounts}

This is a premium, free to use bot`
}

exports.satukos = () => {
	return`*Add parameter 1 / enable or 0 / disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAME : ${pushname}\n┃│➸ NUMBER : ${sender.split("@")[0]}\n┃│➸ CREDITS : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}
