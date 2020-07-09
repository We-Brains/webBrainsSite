const functions = require('firebase-functions');
const telegraf = require('telegraf');
const admin = require('firebase-admin');
admin.initializeApp();

const bot = new telegraf.Telegram(functions.config().bot.token);

exports.addUser = functions.https.onRequest((req, res) => {
	bot.onText(/\/start/, async (msg) => {
		const chatId = msg.chat.id;
		bot.sendMessage(chatId, 'Hello there');
	});
	res.status(200).send('ok');
});

exports.sendMail = functions.https.onRequest((req, res) => {
	const data = JSON.parse(req.body);
	admin
		.firestore()
		.collection('users')
		.get()
		.then((snapshot) => {
			const chat_ids = snapshot.docs.map((doc) => doc.data().chat_id);
			chat_ids.forEach((chat_id) => {
				bot
					.sendMessage(chat_id, `Имя: ${data.name}\nТелефон: ${data.phone}`)
					.catch(() => res.status(500).send('fail'));
			});
			res.status(200).send('ok');
		})
		.catch(() => {
			res.send(500).send('fail');
		});
});
