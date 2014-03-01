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
		/* （問題）idがaccountIdのユーザの口座にamount円預金する関数を作ろう */
	},
	withdrawal: function(accountId, amount) {
		/* （問題）idがaccountIdのユーザの口座からamount円出金する関数を作ろう */
	},
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
