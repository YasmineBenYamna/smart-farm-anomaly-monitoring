import { isPlatformBrowser } from "@angular/common";
import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, PLATFORM_ID, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-add-bookmark",
    templateUrl: "./add-bookmark.component.html",
    styleUrls: ["./add-bookmark.component.scss"],
    imports: [FormsModule, ReactiveFormsModule]
})
export class AddBookmarkComponent implements OnInit {
  addBookmarkForm: FormGroup;
  public closeResult!: string;
  public modalOpen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private modalService: NgbModal, public activeModal: NgbActiveModal, private fd: FormBuilder, private router: Router) {
    this.addBookmarkForm = new FormGroup({
      webUrl: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      collection: new FormControl(),
    });
  }

  resetFields() {
    this.addBookmarkForm = this.fd.group({
      webUrl: new FormControl("", Validators.required),
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      collection: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {}
}
