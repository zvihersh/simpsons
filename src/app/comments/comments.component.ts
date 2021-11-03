import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user-selection/models/user';
import { AccountsService } from '../user-selection/services/accounts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  user: User;
  id: string;

  constructor(private accountsService: AccountsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const userId = map.get('id');
      if (!userId) {
        this.router.navigateByUrl('');
        return;
      }
      this.accountsService.getUsers().subscribe(users => {
        if (users && users.length > 0) {
          this.user = users.find(u => u.id.toString() === userId.toString());
          if (!this.user) {
            this.router.navigateByUrl('');
            return;
          }
          console.log(this.user);
        } else {
          this.router.navigateByUrl('');
          return;
        }
      });
    });
  }

}
