import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServiceComponent,private route:Router) { }
projectList:any=[];
  ngOnInit(): void {
    this.projectList=[{"id":"234", "name":"test", "status":"IN_PROGRESS", "dateCreated":"2021-03-16T17:33", "archived":false}, {"id":"112", "name":"demo", "status":"FINISHED", "dateCreated":"2021-02-23T11:32", "archived":false}]
this.service.getProjectList().subscribe(data=>{
  console.log(data)
  this.projectList=data;
  

})
  }
  create()
  {
this.route.navigate(['/add'])
  }
  delete(item)
  {
    swal({
      title: "Are you sure that you want to archive "+item.name+' ?',
      icon: "warning",
      buttons: [
        'No',
        'Yes'
      ],
      dangerMode: true,
    }).then((isConfirm)=> {
      if (isConfirm) {
        this.service.deleteproject(item.id).subscribe(date=>{
          swal({
            title: 'Archived!',
            text: 'project is  successfully Archived!',
            icon: 'success'
          })
        })
      
      } else {
        swal("Cancelled", "Project is safe :)", "error");
      }
    });
  }

}
