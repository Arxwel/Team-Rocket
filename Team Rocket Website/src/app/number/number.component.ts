import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Member } from "../model/member";
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: "app-number",
  templateUrl: "./number.component.html",
  styleUrls: ["./number.component.scss"]
})
export class NumberComponent implements OnInit {
  id: number;
  @Input() person: Member;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly http: HttpClient
  ) {
    this.person = this.router.getCurrentNavigation().extras.state as Member;
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    if (this.person == null) {
      let members: Member[];
      this.http.get('../../assets/members.json').subscribe(data => {
        members = data as Member[];
        this.person = members.filter(x => x.id === this.id)[0];
      });
    }
  }
}
