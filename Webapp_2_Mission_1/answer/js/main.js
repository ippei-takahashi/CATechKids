var tom = {
	name: "Tom",
	money: 3000
};

var john = {
	name: "John",
	money: 5000
};

var bank = {
	accounts: {
		100: {
			owner: tom,
			balance: 5000	
		},
		200: {
			owner: john,
			balance: 10000
		}
	}, /* id毎のアカウント情報 */
	deposit: function(accountId, amount) {
		var account = this.accounts[accountId];
		var owner = account.owner;
		if (amount > owner.money) {
			alert("所持金を超えています。");
		} else {
			owner.money -= amount;
			account.balance += amount;
		}
	}, 
	withdrawal: function(accountId, amount) {
		var account = this.accounts[accountId];
		var owner = account.owner;
		if (amount > account.balance) {
			alert("預金残高を超えています。");
		} else {
			owner.money += amount;
			account.balance -= amount;
		}
	}
};

function init() {
	var select = $("#users");
	for (var i in bank.accounts) {
		var owner = bank.accounts[i].owner;
		var option = $("<option/>").val(i).attr("label", owner.name);
		select.append(option);
	}
}

function showInfo() {
	var text = "";
	for (var i in bank.accounts) {
		var account = bank.accounts[i];
		var user = account.owner;
		text += user.name + "の所持金は" + user.money + "円です、預金残高は" + account.balance + "円です。";
	}
	$("#info").text(text);
}

$(document).ready(function() {
	init();
	showInfo();
});
