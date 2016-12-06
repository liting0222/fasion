function User(name,password){
	this.name=name;
	this.password=password;
}
var users=new Array();
var user1=new User('anna','123456');
var user2=new User('lisa','123456');
var user3=new User('linda','123456');
users.push(user1);
users.push(user2);
users.push(user3);