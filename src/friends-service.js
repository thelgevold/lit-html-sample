import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

export class FriendsService {

  getFriends(numberOfFriends) {
    return timer(10, 2000).pipe(
      map(r => {
        return { name: `Joe ${r}`, id: r };
      }),
      take(numberOfFriends)
    );
  }
}

