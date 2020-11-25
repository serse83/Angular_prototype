
import { Pipe, PipeTransform } from '@angular/core';



export interface User {
  name: string;
  email: string;
  username: string;
}



@Pipe({
  name: 'filter'

})

export class FilterPipe implements PipeTransform {
  transform(    
    users: User[],
    nameSearch: string,
    emailSearch: string,
    usernameSearch: string,
 
    ): User[] { if (!users) return [];
 
    if (!nameSearch) return users;
    nameSearch = nameSearch.toLowerCase();
   users = [...users.filter(user => user.name.toLowerCase().includes(nameSearch))];

    if (!emailSearch) 
    return users; emailSearch = emailSearch.toLowerCase(); users = [...users.filter(user => user.email.toLowerCase().includes(emailSearch))];

   if (!usernameSearch) return users;
    usernameSearch = usernameSearch.toLowerCase();
  users = [...users.filter(user => user.username.toLowerCase().includes(usernameSearch))];

    return users;
  }
}