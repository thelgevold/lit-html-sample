import { html, render } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map';
import { repeat } from 'lit-html/directives/repeat';

import { FriendsService } from './friends-service';

const friendsService = new FriendsService();

let friends = [];
friendsService.getFriends(4).subscribe(f => {
  friends = [...friends, f];
  render(friendsList(friends), document.body);
});

const friendsList = (friendsList) => html` 
  <ul class="${classMap({ 'wrapper': true })}"> 
    ${repeat(friendsList, (friend) => friend.id, (friend) =>
  html`<li>${friend.id} ${friend.name}</li>`)}
  </ul>`


