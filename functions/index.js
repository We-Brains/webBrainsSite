/* eslint-disable */

const functions = require('firebase-functions');
const telegraf = require('telegraf');
const admin = require('firebase-admin');
admin.initializeApp();

const bot = new telegraf.Telegram(functions.config().bot.token);

exports.addUser = functions.https.onRequest((req, res) => {
	const isTelegramMessage = req.body && req.body.message && req.body.message.chat && req.body.message.chat.id;

	if (isTelegramMessage) {
		const chat_id = req.body.message.chat.id;
		const message = req.body.message.text;
		if (message === '/start') {
			admin.firestore().collection('/users').get().then((snapshot) => {
				const chat_ids = snapshot.docs.map((doc) => doc.data().chat_id);
				if (chat_ids.includes(`${chat_id}`)) {
					return res.status(200).send({
						method: 'sendMessage',
						chat_id,
						text: 'Добро пожаловать'
					});
				} else {
					admin
						.firestore()
						.collection('/users')
						.add({
							chat_id: `${chat_id}`
						})
						.then(() => {
							return res.status(200).send({
								method: 'sendMessage',
								chat_id,
								text: 'Добро пожаловать'
							});
						})
						.catch(() => {
							return res.status(200).send({
								method: 'sendMessage',
								chat_id,
								text: `Что то пошло не так при добавлении ид этого чата ${chat_id}`
							});
						});
				}
			});
		}
	}
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
					.then(() => res.status(200).send('ok'))
					.catch(() => res.status(500).send('fail'));
			});
		})
		.catch(() => {
			res.send(500).send('fail');
		});
});
