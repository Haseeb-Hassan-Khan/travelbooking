import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminServiceService } from 'src/app/admin-post/admin-service.service';

@Component({
  selector: 'app-admin-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.css']
})
export class AdminPostComponent implements OnInit {

  adminForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      bus_name: [''],
      service_name: [''],
      vehicle_no: [''],
      vehicle_imgUrl: [''],
      destination: [''],
      arrival: [''],
      recommend_survey: [''],
      useful_survey: [''],
      message: ['']
    });
  }

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const id = target.id;

    if (id === 'yes' && target.checked) {
      this.adminForm.get('useful_survey')?.setValue('yes');
      const noCheckbox = document.getElementById('no') as HTMLInputElement;
      if (noCheckbox) {
        noCheckbox.checked = false;
      }
    } else if (id === 'no' && target.checked) {
      this.adminForm.get('useful_survey')?.setValue('no');
      const yesCheckbox = document.getElementById('yes') as HTMLInputElement;
      if (yesCheckbox) {
        yesCheckbox.checked = false;
      }
    } else {
      this.adminForm.get('useful_survey')?.setValue('');
    }
  }

  postService() {
    const ab = this.adminForm.value.destination
    this.adminService.postBusOwner(this.adminForm.value).subscribe(responce =>{
      console.log("Bus Owner's data has been posted")
    })
    
  }
}
