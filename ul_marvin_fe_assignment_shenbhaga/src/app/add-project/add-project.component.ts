import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  status="IN_PROGRESS";
  name="";
  constructor(private services:ServiceComponent,private route:Router) { }

  ngOnInit(): void {
  }
save()
{
  this.services.addproject(this.name,this.status).subscribe(data=>{
    this.route.navigate(['home']);
  })
}
}
