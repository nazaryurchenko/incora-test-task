class User {
	userName;
	subscriptions = [];

	constructor(userName) {
		this.userName = userName;
	}

	subscribe(subscription) {
		const isAlreadySubscribed = this.subscriptions.find(({ typeOfSubscription }) => typeOfSubscription === subscription.typeOfSubscription);

		if (isAlreadySubscribed) {
			throw new Error('Already subscribed');
		}

		this.subscriptions.push(subscription);
	}
}

module.exports = User;