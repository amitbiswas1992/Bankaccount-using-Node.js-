var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return account;
}


function getAccount (username) {
	var matchedAccount;

// replace this forEach to Forloop /whileloop
	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}


function deposit (account, amount) {
	account.balance += amount;
}


function withdraw (account, amount) {
	account.balance -= amount;
}


function getBalance (account) {
	return account.balance;
}
