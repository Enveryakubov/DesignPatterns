class Member {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(msg, toMember) {
    this.chatroom.send(msg, this, toMember);
  }

  receive(msg, fromMember) {
    console.log(`From memeber ${fromMember.name} to ${this.name}: ${msg}`);
  }
}

class Chatroom {
  members = {};

  addMember(member) {
    this.members[member.name] = member;
    member.chatroom = this;
  }

  send(msg, fromMember, toMember) {
    toMember.receive(msg, fromMember);
  }
}

const chatroom1 = new Chatroom();

const enver = new Member('Enver');
const adam = new Member('Adam');

chatroom1.addMember(adam);
chatroom1.addMember(enver);

chatroom1.send('Hi, there!', adam, enver);
chatroom1.send('Hello! How u doing?', enver, adam);
